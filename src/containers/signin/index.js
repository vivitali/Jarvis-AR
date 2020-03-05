import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getSignInModule } from "./redux/module";
import SignInContent from "./SignIn";

export const SignIn = () => (
  <DynamicModuleLoader modules={[getSignInModule()]}>
    <SignInContent />
  </DynamicModuleLoader>
);
