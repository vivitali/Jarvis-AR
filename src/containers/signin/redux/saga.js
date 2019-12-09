import { put, takeEvery, call } from "redux-saga/effects";
import * as Keychain from "react-native-keychain";
import TouchID from "react-native-touch-id";

import { navigate } from "../../../services/NavigationService";
import { realm, auth0, appUser } from "../../../models";

import * as constants from "./constants";
import {
  authenticationPending,
  authenticationSuccess,
  authenticationFailure,
  resetAuthenticationData,
} from "./actions";
import resetData from "../../../redux/saga/app.saga";

export function* authenticate({ payload }) {
  yield put(authenticationPending());
  try {
    const user = yield call(() => {
      return auth0.auth.passwordRealm({ ...realm, ...payload });
    });
    yield call(() => {
      return appUser.set(user);
    });

    yield Keychain.setGenericPassword(payload.username, payload.password);

    yield put(authenticationSuccess());
    yield navigate("Scanner");
  } catch ({ message, name }) {
    const missedParams = name === "Missing required parameters";
    const err = missedParams ? "Please, fill all required fields" : message;
    yield put(authenticationFailure(err));

    if (missedParams) {
      yield Keychain.resetGenericPassword();
    }
  }
}

export function* resetAuthentication() {
  yield call(appUser.clear);
  yield put(resetAuthenticationData());
  yield navigate("Auth");
}

function* faceIdAuthenticate() {
  const config = {
    title: "Authentication Required", // Android
    color: "#e00606", // Android,
    fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  };

  try {
    const { username, password } = yield Keychain.getGenericPassword();

    if (!username || !password) {
      return;
    }

    yield call(TouchID.isSupported);
    yield call(TouchID.authenticate, "Access to Jarvis", config);
    yield call(authenticate, { payload: { username, password } });
  } catch (e) {
    handleError(e);
  }
}

/**
 * Watcher for SignIn Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export default function* authenticationSaga() {
  yield takeEvery(constants.AUTHENTICATE, authenticate);
  yield takeEvery(constants.FACE_ID_AUTHENTICATE, faceIdAuthenticate);
  yield takeEvery(constants.RESETALLDATA, resetData);
}

const handleError = (e = {}) => {
  const notSupportedCodes = [
    "LAErrorTouchIDNotEnrolled",
    "RCTTouchIDNotSupported",
    "LAErrorTouchIDNotAvailable",
  ];
  const cancelledCodes = ["LAErrorUserCancel", "LAErrorSystemCancel"];
  const skipCodes = [...notSupportedCodes, ...cancelledCodes];

  const notSupported = skipCodes.includes(e.name);

  if (notSupported) {
    return;
  }

  alert(e.message);
};
