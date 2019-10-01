import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end"
  },
  profileBody: {
    paddingVertical: 20,
    backgroundColor: "#a1a1a1",
    flex: 1
  },
  profileFooter: {
    marginTop: 2,
    backgroundColor: "#a1a1a1"
  },
  signout: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  row: {
    flexDirection: "row"
  },
  signoutOption: {
    fontWeight: "bold",
    color: "#cf0003"
  },
  option: {
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  optionIconContainer: {
    marginRight: 9
  },
  userText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 1,
    textAlign: "center"
  },
  optionText: {
    color: "white",
    fontSize: 15,
    marginTop: 1
  }
});
