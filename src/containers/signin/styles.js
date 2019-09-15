import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    paddingHorizontal: 50
  },
  emptyContainer: { flex: 1 },
  headerContainer: { flex: 2 },
  headerContainerImage: { width: 75, height: 75, marginBottom: 10 },
  headerContainerTitle: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 50
  },
  headerContainerText: { color: "#9E9E9E", fontSize: 30 },
  formContainer: { flex: 4 }
});

export default styles;
