import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
