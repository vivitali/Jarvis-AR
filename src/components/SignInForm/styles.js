import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  formContainer: { color: Colors.secondaryColor },
  textInput: {
    height: 80,
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    fontSize: 20
  },
  lastInput: { marginBottom: 50 },
  button: {
    backgroundColor: Colors.contrastColor,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 22
  },
  buttonText: {
    color: Colors.primaryColor
  },
  errorMsg: {
    textAlign: "center"
  }
});

export default styles;
