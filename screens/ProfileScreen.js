import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Button
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
import { Ionicons } from '@expo/vector-icons';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
	  title: 'Profile',
  };

  handlePressPhoneBtn = () => {
      const tel = 'tel:+380978113160';
      Linking.canOpenURL(tel).then(supported => {
          if (!supported) {
              console.log('Can\'t handle url: ' + tel);
          } else {
              return Linking.openURL(tel);
          }
      }).catch(err => {console.error('An error occurred', err)});
  };

  // TODO...
  handleSkypeBtn = () => {}

  render() {
    return (
        <View style={styles.profileContainer}>
          <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this.handlePressPhoneBtn}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="md-phone-portrait" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  call on mobile phone
                </Text>
              </View>
            </View>
          </Touchable>


          <Touchable
              style={styles.option}
              background={Touchable.Ripple('#ccc', false)}
              onPress={this.handleSkypeBtn}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.optionIconContainer}>
                <Ionicons name="logo-skype" size={22} color="#ccc" />
              </View>
              <View style={styles.optionTextContainer}>
                <Text style={styles.optionText}>
                  call on skype
                </Text>
              </View>
            </View>
          </Touchable>
        </View>


    );
  }

}

const styles = StyleSheet.create({
  profileContainer: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'flex-start',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  option: {
      backgroundColor: '#fdfdfd',
      paddingHorizontal: 15,
      paddingVertical: 15,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
  },
  optionIconContainer: {
      marginRight: 9,
  },
  optionText: {
      fontSize: 15,
      marginTop: 1,
  },
});
