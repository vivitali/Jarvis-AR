// TODO add flow
import { all } from "redux-saga/effects";
import { saga as scannerSaga } from "../containers/scanner/redux";
import { authenticationSaga } from "../containers/signin/redux";

export default function* rootSaga() {
  const sagas = [scannerSaga(), authenticationSaga()];
  yield all(sagas);
}
