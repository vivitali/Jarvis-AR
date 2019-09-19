import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "stretch",
    paddingHorizontal: 50,
    paddingVertical: 60
  },
  textContainer: {
    flex: 2
  },
  bigText: {
    color: Colors.primaryColor,
    fontWeight: "bold",
    fontSize: 50
  },
  smallText: { color: Colors.secondaryColor, fontSize: 30 },
  formContainer: { flex: 4, justifyContent: "flex-end" }
});

export default styles;
