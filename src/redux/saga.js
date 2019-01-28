import { all } from "redux-saga/effects";
import { saga as scannerSaga } from "../containers/scanner/redux";

export default function* rootSaga() {
  const sagas = [scannerSaga()];
  yield all(sagas);
}
