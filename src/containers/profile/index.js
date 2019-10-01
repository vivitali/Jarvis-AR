import React from "react";
import { Image, View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./redux";
import { ProfileTop, ProfileBody } from "../../components";
import styles from "./styles";

const profilePicture = require("../../assets/images/profile.png");
const noData = require("../../assets/images/no-data-found.png");

class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    const { proceedAction } = this.props;
    const user = this.props.navigation.getParam("user");

    return user ? (
      <View style={styles.profileContainer}>
        <ProfileTop
          avatar={profilePicture}
          {...user}
          carNumber={user.cars_number}
          carBrand={user.cars_brand}
        />
        <ProfileBody
          user={user}
          onSkypePress={() => proceedAction({ type: "skype", user })}
          onPhonePress={() => proceedAction({ type: "phone", user })}
        />
      </View>
    ) : (
      <View style={styles.noDataContainer}>
        <Image source={noData} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

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
