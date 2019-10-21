import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  formContainer: { color: Colors.secondaryColor },
  textInputWrapper: {
    borderColor: "rgba(255, 255, 255, 0.9)",
    borderStyle: "solid",
    backgroundColor: "rgba(196, 196, 196, 0.5)",
    height: 43,
    width: 270,
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 20,
    marginBottom: 40,
    padding: 10
  },
  textInput: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.bold,
    color: "rgba(255, 255, 255, 0.3)"
  },
  passwordWrapper: {
    marginBottom: 43,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputPassword: {
    flex: 1,
    marginRight: 10,
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.bold,
    color: "rgba(255, 255, 255, 0.3)"
  },
  button: {
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 217,
    alignSelf: "center"
  },
  buttonText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.bold
  },
  errorMsg: {
    textAlign: "center",
    fontFamily: Fonts.base,
    color: Colors.errorColor
  }
});

export default styles;
