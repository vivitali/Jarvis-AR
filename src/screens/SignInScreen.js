import React from "react";
import { View, Button, AsyncStorage, TextInput } from "react-native";
import Auth0 from "react-native-auth0";

const auth0 = new Auth0({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_CLIENT_ID
});

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: "Please sign in"
  };

  state = {};

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={email => this.setState({ email })}
          placeholder="email"
        />
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          placeholder="password"
        />
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    const { password, email } = this.state;

    auth0.auth
      .passwordRealm({
        username: email,
        password,
        realm: "Username-Password-Authentication"
      })
      .then(async data => {
        console.log(data);
        await AsyncStorage.setItem("userToken", JSON.stringify(data));
        this.props.navigation.navigate("Scanner");
      })
      .catch(console.log);
  };
}

export default SignInScreen;
