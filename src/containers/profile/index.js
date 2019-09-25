import React from "react";
import { View, Linking } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../signin/redux";
import styles from "./style";
import { ProfileTop, ProfileBody } from "../../components";

const profilePicture = require("../../assets/images/profile.png");

class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  handlePressPhoneBtn = tel => {
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
  handleSkypeBtn = user => {
    try {
      Linking.openURL(`skype:${user}`);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const data = this.props.navigation.getParam("user");
    const user = data || {
      name: "Rostyslav Belmeha",
      tel: "+380978875041",
      skype: "burn_8_8_8",
      carBrand: "Mitsubishi Lancer X",
      carNumber: "AT 5656 BT"
    };
    return (
      <View style={styles.profileContainer}>
        <ProfileTop avatar={profilePicture} {...user} />
        <ProfileBody
          user={user}
          onSignOut={this.props.invalidate}
          onSkypePress={() => this.handlePressPhoneBtn(user.tel)}
          onPhonePress={() => this.handleSkypeBtn(user.skype)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      invalidate: actions.invalidate
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
