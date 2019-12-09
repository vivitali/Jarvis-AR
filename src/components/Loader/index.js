import React, { PureComponent } from "react";
import LottieView from "lottie-react-native";

class Loader extends PureComponent {
  render() {
    return (
      <LottieView
        ref={animation => {
          this.animation = animation;
        }}
        source={require("../../assets/animations/9619-loading-dots-in-yellow.json")}
        autoPlay
      />
    );
  }
}

export default Loader;
