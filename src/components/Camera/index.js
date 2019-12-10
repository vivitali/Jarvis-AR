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
                <IcoMoon
                  name="photo-button"
                  size={50}
                  color="#ccc"
                  style={{ paddingBottom: 30 }}
                />
              </TouchableOpacity>
            </View>
          )}
        </RNCamera>
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
