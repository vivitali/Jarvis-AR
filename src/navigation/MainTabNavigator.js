import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import { TabBarIcon } from "../components";
import ScannerScreen from "../screens/ScannerScreen";
import ProfileScreen from "../screens/Profile";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import InfoScreen from "../screens/InfoScreen";
import HelpScreen from "../screens/HelpScreen";
import Colors from "../constants/Colors";

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="user" />,
};

/**
 *
 */
const ScannerStack = createStackNavigator({
  Scanner: ScannerScreen,
});

ScannerStack.navigationOptions = {
  tabBarLabel: "Scanner",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="camera" />,
};

/**
 *
 */
const SearchStack = createStackNavigator({
  Search: SearchScreen,
});

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="search" />,
};
/**
 *
 */
const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
    Info: InfoScreen,
    Help: HelpScreen,
  },
  {
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cog" />,
};

export default createBottomTabNavigator(
  {
    ProfileStack,
    ScannerStack,
    SearchStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: Colors.bottomBarBg,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  }
);
