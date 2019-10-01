import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const ProfileTop = ({ avatar, name, carNumber, carBrand }) => (
  <View style={styles.profileTop}>
    <View style={styles.profileImgContainer}>
      <Image source={avatar} style={styles.profileImg} />
    </View>
    <Text style={styles.userText}>{name}</Text>
    <Text style={styles.carNumber}>{carNumber}</Text>
    <Text style={styles.carBrand}>{carBrand}</Text>
  </View>
);

export default ProfileTop;
