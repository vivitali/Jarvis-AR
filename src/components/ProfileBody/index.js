import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import EntypoIcon from "react-native-vector-icons/Entypo";
import styles from "./styles";

const ProfileBody = ({ onPhoneWorkPress, onPhonePress }) => (
	<View style={styles.profileContainer}>
		<View style={styles.profileBody}>
			<View style={styles.row}>
				<TouchableOpacity style={styles.option} onPress={onPhoneWorkPress}>
					<View style={styles.optionIconContainer}>
						<EntypoIcon name="mobile" size={35.2} color="#dda720" />
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.optionPhone} onPress={onPhonePress}>
					<View style={styles.optionIconContainer}>
						<Icon name="phone" size={32} color="#dda720" style={styles.phoneIcon}/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	</View>
);

export default ProfileBody;
