import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileBody: {
    paddingVertical: 20,
    width: "100%",
    flex: 1,
    backgroundColor: "#000000"
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
