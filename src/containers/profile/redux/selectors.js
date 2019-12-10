import { createSelector } from "reselect";
import type { State } from "../../../redux/types"; //TODO: absolute path
import type { ProfileState } from "./types";
import "array-flat-polyfill";

/**
 * Get Profile Reducer
 * @param state
 * @return {*}
 */
export const getProfileReducer = (state: State): ProfileState => state.profile;

export const getUserProfile = createSelector(
  getProfileReducer,
  profile => profile.selectedUser
);
