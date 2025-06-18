import { Navigate } from "react-router-dom";

const UtilsProtectAuthRoutes = ({ children, isAuthenticated }) => {
  return !!isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default UtilsProtectAuthRoutes;
