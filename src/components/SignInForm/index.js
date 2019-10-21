import React, {Component} from "react";
import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView, TouchableHighlight } from "react-native";
import Button from "apsl-react-native-button";

import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

import styles from "./styles";

export default class SignIn extends Component {
  state = {
    hidePassword: true,
    pressStatus: false
  };

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  onHideUnderlay = () => {
    this.setState({ pressStatus: false });
  };

  onShowUnderlay = () => {
    this.setState({ pressStatus: true });
  };

  render() {
    const { email, password, error, onInputChange, onSignIn } = this.props;

    return (
      <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled={true}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={text => onInputChange(text, "email")}
          placeholder="Email"
        />
        <View style={[styles.textInput, styles.passwordWrapper]}>
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={text => onInputChange(text, "password")}
            placeholder="Password"
            textContentType="password"
            secureTextEntry={this.state.hidePassword}
          />
          <TouchableOpacity onPress = { this.managePasswordVisibility }>
            {
              this.state.hidePassword ?
                <Icon
                  name="eye-slash"
                  size={20}
                  style={{ color: Colors.primaryColor }}
                /> :
                <Icon
                  name="eye"
                  size={20}
                  style={{ color: Colors.contrastColor }}
                />
            }
          </TouchableOpacity>
        </View>
        <TouchableHighlight
          underlayColor="#DDA720"
          style={this.state.pressStatus ? styles.buttonPress : styles.button}
          onPress={onSignIn}
          onHideUnderlay = {() => this.onHideUnderlay()}
          onShowUnderlay = {() => this.onShowUnderlay()}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
        <Text style={styles.errorMsg}>{error}</Text>
      </KeyboardAvoidingView>
    )
  };
}
