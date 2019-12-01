// @flow
import * as constants from "./constants";
import type { UserAction, Error } from "./types";

export const proceedAction = (payload: UserAction) => ({
  type: constants.PROCEED_ACTION,
  payload,
});

export const proceedActionFailure = ({ error }: Error) => ({
  type: constants.PROCEED_ACTION_FAILURE,
  error,
});
