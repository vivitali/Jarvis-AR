import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { RNCamera } from "react-native-camera";
import { withNavigationFocus } from "react-navigation";
import IcoMoon from "../../components/Icons";

import styles from "./styles";

class Camera extends React.Component {
  state = {
    cameraReady: false,
    text: "",
  };

  onTextRecognized = text => {
    this.setState({ text });
  };

  onCameraReady = () => {
    this.setState({ cameraReady: true });
  };

  snap = async () => {
    if (!this.cameraReady && !this.state.text) {
      return;
    }

    this.props.snap(this.state.text);
  };

  render() {
    const { isFocused } = this.props;
    const { text: { textBlocks = [] } = {}, cameraReady } = this.state;

    if (!isFocused) {
      return <Text>Camera is disabled</Text>;
    }

    return (
      <View style={styles.container}>
        <RNCamera
          onCameraReady={this.onCameraReady}
          style={styles.container}
          onTextRecognized={cameraReady ? this.onTextRecognized : null}
          captureAudio={false}
        >
          {!!textBlocks.length && (
            <View style={styles.actionWrapper}>
              <TouchableOpacity style={styles.snap} onPress={this.snap}>
                <View style={styles.snapBorder}>
                  <IcoMoon
                    name="photo"
                    size={48}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </RNCamera>
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
