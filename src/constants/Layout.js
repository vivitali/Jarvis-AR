// @flow
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const bgImage = require("../assets/images/bg.png");

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  bgImage,
};
