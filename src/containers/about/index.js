// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
// $FlowFixMe
import Icon from "react-native-vector-icons/FontAwesome";
import Button from "apsl-react-native-button";

import { actions as signinAction } from "../signin/redux";
import styles from "./styles";

import { type Props } from "./types";

class About extends Component<Props, *> {
  render() {
    const { signOut, navigation: { navigate } } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.profileFooter}>
          <TouchableOpacity style={styles.option} onPress={signOut}>
            <View style={styles.signout}>
              <View style={styles.optionIconContainer}>
                <Icon name="sign-out" size={22} style={styles.signoutOption} />
              </View>
              <View>
                <Button
                  title="Info"
                  onPress={() => navigate('Info')}
                />
                <Button
                  title="Help"
                  onPress={() => navigate('Help')}
                />
                <Text style={[styles.optionText, styles.signoutOption]}>
                  Sign Out
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signOut: signinAction.invalidate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
