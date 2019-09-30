import React from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./redux";
import { actions as signinAction } from "../signin/redux";
import { ProfileTop, ProfileBody } from "../../components";
import styles from "./styles";

const profilePicture = require("../../assets/images/profile.png");

class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    const { proceedAction, signOut } = this.props;
    const data = this.props.navigation.getParam("user");
    const user = data || {};
    return (
      <View style={styles.profileContainer}>
        <ProfileTop
          avatar={profilePicture}
          {...user}
          carNumber={user.car_number}
          carBrand={user.car_brand}
        />
        <ProfileBody
          user={user}
          onSignOut={signOut}
          onSkypePress={() => proceedAction({ type: "skype", user })}
          onPhonePress={() => proceedAction({ type: "phone", user })}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signOut: signinAction.invalidate,
      proceedAction: actions.proceedAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
