// @flow
import { put, takeEvery, delay } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { loadScanPending, loadScanSuccess, loadScanFailure } from "./actions";
import * as constants from "./constants";
import { getUserByCarNumber } from "../../../services/api";
// $FlowFixMe
import RNTextDetector from "react-native-text-detector";
/**
 *
 * @return {IterableIterator<*>}
 */
export function* preoceessScanData({ payload: { uri } }): Saga<*> {
  yield put(loadScanPending());

  try {
    const visionResp = yield RNTextDetector.detectFromUri(uri);

    if (!(visionResp && visionResp.length)) {
      throw "UNMATCHED";
    }

    const data = yield getUserByCarNumber();
    yield put(loadScanSuccess({ data }));

    // todo
    // const { navigate } = this.props.navigation;
    // navigate("Profile", { user: result });
  } catch (error) {
    yield put(loadScanFailure(error));
  }
}

/**
 * Watcher for Scanner Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export function* tripSaga(): Saga<*> {
  yield takeEvery(constants.PROCESS_SCAN_DATA, preoceessScanData);
}

export default tripSaga;
