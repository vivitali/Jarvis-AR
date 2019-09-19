import React from "react";
import { View, TextInput, Text } from "react-native";
import Button from "apsl-react-native-button";

import styles from "./styles";

export default function SignInForm({
  email,
  password,
  error,
  onInputChange,
  onSignIn
}) {
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.textInput}
        value={email}
        onChangeText={text => onInputChange(text, "email")}
        keyboardType={"email-address"}
        placeholder="Email"
      />
      <TextInput
        style={[styles.textInput, styles.lastInput]}
        value={password}
        onChangeText={text => onInputChange(text, "password")}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
      />
      <Button
        style={styles.button}
        textStyle={styles.buttonText}
        onPress={onSignIn}
      >
        SIGN IN
      </Button>
      <Text style={styles.errorMsg}>{error}</Text>
    </View>
  );
}
