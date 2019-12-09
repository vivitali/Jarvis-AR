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

export const selectUserProfile = (payload: any) => ({
  type: constants.SELECT_PROFILE,
  payload,
});

export const resetProfileData = () => ({
  type: constants.RESET_PROFILE_DATA,
});
