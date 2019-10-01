import React from "react";
import { Image, View, ImageBackground } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "./redux";
import { ProfileTop, ProfileBody } from "../../components";
import styles from "./styles";

const profilePicture = require("../../assets/images/user.jpg");
const noData = require("../../assets/images/no-data-found.png");
const bg = require("../../assets/images/bg.jpg");

class Profile extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    const { proceedAction } = this.props;
    const user = this.props.navigation.getParam("user");

    return user ? (
      <View style={styles.profileContainer}>
        <ImageBackground source={bg} style={{ width: "100%", height: "100%" }}>
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
        </ImageBackground>
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
