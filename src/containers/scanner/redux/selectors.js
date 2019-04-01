// @flow
import { createSelector } from "reselect";
import type { State } from "../../../redux/types"; //TODO: absolute path
import type { ScannerState } from "./types";

/**
 * Get Scanner Reducer
 * @param state
 * @return {*}
 */
export const getScannerReducer = (state: State): ScannerState => state.scanner;

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
