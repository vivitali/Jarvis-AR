// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View } from "react-native";
import { actions, selectors } from "./redux";

import { type Props, type OwnProps } from "./types";

import styles from "./styles";
import { Camera } from "../../components";

class Scanner extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  snap /* : * */ = data => {
    this.props.processScanData(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera snap={this.snap} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: selectors.isLoading(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      processScanData: actions.processScanData,
    },
    dispatch
  );

export default connect<Props, OwnProps, _, _, _, _>(mapStateToProps, mapDispatchToProps)(Scanner);
