// @flow
import { put, takeEvery, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { loadScanPending, loadScanSuccess, loadScanFailure } from "./actions";
import * as constants from "./constants";
import { getUserByCarNumber } from "../../../services/api";
// $FlowFixMe
import RNTextDetector from "react-native-text-detector";
import * as NavigationService from "../../../services/NavigationService";

export function* processScanData({ payload }: any): Saga<*> {
  console.log(payload);
  yield put(loadScanPending());

  try {
    const visionResp = yield RNTextDetector.detectFromUri(payload);

    if (!(visionResp && visionResp.length)) {
      throw "UNMATCHED";
    }

    const data = yield getUserByCarNumber(visionResp);
    NavigationService.navigate("Profile", { user: data });
  } catch (error) {
    yield put(loadScanFailure(error));
  }
}

/**
 * Watcher for Scanner Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export function* tripSaga(): Saga<*> {
  yield takeEvery(constants.PROCESS_SCAN_DATA, processScanData);
}

export default tripSaga;
