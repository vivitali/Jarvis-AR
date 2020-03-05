import React from "react";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { getScannerModule } from "./redux/module";
import ScannerContent from "./Scanner";

export const Scanner = () => (
  <DynamicModuleLoader modules={[getScannerModule()]}>
    <ScannerContent />
  </DynamicModuleLoader>
);
