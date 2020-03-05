import reducer from "./reducer";
import * as actions from "./actions";
import authenticationSaga from "./saga";

export const getSignInModule = () => ({
  id: "signin",
  reducerMap: {
    auth: reducer,
  },
  initialActions: [actions.resetAuthenticationData()],
  sagas: [authenticationSaga],
});
