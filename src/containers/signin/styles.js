import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50
  },
  bigText: {
    color: Colors.primaryColor,
    fontSize: 50,
    fontFamily: Fonts.bold
  },
  smallText: {
    color: Colors.secondaryColor,
    fontSize: 30,
    fontFamily: Fonts.base
  },
  formContainer: { marginTop: 40 }
});

export default styles;
