// @flow

import { type ScannerData } from "./redux/types";

export type Props = {|
  navigation: any,
  loading: boolean,
  data: ScannerData,
  loadScanData: () => void,
  loadScanPending: () => void,
  loadScanSuccess: (visionResp: any) => void,
  loadScanFailure: (error: any) => void
|};
