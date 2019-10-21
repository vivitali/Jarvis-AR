import React from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
// import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import store, { persistor } from "./redux/store";
import * as NavigationService from "./services/NavigationService";
import Layout from "./constants/Layout";

export default class App extends React.Component {
  state = {
    isLoadingComplete: true
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return <View />;
      // (
      //   <AppLoading
      //     startAsync={this._loadResourcesAsync}
      //     onError={this._handleLoadingError}
      //     onFinish={this._handleFinishLoading}
      //   />
      // );
    } else {
      return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <View style={styles.container}>
              <ImageBackground
                source={Layout.bgImage}
                style={{ width: "100%", height: "100%" }}
              >
                {Platform.OS === "ios" && <StatusBar barStyle="default" />}
                <AppNavigator ref={NavigationService.setNavigator} />
              </ImageBackground>
            </View>
          </PersistGate>
        </Provider>
      );
    }
  }

  // _loadResourcesAsync = async () => {
  //   return Promise.all([
  //     Asset.loadAsync([
  //       require("./src/assets/images/robot-dev.png"),
  //       require("./src/assets/images/robot-prod.png")
  //     ]),
  //     Font.loadAsync({
  //       // This is the font that we are using for our tab bar
  //       ...Icon.Ionicons.font,
  //       // We include SpaceMono because we use it in HomeScreen.js. Feel free
  //       // to remove this if you are not using it in your app
  //       "space-mono": require("./src/assets/fonts/SpaceMono-Regular.ttf")
  //     })
  //   ]);
  // };
  //
  // _handleLoadingError = error => {
  //   // In this case, you might want to report the error to your error
  //   // reporting service, for example Sentry
  //   console.warn(error);
  // };
  //
  // _handleFinishLoading = () => {
  //   this.setState({ isLoadingComplete: true });
  // };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
