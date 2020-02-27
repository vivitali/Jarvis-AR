import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Colors from "../../constants/Colors";
import IcoMoon from "../../components/Icons";

import styles from "./styles";

export default class SignIn extends Component {
  state = {
    hidePassword: true,
    pressStatus: false,
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

	setStyles = (errorExist, styleList) => errorExist ? [...styleList, styles.textErrorInput] : styleList;

  render() {
    const { email, password, error, onInputChange, onSignIn } = this.props;

    return (
      <View style={styles.formContainer}>
				<View style={styles.textInputContainer}>
					<View style={this.setStyles(error, [styles.textInputWrapper])}>
						<TextInput
							autoCompleteType="email"
							keyboardType="email-address"
							style={styles.textInput}
							value={email}
							onChangeText={text => onInputChange(text, "email")}
							placeholder="Email"
							placeholderTextColor="rgba(255, 255, 255, 0.3)"
							onSubmitEditing={onSignIn}
						/>
					</View>
					<Text style={styles.errorMsg}>{error}</Text>
				</View>
				<View style={styles.textInputContainer}>
					<View style={this.setStyles(error, [styles.textInputWrapper, styles.passwordWrapper])}>
						<TextInput
							style={[styles.inputPassword, styles.textInput]}
							value={password}
							onChangeText={text => onInputChange(text, "password")}
							placeholder="Password"
							placeholderTextColor="rgba(255, 255, 255, 0.3)"
							textContentType="password"
							secureTextEntry={this.state.hidePassword}
							onSubmitEditing={onSignIn}
						/>
						<TouchableOpacity
							onPress={this.managePasswordVisibility}
							style={styles.icon}
						>
							{this.state.hidePassword ? (
								<IcoMoon
									name="eye-off"
									size={20}
									style={{ color: Colors.primaryColor }}
								/>
							) : (
								<IcoMoon
									name="eye"
									size={20}
									style={{ color: Colors.contrastColor }}
								/>
							)}
						</TouchableOpacity>
					</View>
					<Text style={styles.errorMsg}>{error}</Text>
				</View>
        <TouchableHighlight
          underlayColor="#DDA720"
          style={this.state.pressStatus ? styles.buttonPress : styles.button}
          onPress={onSignIn}
          onHideUnderlay={() => this.onHideUnderlay()}
          onShowUnderlay={() => this.onShowUnderlay()}
          activeOpacity={1}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
