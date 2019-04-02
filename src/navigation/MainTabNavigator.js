// @flow

import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { TabBarIcon } from "../components";
import ScannerScreen from "../screens/ScannerScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />
};

/**
 *
 */
const ScannerStack = createStackNavigator({
  Scanner: ScannerScreen
});

ScannerStack.navigationOptions = {
  tabBarLabel: "Scanner",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="camera" />
};

export default createBottomTabNavigator({
  ProfileStack,
  ScannerStack
});
