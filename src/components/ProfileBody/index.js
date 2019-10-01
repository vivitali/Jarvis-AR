import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const ProfileBody = ({ user, onSkypePress, onPhonePress }) => (
  <View style={styles.profileContainer}>
    <View style={styles.profileBody}>
      <TouchableOpacity style={styles.option} onPress={onPhonePress}>
        <View style={styles.row}>
          <View style={styles.optionIconContainer}>
            <Icon name="phone" size={20} color="#ffffff" />
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
              <Icon name="skype" size={20} color="#ffffff" />
            </View>
            <View>
              <Text style={styles.optionText}>{user.skype}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

export default ProfileBody;
