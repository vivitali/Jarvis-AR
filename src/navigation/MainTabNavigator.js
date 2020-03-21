import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createCompatNavigatorFactory } from "@react-navigation/compat";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { TabBarIcon } from "../components";
import ScannerScreen from "../screens/ScannerScreen";
import ProfileScreen from "../screens/Profile";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import InfoScreen from "../screens/InfoScreen";
import HelpScreen from "../screens/HelpScreen";
import Colors from "../constants/Colors";

const Tab = createBottomTabNavigator();

// const SettingsStack = createCompatNavigatorFactory(createStackNavigator)(
//   {
//     Settings: SettingsScreen,
//     Info: InfoScreen,
//     Help: HelpScreen,
//   },
//   {
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 0,
//       },
//     }),
//   }
// );

// SettingsStack.navigationOptions = {
//   tabBarLabel: "Settings",
//   tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="cog" />,
// };

export default function() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // activeTintColor: "#e91e63",
        style: {
          backgroundColor: Colors.bottomBarBg,
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} color={color} name="user" />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={ScannerScreen}
        options={{
          tabBarLabel: "Scanner",
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} color={color} name="camera" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} color={color} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused, color }) => (
            <TabBarIcon focused={focused} color={color} name="cog" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
