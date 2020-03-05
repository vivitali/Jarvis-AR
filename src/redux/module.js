import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { combineReducers } from "redux";
import reducers from "./reducers";

/* REDUCERS */
const rootReducer = combineReducers(reducers);

/* REDUX PERSIST */
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
};
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const getPersistModule = () => ({
  id: "persist",
  reducerMap: {
    persist: persistedReducer,
  },
});
