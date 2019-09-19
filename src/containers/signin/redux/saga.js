import { put, takeEvery, call } from "redux-saga/effects";

import { navigate } from "../../../services/NavigationService";
import { AsyncStorage } from "react-native";
import Auth0 from "react-native-auth0";
import config from "react-native-config";

import * as constants from "./constants";
import {
  authenticationPending,
  authenticationSuccess,
  authenticationFailure,
  resetAuthenticationData
} from "./actions";

const auth0 = new Auth0({
  domain: config.AUTH0_DOMAIN,
  clientId: config.AUTH0_CLIENT_ID
});

const realm = {
  audience: config.AUTH0_AUDIENCE,
  realm: "Username-Password-Authentication"
};

export function* authenticate({ payload }) {
  yield put(authenticationPending());
  try {
    const token = yield call(() => {
      return auth0.auth.passwordRealm({ ...realm, ...payload });
    });
    yield call(() => {
      return AsyncStorage.setItem("userToken", JSON.stringify(token));
    });
    yield put(authenticationSuccess());
    yield navigate("Scanner");
  } catch ({ message }) {
    yield put(authenticationFailure(message));
  }
}

export function* resetAuthentication() {
  yield call(() => {
    return AsyncStorage.clear();
  });
  yield put(resetAuthenticationData());
  yield navigate("Auth");
}

/**
 * Watcher for SignIn Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export default function* authenticationSaga() {
  yield takeEvery(constants.AUTHENTICATE, authenticate);
  yield takeEvery(constants.INVALIDATE, resetAuthentication);
}
