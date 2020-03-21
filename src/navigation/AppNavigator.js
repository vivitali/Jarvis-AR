import React from "react";
import { createSwitchNavigator } from "@react-navigation/compat";
import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigator from "./MainTabNavigator";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import { AuthStack } from "./AuthStack";

const AppNavigator = createSwitchNavigator(
  {
    Main: MainTabNavigator,
    Auth: AuthStack,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: "AuthLoading",
  }
);

export default function() {
  return (
    <NavigationContainer>
      <AppNavigator></AppNavigator>
    </NavigationContainer>
  );
}
