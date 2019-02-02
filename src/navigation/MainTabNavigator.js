import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import SettingsScreen from "../screens/SettingsScreen";
import ScannerScreen from "../screens/ScannerScreen";
import ProfileScreen from "../screens/ProfileScreen";

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Settings: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

/**
 *
 */
const ScannerStack = createStackNavigator({
  Settings: ScannerScreen
});

ScannerStack.navigationOptions = {
  tabBarLabel: "Scanner",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="ios-camera" />
  )
};

export default createBottomTabNavigator({
  ProfileStack,
  ScannerStack,
  SettingsStack
});
