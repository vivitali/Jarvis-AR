import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const ProfileBody = ({ user, onSkypePress, onSignOut, onPhonePress }) => (
  <View style={styles.profileBody}>
    <TouchableOpacity style={styles.option} onPress={onPhonePress}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Icon name="phone" size={22} color="#ccc" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{user.tel}</Text>
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option} onPress={onSkypePress}>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.optionIconContainer}>
          <Icon name="skype" size={22} color="#ccc" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{user.skype}</Text>
        </View>
      </View>
    </TouchableOpacity>

    <TouchableOpacity style={styles.option} onPress={onSignOut}>
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

export default ProfileBody;
