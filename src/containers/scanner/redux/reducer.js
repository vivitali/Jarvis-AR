

import {
  LOAD_SCAN_FAILURE,
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS,
  RESET_SCAN_DATA,
  SELECT_PROFILE,
} from "./constants";
import type { ScannerState, Action } from "./types";

export const initialState: ScannerState = {
  data: [],
  loading: false,
  loaded: false,
  error: null,
};

export default function reducer(
  state: ScannerState = initialState,
  action: Action
) {
  switch (action.type) {
    case LOAD_SCAN_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOAD_SCAN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };
    case LOAD_SCAN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: false,
      };
    case RESET_SCAN_DATA:
      return initialState;
    default:
      return state;
  }
}
