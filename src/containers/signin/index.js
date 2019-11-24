import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  View,
  KeyboardAvoidingView,
  Animated,
  Keyboard,
  SafeAreaView,
  ImageBackground,
  Platform
} from "react-native";

import { actions, selectors } from "./redux";

import SignInForm from "../../components/SignInForm";

import styles, {
  WELCOME_MARGIN,
  WELCOME_MARGIN_SMALL,
  WELCOME_SIZE,
  WELCOME_SIZE_SMALL
} from "./styles";

import Layout from "../../constants/Layout";

class SignIn extends Component {
  state = {
    email: null,
    password: null
  };

  constructor(props) {
    super(props);

    this.welcomeSize = new Animated.Value(WELCOME_SIZE);
    this.welcomePadding = new Animated.Value(WELCOME_MARGIN);
  }

  componentWillMount() {
    this.props.resetAuthError();
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(this.welcomeSize, {
        duration: event.duration,
        toValue: WELCOME_SIZE_SMALL
      }),
      Animated.timing(this.welcomePadding, {
        duration: event.duration,
        toValue: WELCOME_MARGIN_SMALL
      })
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.welcomeSize, {
        duration: event.duration,
        toValue: WELCOME_SIZE
      }),
      Animated.timing(this.welcomePadding, {
        duration: event.duration,
        toValue: WELCOME_MARGIN
      })
    ]).start();
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
      <KeyboardAvoidingView behavior="padding" enabled={Platform.OS === "ios"}>
        <ImageBackground
          source={Layout.bgImage}
          style={{ width: "100%", height: "100%" }}
        >
          <SafeAreaView style={styles.signInContainer}>
            <Animated.Text
              style={[
                styles.bigText,
                {
                  marginBottom: this.welcomePadding,
                  fontSize: this.welcomeSize
                }
              ]}
            >
              Welcome!
            </Animated.Text>
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
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  error: selectors.getAuthError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticate: actions.authenticate,
      resetAuthError: actions.resetAuthError
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
