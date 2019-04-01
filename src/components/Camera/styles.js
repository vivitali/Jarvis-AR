import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actionWrapper: {
    position: "relative",
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center"
  },
  flip: {
    position: "absolute",
    width: 30,
    height: 30,
    bottom: 0,
    right: 0
  },
  snap: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center"
  },
  flipText: { fontSize: 18, marginBottom: 10, color: "white" },
  snapText: { fontSize: 18, marginBottom: 20, color: "white" }
});

export default styles;
