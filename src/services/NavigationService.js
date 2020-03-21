import { NavigationActions } from "@react-navigation/compat";
import { CommonActions } from "@react-navigation/native";

const config = {};

export const setNavigator = nav => {
  if (nav) {
    console.log(nav, "][][][][[");
    config.navigator = nav;
  }
};

export const navigate = (routeName, params) => {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
};

export const goBack = () => {
  if (config.navigator) {
    const action = CommonActions.goBack();
    config.navigator.dispatch(action);
  }
};
