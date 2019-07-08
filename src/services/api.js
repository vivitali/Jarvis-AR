import config from "react-native-config";
import endpoints from "../constants/endpoits";

export const getUserByCarNumber = number => {
  const url = `${config.NODE_SERVER}/${endpoints.carNumber}`;
  return request({ url, method: "GET" });
};
