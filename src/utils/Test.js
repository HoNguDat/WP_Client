import { Outlet, Navigate, OutletProps } from "react-router-dom";

export default function ProtectedRoute() {
    let auth = { token: true};
    return (auth.token ? <Outlet /> : <Navigate to="/" />);
  }
