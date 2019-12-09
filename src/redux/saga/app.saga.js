import { call, put } from "@redux-saga/core/effects";
import { resetProfileData } from "../../containers/profile/redux/actions";
import { resetScanData } from "../../containers/scanner/redux/actions";
import { resetAuthentication } from "../../containers/signin/redux/saga";

export default function* resetData() {
  yield call(resetAuthentication);
  yield put(resetProfileData());
  yield put(resetScanData());
}
