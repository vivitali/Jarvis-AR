import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  formContainer: { color: Colors.secondaryColor },
  textInput: {
    height: 80,
    borderBottomColor: Colors.secondaryColor,
    borderBottomWidth: 1,
    fontSize: 25,
    fontFamily: Fonts.light
  },
  lastInput: { marginBottom: 50 },
  button: {
    backgroundColor: Colors.contrastColor,
    borderColor: Colors.primaryColor,
    borderWidth: 1,
    borderRadius: 22
  },
  buttonText: {
    color: Colors.primaryColor,
    fontSize: 20,
    fontFamily: Fonts.base
  },
  errorMsg: {
    textAlign: "center",
    fontFamily: Fonts.base
  }
});

export default styles;
