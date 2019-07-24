// @flow

import { type ScannerData } from "./redux/types";

export type Props = {|
  navigation: any,
  loading: boolean,
  data: ScannerData,
  processScanData: (data: any) => void,
  resetScanData: () => void
|};
