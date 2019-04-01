// @flow
import { createSelector } from "reselect";
import type { State } from "../../../redux/types"; //TODO: absolute path
import type { ScannerState } from "./types";

// temporary solution until BE changes
const cars = {
  5656: {
    name: "Rostyslav"
  }
};
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

/**
 * Selector for getting data
 * @return {*}
 */
export const getData = createSelector(
  getScannerReducer,
  scanner => {
    if (!Array.isArray(scanner.data)) {
      return { text: "no data" };
    }
    const numbers = scanner.data
      .map(scan => {
        return Object.keys(cars).find(carNumber =>
          scan.text.includes(carNumber)
        );
      })
      .filter(Boolean);

    return numbers.map(number => cars[number]);
  }
);
