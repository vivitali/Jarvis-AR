import React from "react";
import { View, TextInput, Button } from "react-native";

import styles from "./styles";

export default class SignInForm extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput
          style={styles.textInput}
          name="email"
          onChangeText={this.props.onSignInInputChange}
          keyboardType={"email-address"}
          placeholder="Email"
        />
        <TextInput
          style={[styles.textInput, styles.lastInput]}
          onChangeText={this.props.onSignInInputChange}
          name="password"
          placeholder="Password"
          textContentType="password"
          secureTextEntry={true}
        />
        <Button title="Sign in!" onPress={this.props.onSignIn} />
      </View>
    );
  }
}
