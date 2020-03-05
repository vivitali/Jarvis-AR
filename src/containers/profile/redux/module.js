import { reducer as profileReducer } from "./reducer";
import { actions } from "./actions";
import profileSaga from "./saga";

export const getProfileModule = () => ({
  id: "profile",
  reducerMap: {
    profile: profileReducer,
  },
  initialActions: [actions],
  sagas: [profileSaga],
});
