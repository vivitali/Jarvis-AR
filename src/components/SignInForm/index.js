import React, { Component } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import Button from "apsl-react-native-button";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

import styles from "./styles";

export default class SignIn extends Component {
  state = {
    hidePassword: true
  };

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  render() {
    const { email, password, error, onInputChange, onSignIn } = this.props;

    return (
      <View style={styles.formContainer}>
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.textInput}
            value={email}
            autoCompleteType="email"
            keyboardType="email-address"
            onChangeText={text => onInputChange(text, "email")}
            placeholder="Email"
          />
        </View>
        <View
          style={[
            styles.textInput,
            styles.textInputWrapper,
            styles.passwordWrapper
          ]}
        >
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={text => onInputChange(text, "password")}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity onPress={this.managePasswordVisibility}>
            {this.state.hidePassword ? (
              <Icon
                name="eye-slash"
                size={20}
                style={{ color: Colors.primaryColor }}
              />
            ) : (
              <Icon
                name="eye"
                size={20}
                style={{ color: Colors.contrastColor }}
              />
            )}
          </TouchableOpacity>
        </View>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={onSignIn}
        >
          Sign In
        </Button>
        <Text style={styles.errorMsg}>{error}</Text>
      </View>
    );
  }
}
