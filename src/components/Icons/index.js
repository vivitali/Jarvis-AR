import icoMoonConfig from "./selection.json";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import Fonts from "../../constants/Fonts";

export default createIconSetFromIcoMoon(
  icoMoonConfig,
  "icomoon",
  Fonts.icomoon
);
