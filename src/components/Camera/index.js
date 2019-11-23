import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { RNCamera } from "react-native-camera";
import { withNavigationFocus } from "react-navigation";

import styles from "./styles";

const PICTURE_OPTIONS = {
  quality: 1,
  fixOrientation: true,
  forceUpOrientation: true
};

class Camera extends React.Component {
  snap = async () => {
    if (!this.camera) {
      return;
    }

    const data = await this.camera.takePictureAsync(PICTURE_OPTIONS);
    this.props.snap(data);
  };

  render() {
    const { isFocused } = this.props;

    if (!isFocused) {
      return <View></View>;
    }

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => (this.camera = ref)}
          style={styles.container}
          captureAudio={false}
        >
          <View style={styles.actionWrapper}>
            <TouchableOpacity style={styles.snap} onPress={this.snap}>
              <Icon name="camera" size={50} color="#ccc" />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}

export default withNavigationFocus(Camera);
