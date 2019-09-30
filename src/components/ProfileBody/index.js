import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const ProfileBody = ({ user, onSkypePress, onSignOut, onPhonePress }) => (
  <View style={styles.profileContainer}>
    <View style={styles.profileBody}>
      <TouchableOpacity style={styles.option} onPress={onPhonePress}>
        <View style={styles.row}>
          <View style={styles.optionIconContainer}>
            <Icon name="phone" size={22} color="#ccc" />
          </View>
          <View>
            <Text style={styles.optionText}>{user.tel}</Text>
          </View>
        </View>
      </TouchableOpacity>

      {!!user.skype && (
        <TouchableOpacity style={styles.option} onPress={onSkypePress}>
          <View style={styles.row}>
            <View style={styles.optionIconContainer}>
              <Icon name="skype" size={22} color="#ccc" />
            </View>
            <View>
              <Text style={styles.optionText}>{user.skype}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>

    <View style={styles.profileFooter}>
      <TouchableOpacity style={styles.option} onPress={onSignOut}>
        <View style={styles.signout}>
          <View style={styles.optionIconContainer}>
            <Icon name="sign-out" size={22} style={styles.signoutOption} />
          </View>
          <View>
            <Text style={[styles.optionText, styles.signoutOption]}>
              Sign Out
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  </View>
);

export default ProfileBody;
