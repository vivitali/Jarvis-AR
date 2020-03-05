import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getProfileModule } from "./redux/module";
import ProfileContent from "./Profile";

export const Profile = () => (
  <DynamicModuleLoader modules={[getProfileModule()]}>
    <ProfileContent />
  </DynamicModuleLoader>
);
