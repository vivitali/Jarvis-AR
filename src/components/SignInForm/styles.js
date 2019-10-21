import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  formContainer: {
    color: Colors.secondaryColor,
    alignItems: "center"
  },
  textInput: {
    height: 43,
    width: 270,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.9)",
    borderStyle: "solid",
    backgroundColor: "rgba(196, 196, 196, 0.5)",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.base,
    color: "rgba(255, 255, 255, 0.3)",
    borderRadius: 20,
    marginBottom: 40,
    alignSelf: "center",
    padding: 10,
    textAlign: "center"
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
    fontFamily: Fonts.base,
    color: "rgba(255, 255, 255, 0.3)",
    textAlign: "center"
  },
  button: {
    borderColor: "rgba(255, 255, 255, 0.5)",
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 217,
    justifyContent: "center",
  },
  buttonPress: {
    borderColor: Colors.pressButton,
    height: 40,
    width: 217,
    borderRadius: 20,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.7,
    shadowRadius: 6
  },
  buttonText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 18,
    lineHeight: 22,
    fontFamily: Fonts.black,
    textAlign: "center",
  },
  errorMsg: {
    textAlign: "center",
    fontFamily: Fonts.base,
    color: Colors.errorColor,
    marginTop: 20
  }
});

export default styles;
