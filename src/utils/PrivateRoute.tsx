import React from "react";
import { Outlet, Navigate } from "react-router-dom";

interface Auth {
  token: boolean;
}

const PrivateRoute: React.FC = () => {
  let auth: Auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
