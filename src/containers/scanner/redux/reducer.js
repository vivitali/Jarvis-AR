import {
  LOAD_SCAN_FAILURE,
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS
} from "./constants";

export const initialState = {
  data: null,
  loading: false,
  loaded: false,
  error: false
};

export default function reducer(state = initialState, action) {
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
