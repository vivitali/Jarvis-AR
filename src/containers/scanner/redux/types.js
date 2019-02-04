// @flow

export const DammyData: "DUMMY_DATA" = "DUMMY_DATA";

export type ScannerData = { data: typeof DammyData };
import {
  LOAD_SCANNER,
  LOAD_SCAN_FAILURE,
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS
} from "./constants";

export type Action =
  | LoadScanDataAction
  | LoadScanPendingAction
  | LoadScanSuccessAction
  | LoadScanErrorAction;

export type LoadScanDataAction = {|
  type: typeof LOAD_SCANNER
|};

export type LoadScanPendingAction = {|
  type: typeof LOAD_SCAN_PENDING
|};

export type LoadScanSuccessAction = {|
  type: typeof LOAD_SCAN_SUCCESS,
  payload: ScannerData
|};

export type LoadScanErrorAction = {|
  type: typeof LOAD_SCAN_FAILURE,
  error: Error
|};

export type ScannerState = $ReadOnly<{|
  data: ?ScannerData,
  loading: boolean,
  loaded: boolean,
  error: ?Error // TODO: create common Error type
|}>;
