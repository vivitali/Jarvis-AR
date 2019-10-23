import React from "react";
import { Image, Text, View } from "react-native";
import styles from "./styles";

const ProfileTop = ({ avatar, name, tel, carNumber, carBrand }) => (
  <View style={styles.profileTop}>
    <View style={styles.profileImgContainer}>
      <Image source={avatar} style={styles.profileImg} />
    </View>
    <View style={styles.profileContactsContainer}>
      <Text style={styles.profileInfo}>{name}</Text>
      <Text style={styles.carBrand}>{carBrand}</Text>
      <Text style={styles.carNumber}>{carNumber}</Text>
      <Text style={styles.profileInfo}>{tel}</Text>
    </View>
  </View>
);

export default ProfileTop;
