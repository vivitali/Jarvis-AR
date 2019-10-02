import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";
import { auth0, appUser } from "../models";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async (): void => {
    try {
      const { accessToken } = await appUser.get();
      const user = accessToken
        ? await auth0.auth.userInfo({ token: accessToken })
        : null;
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      this.props.navigation.navigate(user ? "Main" : "Auth");
    } catch (e) {
      await appUser.clear();
      this.props.navigation.navigate("Auth");
    }
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
