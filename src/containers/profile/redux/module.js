import profileReducer from "./reducer";
import { actions } from "./index";
import profileSaga from "./saga";

export const getProfileModule = () => ({
  id: "profile",
  reducerMap: {
    profile: profileReducer,
  },
  initialActions: [actions()],
  sagas: [profileSaga],
});
