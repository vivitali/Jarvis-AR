import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
  profileContainer: {
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "flex-start",
    backgroundColor: "#fbfbfb"
  }
});
