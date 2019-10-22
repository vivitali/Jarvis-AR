import { StyleSheet } from "react-native";
import Fonts from "../../constants/Fonts";

export const WELCOME_SIZE = 50;
export const WELCOME_SIZE_SMALL = 30;

export const WELCOME_MARGIN = 82;
export const WELCOME_MARGIN_SMALL = 10;

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 50
  },
  bigText: {
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: WELCOME_SIZE,
    lineHeight: 61,
    fontFamily: Fonts.black,
    textAlign: "center",
    marginBottom: WELCOME_MARGIN
  },
  formContainer: { marginTop: 40 }
});

export default styles;
