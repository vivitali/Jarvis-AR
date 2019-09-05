import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from "react-native-camera";

import styles from "./styles";

const PICTURE_OPTIONS = {
  quality: 1,
  fixOrientation: true,
  forceUpOrientation: true
};

export default class App extends React.Component {
  state = {};

  snap = async () => {
    if (!this.camera) {
      return;
    }

    const data = await this.camera.takePictureAsync(PICTURE_OPTIONS);
    this.props.snap(data);
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => (this.camera = ref)}
          style={styles.container}
          captureAudio={false}
          type={this.state.type}
        >
          <View style={styles.actionWrapper}>
            <TouchableOpacity style={styles.snap} onPress={this.snap}>
              <Icon name="camera" size={40} color="#ccc" />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}
