import React from "react";
import { Image, View, ImageBackground } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./redux";
import { ProfileTop, ProfileBody } from "../../components";
import styles from "./styles";
import { getProfile } from "../scanner/redux/selectors";

const profilePicture = require("../../assets/images/user.jpg");
const noData = require("../../assets/images/no-data-found.png");

import Layout from "../../constants/Layout";

class Profile extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { proceedAction, user } = this.props;

    return user ? (
      <View style={styles.profileContainer}>
        <ImageBackground
          source={Layout.bgImage}
          style={{ width: "100%", height: "100%" }}
        >
          <ProfileTop avatar={profilePicture} {...user} />
          <ProfileBody
            user={user}
            onSkypePress={() => proceedAction({ type: "skype", user })}
            onPhonePress={() => proceedAction({ type: "phone", user })}
          />
        </ImageBackground>
      </View>
    ) : (
      <View style={styles.noDataContainer}>
        <Image source={noData} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: getProfile(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      proceedAction: actions.proceedAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
