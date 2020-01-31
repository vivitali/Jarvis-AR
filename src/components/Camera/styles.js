import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionWrapper: {
    position: "relative",
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
  },
  flip: {
    position: "absolute",
    width: 30,
    height: 30,
    bottom: 0,
    right: 0,
  },
  snap: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  snapBorder: {
    backgroundColor: "rgba(196, 196, 196, 0.8)",
    display: "flex",
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 20,
  },
  flipText: { fontSize: 18, marginBottom: 10, color: "white" },
  snapText: { fontSize: 18, marginBottom: 20, color: "white" },
});

export default styles;
