import React, { Component } from "react";
import { View, Text, Image } from "react-native";

import SignInForm from "../../components/SignInForm";

import styles from "./styles";

export default class SignIn extends Component {
  render() {
    return (
      <View style={styles.signInContainer}>
        <View style={styles.emptyContainer} />
        <View style={styles.headerContainer}>
          <Image
            source={require("../../assets/images/ssar-square.png")}
            style={styles.headerContainerImage}
          />
          <Text style={styles.headerContainerTitle}>Welcome,</Text>
          <Text style={styles.headerContainerText}>Sign in to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <SignInForm />
        </View>
      </View>
    );
  }
}
