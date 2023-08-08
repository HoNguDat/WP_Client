import { Outlet, Navigate, OutletProps } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
export default function PrivateRoutes() {
  let auth = { token: true };
  return auth.token ? <Outlet /> : <Navigate to="/" />;
}
