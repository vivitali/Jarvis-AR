import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from "react-native-camera";
import { withNavigationFocus } from "react-navigation";

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

    if (!isFocused) {
      return <Text>Camera is disabled</Text>;
    }

    return (
      <View style={styles.container}>
        <RNCamera
          onCameraReady={this.onCameraReady}
          style={styles.container}
          onTextRecognized={this.cameraReady ? this.onTextRecognized : null}
          captureAudio={false}
        >
          <View style={styles.actionWrapper}>
            <TouchableOpacity style={styles.snap} onPress={this.snap}>
              <Icon name="camera" size={50} color="#ccc" style={{paddingBottom: 30}} />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
