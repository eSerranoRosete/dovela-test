import React from "react";
import { CenterLayout } from "./layout/CenterLayout";

export const AccessDenied = () => {
  return (
    <CenterLayout>
      <span className="text-red-600">Access Denied</span>
    </CenterLayout>
  );
};
