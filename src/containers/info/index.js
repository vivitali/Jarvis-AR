// @flow

import React, { Component } from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
// $FlowFixMe
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import Layout from "../../constants/Layout";

export default class Info extends Component<Props, *> {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const { navigation } = this.props;

    return (
      <ImageBackground
        source={Layout.bgImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Icon name="arrow-left" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.settingTitle}>Info</Text>
          </View>
          <Text style={styles.infoText}>
            This is the best app you've ever seen
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
