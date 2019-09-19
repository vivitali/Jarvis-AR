import { createSelector } from "reselect";

/**
 * Get Auth Reducer
 * @param state
 * @return {*}
 */
export const getAuthReducer = state => state.auth;

/**
 * Selector for getting errors
 * @return {*}
 */
export const getAuthError = createSelector(
  getAuthReducer,
  auth => auth && !auth.loading && auth.error
);
