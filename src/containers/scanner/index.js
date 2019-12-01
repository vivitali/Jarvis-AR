// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View } from "react-native";
import { actions, selectors } from "./redux";

import { type Props } from "./types";

import styles from "./styles";
import { Camera } from "../../components";

class Scanner extends Component<Props, *> {
  static navigationOptions = {
    header: null,
  };

  snap = data => {
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
      resetScanData: actions.resetScanData,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);
