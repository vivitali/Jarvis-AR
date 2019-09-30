// @flow
import { Linking } from "react-native";
import type { Saga } from "redux-saga";
import { put, takeLatest } from "redux-saga/effects";

import * as constants from "./constants";
import * as actions from "./actions";

export function* proceedAction({
  payload: {
    type,
    user: { tel, skype }
  }
}: any): Saga<*> {
  try {
    switch (type) {
      case "phone":
        return yield Linking.openURL(`tel:${tel}`);
      case "skype":
        return yield Linking.openURL(`skype:${skype}`);
    }
  } catch (error) {
    yield put(actions.proceedActionFailure({ error }));
  }
}

/**
 * Watcher for Profile Actions
 */
export function* profileSaga(): Saga<*> {
  yield takeLatest(constants.PROCEED_ACTION, proceedAction);
}

export default profileSaga;
