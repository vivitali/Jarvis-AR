// @flow
import * as constants from "./constants";

export const proceedAction = payload => ({
  type: constants.PROCEED_ACTION,
  payload
});

export const proceedActionFailure = ({ error }) => ({
  type: constants.PROCEED_ACTION_FAILURE,
  error
});
