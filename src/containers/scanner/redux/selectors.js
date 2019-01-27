import { createSelector } from "reselect";

/**
 * Get Scanner Reducer
 * @param state
 * @return {*}
 */
export const getScannerReducer = state => state.scanner;

/**
 * Selector for loading state
 * @return {*}
 */
export const isLoading = createSelector(
  getScannerReducer,
  scanner => scanner.loading
);

/**
 * Selector for getting errors
 * @return {*}
 */
export const getError = createSelector(
  getScannerReducer,
  scanner => !scanner.loading && scanner.error
);

/**
 * Selector for getting data
 * @return {*}
 */
export const getData = createSelector(
  getScannerReducer,
  scanner => scanner.data
);
