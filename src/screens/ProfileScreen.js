import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  handlePressPhoneBtn = (tel = "+380506443111") => {
    Linking.canOpenURL(`tel:${tel}`)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + tel);
        } else {
          return Linking.openURL(`tel:${tel}`);
        }
      })
      .catch(err => {
        console.error("An error occurred", err);
      });
  };

  // TODO...
  handleSkypeBtn = (user = "burn_8_8_8") => {
    try {
      Linking.openURL(`skype:${user}`);
    } catch (e) {
      console.log(e);
    }
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };

  render() {
    const data = this.props.navigation.getParam("user", {});
    const user = data || {};

    return (
      <View style={styles.profileContainer}>
        <Text style={styles.userText}>{user.name}</Text>
        <TouchableOpacity
          style={styles.option}
          onPress={() => this.handlePressPhoneBtn(user.tel)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer}>
              <Icon name="phone" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>call on mobile phone</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => this.handleSkypeBtn(user.skype)}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer}>
              <Icon name="skype" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>call on skype</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => this._signOutAsync()}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={styles.optionIconContainer}>
              <Icon name="sign-out" size={22} color="#ccc" />
            </View>
            <View style={styles.optionTextContainer}>
              <Text style={styles.optionText}>Sign Out</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileContainer: {
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "flex-start",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  option: {
    backgroundColor: "#fdfdfd",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EDEDED"
  },
  optionIconContainer: {
    marginRight: 9
  },
  userText: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 1,
    textAlign: "center"
  },
  optionText: {
    fontSize: 15,
    marginTop: 1
  }
});
