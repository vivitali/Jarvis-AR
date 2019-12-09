import { put, takeEvery, call } from "redux-saga/effects";

import { navigate } from "../../../services/NavigationService";
import { realm, auth0, appUser } from "../../../models";

import * as constants from "./constants";
import {
  authenticationPending,
  authenticationSuccess,
  authenticationFailure,
  resetAuthenticationData,
} from "./actions";
import { resetProfileData } from "../../profile/redux/actions";
import { resetScanData } from "../../scanner/redux/actions";

export function* authenticate({ payload }) {
  yield put(authenticationPending());
  try {
    const user = yield call(() => {
      return auth0.auth.passwordRealm({ ...realm, ...payload });
    });
    yield call(() => {
      return appUser.set(user);
    });
    yield put(authenticationSuccess());
    yield navigate("Scanner");
  } catch ({ message, name }) {
    const err =
      name === "Missing required parameters"
        ? "Please, fill all required fields"
        : message;
    yield put(authenticationFailure(err));
  }
}

export function* resetAuthentication() {
  yield call(() => {
    return appUser.clear();
  });
  yield put(resetAuthenticationData());
  yield navigate("Auth");
}

export function* resetData() {
  yield call(resetAuthentication);
  yield put(resetProfileData());
  yield put(resetScanData());
}

/**
 * Watcher for SignIn Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export default function* authenticationSaga() {
  yield takeEvery(constants.AUTHENTICATE, authenticate);
  yield takeEvery(constants.INVALIDATE, resetData);
}
