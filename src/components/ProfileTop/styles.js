import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";

export default StyleSheet.create({
  profileTop: {
  	height: '75%'
  },
  profileInfo: {
	fontSize: 25,
	lineHeight: 30,
	marginBottom: 18,
	textAlign: "center",
	color: "#ffffff",
	fontFamily: Fonts.base
  },
  profileContactsContainer: {
  	display: 'flex',
	height: '40%',
	justifyContent: "center",
  },
  profileImgContainer: {
	alignSelf: "center",
	justifyContent: "center",
	height: '60%',
	paddingTop: 30,
  },
  profileImg: {
	height: 200,
	width: 200,
	borderRadius: 100,
	borderWidth: 1,
	borderColor: "rgba(255, 255, 255, 0.9)",
  }
});
