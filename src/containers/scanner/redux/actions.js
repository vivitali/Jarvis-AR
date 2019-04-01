// @flow

import {
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS,
  LOAD_SCAN_FAILURE,
  LOAD_SCANNER,
  RESET_SCAN_DATA
} from "./constants";
import type { ScannerData } from "./types";

export const loadScanData = () => ({
  type: LOAD_SCANNER
});

export const loadScanPending = () => ({
  type: LOAD_SCAN_PENDING
});

export const loadScanSuccess = (payload: ScannerData) => ({
  type: LOAD_SCAN_SUCCESS,
  payload
});

export const loadScanFailure = (error: Error) => ({
  type: LOAD_SCAN_FAILURE,
  error
});

export const resetScanData = () => ({
  type: RESET_SCAN_DATA
});
