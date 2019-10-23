// @flow

import React, { Component } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import Button from "apsl-react-native-button";
// $FlowFixMe
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import Layout from "../../constants/Layout";

export default class Info extends Component<Props, *> {
  render() {
    return (
      <ImageBackground source={Layout.bgImage} style={{ width: "100%", height: "100%" }}>
        <Text>HELP</Text>
      </ImageBackground>
    );
  }
}
