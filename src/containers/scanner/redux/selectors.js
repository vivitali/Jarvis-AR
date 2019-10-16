// @flow
import { createSelector } from "reselect";
import type { State } from "../../../redux/types"; //TODO: absolute path
import type { ScannerState } from "./types";
import "array-flat-polyfill";

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
 * Selector for getting profile data
 * @return {*}
 */
export const getProfileData = createSelector(
  getScannerReducer,
  scanner => scanner.data
);

/**
 * Selector for getting profile
 * todo: now it's hardcoded to use first item in result
 * @return {*}
 */
export const getProfile = createSelector(
  getProfileData,
  profileData =>
    Object.values(profileData)
      .filter(Array.isArray)
      .flat()
      .map(user => ({
        ...user,
        tel: user.user_contacts_value,
        name: user.users_name,
        carNumber: user.cars_number,
        carBrand: user.cars_brand
      }))[0]
);
