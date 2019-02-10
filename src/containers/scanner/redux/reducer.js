// @flow

import {
  LOAD_SCAN_FAILURE,
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS
} from "./constants";
import type { ScannerState, Action } from "./types";

export const initialState: ScannerState = {
  data: null,
  loading: false,
  loaded: false,
  error: null
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
        loaded: false
      };
    case LOAD_SCAN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
      };
    case LOAD_SCAN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: false
      };
    default:
      return state;
  }
}
