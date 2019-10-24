import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25
  },
  settingTitle: {
    textTransform: "capitalize",
    color: Colors.contrastColor,
    fontSize: 25,
    lineHeight: 30,
    fontFamily: Fonts.base,
    marginTop: 60
  },
  profileFooter: {
    marginBottom: 40,
    marginTop: "auto"
  },
  signout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  signoutOption: {
    fontSize: 20,
    color: Colors.contrastColor,
    fontFamily: Fonts.base
  },
  signoutIcon: {
    marginRight: 18,
    width: 20,
    textAlign: "center"
  },
  settingBtns: {
    flexDirection: "row",
    marginBottom: 25
  },
  settingBtnsWrapper: {
    marginTop: 35
  }
});
