// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
// $FlowFixMe
import Icon from "react-native-vector-icons/FontAwesome";

import { actions as signinAction } from "../signin/redux";
import styles from "./styles";

import { type Props } from "./types";
import Layout from "../../constants/Layout";

class Settings extends Component<Props, *> {
  static navigationOptions = () => ({
    header: null,
  });

  render() {
    const {
      signOut,
      navigation: { navigate },
    } = this.props;

    return (
      <ImageBackground
        source={Layout.bgImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <Text style={styles.settingTitle}>Settings</Text>
          <View style={styles.settingBtnsWrapper}>
            <TouchableOpacity
              title="Info"
              onPress={() => navigate("Info")}
              style={styles.settingBtns}
            >
              <Icon
                name="info"
                size={22}
                style={[styles.signoutOption, styles.signoutIcon]}
              />
              <Text style={styles.signoutOption}>Info</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="Help"
              onPress={() => navigate("Help")}
              style={styles.settingBtns}
            >
              <Icon
                name="question-circle"
                size={22}
                style={[styles.signoutOption, styles.signoutIcon]}
              />
              <Text style={styles.signoutOption}>Help</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileFooter}>
            <TouchableOpacity style={styles.option} onPress={signOut}>
              <View style={styles.signout}>
                <Icon
                  name="sign-out"
                  size={22}
                  style={[styles.signoutOption, styles.signoutIcon]}
                />
                <Text style={styles.signoutOption}>Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signOut: signinAction.resetAllData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
