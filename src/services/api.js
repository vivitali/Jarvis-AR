import config from "react-native-config";
import endpoints from "../constants/endpoints";
import { request } from "./request";

export const getUserByCarNumber = visionResp => {
  const url = `${config.NODE_SERVER}/${endpoints.processNumber}`;

  return request({ url, method: "POST", body: visionResp });
};
