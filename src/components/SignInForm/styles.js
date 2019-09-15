import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  formContainer: { color: Colors.secondaryColor, marginTop: 60 },
  textInput: {
    height: 80,
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    fontSize: 20
  },
  lastInput: { marginBottom: 55 }
});

export default styles;
