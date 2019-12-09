// @flow

import { reducer as scanner } from "../containers/scanner/redux";
import { reducer as auth } from "../containers/signin/redux";
import { reducer as profile } from "../containers/profile/redux";

export default {
  scanner,
  auth,
  profile,
};
