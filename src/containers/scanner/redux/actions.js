import {
  LOAD_SCAN_PENDING,
  LOAD_SCAN_SUCCESS,
  LOAD_SCAN_FAILURE,
  LOAD_SCANNER
} from "./constants";

export const loadScanData = () => ({
  type: LOAD_SCANNER
});

export const loadScanPending = () => ({
  type: LOAD_SCAN_PENDING
});

export const loadScanSuccess = payload => ({
  type: LOAD_SCAN_SUCCESS,
  payload
});

export const loadScanFailure = error => ({
  type: LOAD_SCAN_FAILURE,
  error
});
