import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, SafeAreaView, ImageBackground } from "react-native";

import { actions, selectors } from "./redux";

import SignInForm from "../../components/SignInForm";

import styles from "./styles";

import Layout from "../../constants/Layout";

class SignIn extends Component {
  state = {
    email: null,
    password: null
  };

  handleInputChange = (text, field) => {
    this.setState({
      [field]: text
    });
  };

  handleSignIn = async () => {
    const { password, email: username } = this.state;
    this.props.authenticate({ username, password });
  };

  render() {
    return (
      <ImageBackground source={Layout.bgImage} style={{ width: "100%", height: "100%" }}>
        <SafeAreaView style={styles.signInContainer}>
          <Text style={styles.bigText}>Welcome!</Text>
          <View style={styles.formContainer}>
            <SignInForm
              {...this.state}
              error={this.props.error}
              onInputChange={this.handleInputChange}
              onSignIn={this.handleSignIn}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  error: selectors.getAuthError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticate: actions.authenticate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
