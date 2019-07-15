import config from "react-native-config";
import endpoints from "../constants/endpoints";
import { request } from "./request";

export const getUserByCarNumber = number => {
  const url = `${config.NODE_SERVER}/${endpoints.carNumber}`;
  return request({ url, method: "GET" });
};
