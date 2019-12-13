// @flow

import { type ScannerData } from "./redux/types";

export type OwnProps = {|

|};

export type Props = {|
  ...OwnProps,
  loading: boolean,
  processScanData: (data: any) => void,
|};

export type State = {|
    search: string,
|};
