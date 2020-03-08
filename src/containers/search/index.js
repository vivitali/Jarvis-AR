import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Button from "apsl-react-native-button";
import { connect } from "react-redux";
import {
  ImageBackground,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { actions } from "../scanner/redux";
import { actions as actionsProfile } from "../profile/redux";
import { getProfile, isLoading } from "../scanner/redux/selectors";

import styles from "./styles";

import { type Props, type State } from "./types";
import Layout from "../../constants/Layout";
import Icon from "react-native-vector-icons/FontAwesome";

import Loader from "../../components/Loader";

class Search extends Component<Props, State> {
  state = {
    search: "",
  };

  static navigationOptions = {
    header: null,
  };

  onSearch = () => {
    if (this.state.search.length > 2) {
      this.props.searchNumber(this.state.search);
    }
  };

  onProfileOpen = item => {
    this.props.navigateProfile(item);
  };

  render() {
    const { search } = this.state;
    const { proceedAction, users, isSearching } = this.props;

    return (
      <ImageBackground
        source={Layout.bgImage}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={styles.container}>
          <View style={styles.searchInputWrapper}>
            <TextInput
              value={search}
              onChangeText={search => this.setState({ search })}
              placeholder="Enter car number"
              style={styles.searchInput}
              returnKeyType="search"
              autoCorrect={false}
              placeholderTextColor="#fff"
              onSubmitEditing={this.onSearch}
            />
            <Button onPress={this.onSearch} style={styles.searchBtn}>
              <Icon name="search" size={22} color="#fff"/>
            </Button>
          </View>
          {isSearching && <Loader></Loader>}
          {!isSearching &&
          users &&
          users.map(user => (
            <Button
              key={user.users_id}
              onPress={() => this.onProfileOpen(user)}
              style={styles.userCard}
            >
              <View>
                {!!user.carNumber && (
                  <Text style={[styles.userDetails, styles.textUnderline]}>
                    {user.carNumber}
                  </Text>
                )}
                {!!user.name && (
                  <Text style={styles.userDetails}>{user.name}</Text>
                )}
              </View>
              <TouchableOpacity
                style={styles.mobileBtn}
                onPress={() => proceedAction({ type: "phone", user })}
              >
                <View style={styles.optionIconContainer}>
                  <Icon name="mobile" color="#fff" size={35}/>
                </View>
              </TouchableOpacity>
            </Button>
          ))}
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  users: getProfile(state),
  isSearching: isLoading(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchNumber: actions.searchNumber,
      navigateProfile: actions.navigateProfile,
      proceedAction: actionsProfile.proceedAction,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
