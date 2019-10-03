// @flow

import * as constants from "./constants";
import type { ScannerData } from "./types";

export const processScanData = (payload: ScannerData) => ({
  type: constants.PROCESS_SCAN_DATA,
  payload
});

export const loadScanPending = () => ({
  type: constants.LOAD_SCAN_PENDING
});

export const loadScanSuccess = (payload: ScannerData) => ({
  type: constants.LOAD_SCAN_SUCCESS,
  payload
});

export const loadScanFailure = (error: Error) => ({
  type: constants.LOAD_SCAN_FAILURE,
  error
});

export const resetScanData = () => ({
  type: constants.RESET_SCAN_DATA
});

export const searchNumber = (payload: string) => ({
  type: constants.SEARCH_NUMBER,
  payload
});
