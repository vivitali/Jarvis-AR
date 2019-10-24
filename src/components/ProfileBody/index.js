import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

const ProfileBody = ({ user, onPhoneWorkPress, onPhonePress }) => (
  <View style={styles.profileContainer}>
    <View style={styles.profileBody}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.option} onPress={onPhonePress}>
          <View style={styles.optionIconContainer}>
            <Icon name="mobile" size={48} color="#dda720" />
          </View>
        </TouchableOpacity>
        {!!user.phone_work && (
          <TouchableOpacity
            style={styles.optionPhone}
            onPress={onPhoneWorkPress}
          >
            <View style={styles.optionIconContainer}>
              <Icon
                name="phone"
                size={32}
                color="#dda720"
                style={styles.phoneIcon}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  </View>
);

export default ProfileBody;
