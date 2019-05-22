import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import { AuthStack } from "./AuthStack";

const AppNavigator = createSwitchNavigator(
  {
    Main: MainTabNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: "AuthLoading"
  }
);

export default createAppContainer(AppNavigator);
