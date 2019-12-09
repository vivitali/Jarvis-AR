// @flow

import type { ScannerState } from "../containers/scanner/redux/types";
import type { ProfilerState } from "../containers/profile/redux/types";

export type State = {|
  scanner: ScannerState,
  profile: ProfileState,
|};
