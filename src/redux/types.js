// @flow

import type { ScannerState } from "../containers/scanner/redux/types";
import type { ProfileState } from "../containers/profile/redux/types";

export type State = {|
  scanner: ScannerState,
  profile: ProfileState,
|};
