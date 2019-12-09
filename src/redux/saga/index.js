// TODO add flow
import { all } from "redux-saga/effects";
import { saga as scannerSaga } from "../../containers/scanner/redux";
import { authenticationSaga } from "../../containers/signin/redux";
import { saga as profileSaga } from "../../containers/profile/redux";
import resetData from "./app.saga";

export default function* rootSaga() {
  const sagas = [
    scannerSaga(),
    authenticationSaga(),
    profileSaga(),
    resetData(),
  ];
  yield all(sagas);
}
