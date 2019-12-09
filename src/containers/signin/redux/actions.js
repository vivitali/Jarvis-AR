import * as constants from "./constants";

export const authenticate = payload => ({
  type: constants.AUTHENTICATE,
  payload,
});

export const resetAllData = () => ({
  type: constants.RESETALLDATA,
});

export const authenticationPending = () => ({
  type: constants.AUTH_PENDING,
});

export const authenticationSuccess = () => ({
  type: constants.AUTH_SUCCESS,
});

export const authenticationFailure = error => ({
  type: constants.AUTH_FAILURE,
  error,
});

export const resetAuthenticationData = () => ({
  type: constants.RESET_AUTH,
});

export const resetAuthError = () => ({
  type: constants.RESET_ERROR,
});
