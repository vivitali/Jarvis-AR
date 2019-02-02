// @flow

import { type ScannerData } from "./redux/types";

export type Props = {|
  loading: boolean,
  data: ScannerData,
  loadScanData: () => void
|};
