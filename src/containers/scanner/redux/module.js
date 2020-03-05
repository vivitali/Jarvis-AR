import reducer from "./reducer";
import * as actions from "./actions";
import tripSaga from "./saga";

export const getScannerModule = () => ({
  id: "scanner",
  reducerMap: {
    scanner: reducer,
  },
  initialActions: [actions.resetScanData()],
  sagas: [tripSaga],
});
