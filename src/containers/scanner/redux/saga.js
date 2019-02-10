// @flow
import { put, takeEvery, delay } from "redux-saga/effects";
import type { Saga } from "redux-saga";
import { loadScanPending, loadScanSuccess, loadScanFailure } from "./actions";
import { LOAD_SCANNER } from "./constants";

/**
 *
 * @return {IterableIterator<*>}
 */
export function* loadScanner(): Saga<*> {
  yield put(loadScanPending());
  yield delay(5000);

  try {
    yield put(loadScanSuccess({ data: "DUMMY_DATA" }));
  } catch (error) {
    yield put(loadScanFailure(error));
  }
}

/**
 * Watcher for Scanner Saga
 * @return {IterableIterator<*|ForkEffect>}
 */
export function* tripSaga(): Saga<*> {
  yield takeEvery(LOAD_SCANNER, loadScanner);
}

export default tripSaga;
