import React from "react";

import { Navigate, Route, Routes } from "react-location";

import { PATHS } from "src/routes/paths";
import { Application } from "src/views/application";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={PATHS.APP} />} />
      <Route path={PATHS.APP} element={<Application />} />
    </Routes>
  );
};
