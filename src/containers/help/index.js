// @flow

import React, {Component} from "react";
import { ImageBackground, Text, TouchableOpacity, View, Linking } from "react-native";
// $FlowFixMe
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import Layout from "../../constants/Layout";

export default class Help extends Component<Props, *> {
  static navigationOptions = () => ({
    header: null
  });

  render() {
    const {navigation} = this.props;

    return (
      <ImageBackground source={Layout.bgImage} style={{width: "100%", height: "100%"}}>
        <View style={styles.container}>
          <View style={styles.titleWrapper}>
            <TouchableOpacity onPress={() => {
              navigation.goBack()
            }}>
              <Icon name="arrow-left" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.settingTitle}>Help</Text>
          </View>
          <TouchableOpacity
            onPress={() => Linking.openURL('mailto:support@react.native.softserveinc@gmail.com?subject=ReportAProblem') }
          >
            <Text style={styles.reportBtn}>Report a problem</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
