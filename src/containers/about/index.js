// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";

import { actions as signinAction } from "../signin/redux";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

class About extends Component<Props, *> {
  render() {
    const { onSignOut } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.profileFooter}>
          <TouchableOpacity style={styles.option} onPress={onSignOut}>
            <View style={styles.signout}>
              <View style={styles.optionIconContainer}>
                <Icon name="sign-out" size={22} style={styles.signoutOption} />
              </View>
              <View>
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

const mapStateToProps = state => ({});

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
