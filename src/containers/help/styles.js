
import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 25
  },
  backButton: {
    color: Colors.contrastColor,
    fontSize: 20
  },
  settingTitle: {
    textTransform: "capitalize",
    color: Colors.contrastColor,
    fontSize: 25,
    lineHeight: 30,
    fontFamily: Fonts.base,
    marginLeft: 30
  },
  titleWrapper: {
    flexDirection: "row",
    marginTop: 60,
    alignItems: "center"
  },
  reportBtn: {
    color: Colors.contrastColor,
    fontSize: 20,
    marginTop: 35,
    fontFamily: Fonts.base,
  }
});
