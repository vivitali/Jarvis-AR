import { applyMiddleware, compose, combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import createSagaMiddleware from "redux-saga";

import saga from "./saga";
import { logger } from "./middleware";
import reducers from "./reducers";

import { createStore } from "redux-dynamic-modules-core";
import { getSagaExtension } from "redux-dynamic-modules-saga";

import { getPersistModule } from "./module";
// import { getSignInModule } from "../containers/signin/redux/module";

// const sagaMiddleware = createSagaMiddleware();

/* REDUCERS */
// const rootReducer = combineReducers(reducers);

/* REDUX PERSIST */
// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [logger];

/* CONFIGURE STORE */
const configureStore = () => {
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Prevents Redux DevTools from re-dispatching all previous actions.
          shouldHotReload: false,
        })
      : compose;
    // Create the redux store.
    return createStore({
      extensions: [getSagaExtension()],
      enhancements: composeEnhancers(applyMiddleware(...middleware))
    },
      getPersistModule());
  } else {
    // Production mode.
    return createStore({
      extensions: [getSagaExtension()],
      enhancements: compose(applyMiddleware(...middleware))
    },
      getPersistModule());
  }
};

/* EXPORTS */
const store = configureStore();
// sagaMiddleware.run(saga);

export default store;
export const persistor = persistStore(store);
