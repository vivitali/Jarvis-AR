import { StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    width: "100%",
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.18)"
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
    justifyContent: "center"
  },
  row: {
    flexDirection: "row",
    alignContent: "center"
  },
  option: {
    color: "white",
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  optionIconContainer: {
    marginRight: 9
  },
  optionText: {
    color: "#ffffff",
    fontSize: 24,
    marginTop: -5
  }
});
