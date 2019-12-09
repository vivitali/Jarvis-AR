// @flow

import { SELECT_PROFILE, RESET_PROFILE_DATA } from "./constants";

export type UserAction = { type: string, user: any };
export type Error = { error: any };

export type Action = selectUserProfile | resetProfileData;

export type selectUserProfile = {|
  type: typeof SELECT_PROFILE,
|};

export type resetProfileData = {|
  type: typeof RESET_PROFILE_DATA,
|};

export type ProfileState = $ReadOnly<{|
  selectedUser: object,
|}>;
