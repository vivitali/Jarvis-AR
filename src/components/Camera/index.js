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

  flip = () => {
    this.setState({
      type:
        this.state.type === RNCamera.Constants.Type.back
          ? RNCamera.Constants.Type.front
          : RNCamera.Constants.Type.back
    });
  };

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
            <TouchableOpacity style={styles.flip} onPress={this.flip}>
              <Icon name="repeat" size={22} color="#ccc" />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}
