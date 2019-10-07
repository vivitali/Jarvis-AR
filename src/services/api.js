import config from "../configs";
import endpoints from "../constants/endpoints";
import { request } from "./request";
import type {ScannerData} from "../containers/scanner/redux/types";

export const getUserByCarNumber = (visionResp) : ScannerData => {
  const url = `${config.nodeJS}/${endpoints.processNumber}`;

  return request({ url, method: "POST", body: visionResp });
};
