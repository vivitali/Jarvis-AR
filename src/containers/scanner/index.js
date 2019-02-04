// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import JSONTree from "react-native-json-tree";
import { actions, selectors } from "./redux";
import { type Props } from "./types";

import styles from "./styles";

class Scanner extends Component<Props, *> {
  componentDidMount() {
    this.props.loadScanData();
  }

  render() {
    const { loading, data } = this.props;

    return (
      <View style={styles.container}>
        <Text>Scanner container</Text>
        {loading && <Text>Scanner loading</Text>}
        {!loading && <JSONTree data={data} />}
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
      loadScanData: actions.loadScanData
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scanner);
