import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, SafeAreaView } from "react-native";

import { actions, selectors } from "./redux";

import SignInForm from "../../components/SignInForm";

import styles from "./styles";

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
      <SafeAreaView style={styles.signInContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.bigText}>Welcome,</Text>
          <Text style={styles.smallText}>Sign in to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <SignInForm
            {...this.state}
            error={this.props.error}
            onInputChange={this.handleInputChange}
            onSignIn={this.handleSignIn}
          />
        </View>
      </SafeAreaView>
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
