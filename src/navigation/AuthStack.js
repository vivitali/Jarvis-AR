// @flow

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createCompatNavigatorFactory } from "@react-navigation/compat";

import SignInScreen from "../screens/SignInScreen";

const AuthStack = createCompatNavigatorFactory(createStackNavigator)(
  {
    SignIn: SignInScreen,
  },
  {
    headerMode: "none",
    headerBackTitleVisible: false,
  }
);

export { AuthStack };
