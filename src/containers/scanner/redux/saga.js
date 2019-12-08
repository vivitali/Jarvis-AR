// @flow
import { put, takeLatest } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import {
  loadScanPending,
  loadScanSuccess,
  loadScanFailure,
  selectUserProfile,
} from "./actions";
import * as constants from "./constants";
import { getUserByCarNumber } from "../../../services/api";
// $FlowFixMe
// import RNMlKit from "react-native-firebase-mlkit";
import * as NavigationService from "../../../services/NavigationService";
import { getProfile } from "./selectors";
import { select } from "@redux-saga/core/effects";

export function* processScanData({ payload }: any): Saga<*> {
  yield put(loadScanPending());

  try {
    if (!(payload && payload.textBlocks.length)) {
      throw "UNMATCHED";
    }

    const processedVR = payload.textBlocks.map(({ value }) => ({
      text: value.split(" ").join(""),
    }));

    const data = yield getUserByCarNumber(processedVR);
    yield put(loadScanSuccess(data));
    const [firstMatch] = yield select(getProfile);

    if (!firstMatch) {
      throw "Please, try again";
    }

    yield put(selectUserProfile(firstMatch));
    NavigationService.navigate("Profile");
  } catch (error) {
    alert(error);
    yield put(loadScanFailure(error));
  }
}

export function* searchNumber({ payload }: any): any {
  yield put(loadScanPending());
  try {
    const data = yield getUserByCarNumber([{ text: payload }]);
    yield put(loadScanSuccess(data));
    //todo check if user exist before navigation
    // move to a general handler
  } catch (error) {
    alert(error);
    yield put(loadScanFailure(error));
  }
}

export function* navigationProfile({ payload }: any): any {
  try {
    yield put(selectUserProfile(payload));
    NavigationService.navigate("Profile");
  } catch (error) {
    alert(error);
    yield put(loadScanFailure(error));
  }
}

/**
 * Watcher for Scanner Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export function* tripSaga(): Saga<*> {
  yield takeLatest(constants.PROCESS_SCAN_DATA, processScanData);
  yield takeLatest(constants.SEARCH_NUMBER, searchNumber);
  yield takeLatest(constants.NAVIGATE_PROFILE, navigationProfile);
}

export default tripSaga;
