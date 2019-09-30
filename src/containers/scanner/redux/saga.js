// @flow
import { put, takeLatest, call } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { loadScanPending, loadScanSuccess, loadScanFailure } from "./actions";
import * as constants from "./constants";
import { getUserByCarNumber } from "../../../services/api";
// $FlowFixMe
import RNMlKit from "react-native-firebase-mlkit";
import * as NavigationService from "../../../services/NavigationService";

export function* processScanData({ payload }: any): Saga<*> {
  yield put(loadScanPending());

  try {
    const visionResp = yield RNMlKit.deviceTextRecognition(payload);

    if (!(visionResp && visionResp.length)) {
      throw "UNMATCHED";
    }

    const processedVR = visionResp
      .map(
        (resp = {}) =>
          resp.resultText ||
          resp.blockText ||
          resp.lineText ||
          resp.elementText ||
          ""
      )
      .map(text => ({
        text: text.split(" ").join("")
      }))
      .slice(0, 1);

    const data = yield getUserByCarNumber(processedVR);
    yield put(loadScanSuccess(data));
    NavigationService.navigate("Profile", { user: data });
  } catch (error) {
    yield put(loadScanFailure(error));
  }
}

export function* searchNumber({ payload }) {
  try {
    const data = yield getUserByCarNumber([{ text: payload }]);
    yield put(loadScanSuccess(data));
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
  yield takeLatest(constants.PROCESS_SCAN_DATA, processScanData);
  yield takeLatest(constants.SEARCH_NUMBER, searchNumber);
}

export default tripSaga;
