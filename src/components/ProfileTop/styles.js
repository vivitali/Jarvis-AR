import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";
import Color from "../../constants/Colors";

export default StyleSheet.create({
  profileTop: {
    height: "75%"
  },
  profileInfo: {
    fontSize: 25,
    lineHeight: 30,
    marginBottom: 15,
    textAlign: "center",
    color: Color.contrastColor,
    fontFamily: Fonts.base
  },
  carBrand: {
    fontSize: 22,
    lineHeight: 27,
    marginBottom: 10,
    textAlign: "center",
    color: Color.contrastColor,
    fontFamily: Fonts.base
  },
  carNumber: {
    fontSize: 23,
    lineHeight: 28,
    marginBottom: 15,
    textAlign: "center",
    color: Color.contrastColor,
    fontFamily: Fonts.bold
  },
  profileContactsContainer: {
    display: "flex",
    height: "40%",
    justifyContent: "center"
  },
  profileImgContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: "60%",
    paddingTop: 30
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.9)"
  }
});
