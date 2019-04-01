// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { actions, selectors } from "./redux";
import RNTextDetector from "react-native-text-detector";

import { type Props } from "./types";

import styles from "./styles";
import { Camera } from "../../components";

// temporary solution until BE changes
const cars = {
  5656: {
    name: "Rostyslav",
    tel: "+380978875041",
    skype: "burn_8_8_8"
  }
};

class Scanner extends Component<Props, *> {

  processResult = (data) => {
    if (!Array.isArray(data)) {
      return { text: "no data" };
    }
    const numbers = data
      .map(scan => {
        return Object.keys(cars).find(carNumber =>
          scan.text.includes(carNumber)
        );
      })
      .filter(Boolean);

    return numbers.map(number => cars[number]);
  };

  processImage = async (uri) => {
    this.props.loadScanPending();

    try {
      const visionResp = await RNTextDetector.detectFromUri(uri);
      if (!(visionResp && visionResp.length)) {
        throw "UNMATCHED";
      }

      const result = this.processResult(visionResp);

      if (Array.isArray(result)) {
        const { navigate } = this.props.navigation;
        navigate("Profile", { user: result });
      }

      this.props.loadScanSuccess(visionResp);
    } catch (error) {
      this.props.loadScanFailure({ error });
    }
  };

  snap = data => {
    this.processImage(data.uri, {
      height: data.height,
      width: data.width
    });
  };

  componentDidMount() {
    this.props.loadScanData();
  }

  render() {
    const { data } = this.props;

    return (
      <View style={styles.container}>
        {!Array.isArray(data) && <Camera snap={this.snap} />}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: selectors.isLoading(state),
  data: selectors.getData(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loadScanData: actions.loadScanData,
      loadScanSuccess: actions.loadScanSuccess,
      loadScanPending: actions.loadScanPending,
      loadScanFailure: actions.loadScanFailure,
      resetScanData: actions.resetScanData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scanner);
