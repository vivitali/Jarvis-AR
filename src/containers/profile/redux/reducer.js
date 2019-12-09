// @flow

import { SELECT_PROFILE, RESET_PROFILE_DATA } from "./constants";
import type { ProfileState, Action } from "./types";

export const initialState: ProfileState = {
  selectedUser: null,
};

export default function reducer(
  state: ProfileState = initialState,
  action: Action
) {
  switch (action.type) {
    case SELECT_PROFILE:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case RESET_PROFILE_DATA:
      return initialState;
    default:
      return state;
  }
}
