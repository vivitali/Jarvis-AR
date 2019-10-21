import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50
  },
  bigText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 50,
    lineHeight: 61,
    fontFamily: Fonts.black,
    textAlign: "center",
    marginBottom: 82
  },
  formContainer: { marginTop: 40 }
});

export default styles;
