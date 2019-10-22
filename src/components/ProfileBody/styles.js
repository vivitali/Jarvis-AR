import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    width: "100%",
    flex: 1
  },
  profileBody: {
    paddingVertical: 20,
    flex: 1
  },
  profileFooter: {
    marginTop: 2
  },
  signout: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  row: {
	flexDirection: "row",
	alignContent: "center",
	justifyContent: "center"
  },
  option: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  optionPhone: {
	paddingHorizontal: 15,
	paddingVertical: 15,
	marginLeft: 30
  },
  optionIconContainer: {
	display: "flex",
	marginRight: 9,
	borderWidth: 2,
	borderColor: "#dda720",
	width: 63,
	height: 63,
	borderRadius: 50,
	alignItems: "center",
	justifyContent: "center"
  },
  optionText: {
	color: "#ffffff",
	fontSize: 24,
	marginTop: -5
  },
  phoneIcon: {
	transform: [{ scaleX: -1}]
  }
});
