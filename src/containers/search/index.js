// @flow

import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Button from "apsl-react-native-button";
import { connect } from "react-redux";
import { TextInput, View } from "react-native";
import { actions } from "../scanner/redux";

import styles from "../../components/SignInForm/styles";

import { type Props, type State } from "./types";

class Search extends Component<Props, State> {
  state = {
    search: ""
  };

  onSearch = () => {
    this.props.searchNumber(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.textInput, styles.lastInput]}
          value={search}
          onChangeText={search => this.setState({ search })}
          placeholder="Enter Car Number"
        />
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={this.onSearch}
        >
          Search
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchNumber: actions.searchNumber
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
