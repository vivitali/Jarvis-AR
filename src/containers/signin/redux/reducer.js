import {
  AUTH_PENDING,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  RESET_AUTH,
  RESET_ERROR,
} from "./constants";

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_PENDING:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        loaded: true,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        loaded: false,
      };
    case RESET_AUTH:
      return initialState;

    case RESET_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
