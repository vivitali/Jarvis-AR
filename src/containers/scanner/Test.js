/**
 * React Native Business Cards
 * https://github.com/zsajjad/BusinessCard
 *
 */

import React, { Component } from "react";
import { TouchableOpacity, View, ImageBackground, Text } from "react-native";
import { Camera, Permissions } from 'expo';
import RNTextDetector from "react-native-text-detector";

import style, { screenHeight, screenWidth } from "./styles";

const PICTURE_OPTIONS = {
  quality: 1,
  fixOrientation: true,
  forceUpOrientation: true
};

export default class App extends React.Component {
  state = {
    loading: false,
    image: null,
    error: null,
    visionResp: []
  };

  /**
   * reset
   *
   * Handles error situation at any stage of the process
   *
   * @param {string} [error="OTHER"]
   * @memberof App
   */
  reset(error = "OTHER") {
    this.setState(
      {
        loading: false,
        image: null,
        error
      },
      () => {
        // setTimeout(() => this.camera.startPreview(), 500);
      }
    );
  }

  snap = async () => {
    if (this.camera) {
      let data = await this.camera.takePictureAsync(PICTURE_OPTIONS);

      this.setState(
        {
          image: data.uri
        },
        () => {
          console.log(data.uri);
          this.processImage(data.uri, {
            height: data.height,
            width: data.width
          });
        }
      );
    }
  };

  /**
   * takePicture
   *
   * Responsible for getting image from react native camera and
   * starting image processing.
   *
   * @param {*} camera
   * @author Zain Sajjad
   */
  takePicture = async camera => {
    this.setState({
      loading: true
    });
    try {
      const data = await camera.takePictureAsync(PICTURE_OPTIONS);
      if (!data.uri) {
        throw "OTHER";
      }
      this.setState(
        {
          image: data.uri
        },
        () => {
          console.log(data.uri);
          this.processImage(data.uri, {
            height: data.height,
            width: data.width
          });
        }
      );
    } catch (e) {
      console.warn(e);
      this.reset(e);
    }
  };

  /**
   * processImage
   *
   * Responsible for getting image from react native camera and
   * starting image processing.
   *
   * @param {string} uri              Path for the image to be processed
   * @param {object} imageProperties  Other properties of image to be processed
   * @memberof App
   * @author Zain Sajjad
   */
  processImage = async (uri, imageProperties) => {
    try {
      console.log("imageProperties", imageProperties);
      const visionResp = await RNTextDetector.detectFromUri(uri);
      console.log(visionResp);
      if (!(visionResp && visionResp.length > 0)) {
        throw "UNMATCHED";
      }
      this.setState({
        visionResp: this.mapVisionRespToScreen(visionResp, imageProperties)
      });
    } catch (e) {
      console.log("error", e);
    }

  };

  /**
   * mapVisionRespToScreen
   *
   * Converts RNTextDetectors response in representable form for
   * device's screen in accordance with the dimensions of image
   * used to processing.
   *
   * @param {array}  visionResp       Response from RNTextDetector
   * @param {object} imageProperties  Other properties of image to be processed
   * @memberof App
   */
  mapVisionRespToScreen = (visionResp, imageProperties) => {
    const IMAGE_TO_SCREEN_Y = screenHeight / imageProperties.height;
    const IMAGE_TO_SCREEN_X = screenWidth / imageProperties.width;

    return visionResp.map(item => {
      return {
        ...item,
        position: {
          width: item.bounding.width * IMAGE_TO_SCREEN_X,
          left: item.bounding.left * IMAGE_TO_SCREEN_X,
          height: item.bounding.height * IMAGE_TO_SCREEN_Y,
          top: item.bounding.top * IMAGE_TO_SCREEN_Y
        }
      };
    });
  };

  /**
   * React Native render function
   *
   * @returns ReactNode or null
   * @memberof App
   */
  render() {

    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={{
            flex: 0.1,
            alignSelf: 'flex-end',
            alignItems: 'center',
          }}
          onPress={this.snap}>
          <Text
            style={{ fontSize: 18, marginBottom: 10, color: 'red' }}>
            {' '}snap{' '}
          </Text>
        </TouchableOpacity>
        <Camera ref={ref => { this.camera = ref; }} style={{ flex: 1 }} type={this.state.type}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}>
              <Text
                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                {' '}Flip{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </Camera>
        {this.state.image ? (
          <ImageBackground
            source={{ uri: this.state.image }}
            style={style.imageBackground}
            key="image"
            resizeMode="cover"
          >
            {this.state.visionResp.map(item => {
              return (
                <TouchableOpacity
                  style={[style.boundingRect, item.position]}
                  key={item.text}
                />
              );
            })}
          </ImageBackground>
        ) : null}
      </View>
    );
  }
}
