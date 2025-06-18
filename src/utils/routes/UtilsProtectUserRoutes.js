import { Navigate } from "react-router-dom";

const UtilsProtectUserRoutes = ({ children, isAuthenticated }) => {
  return !!isAuthenticated ? children : <Navigate to="/" replace />;
};

export default UtilsProtectUserRoutes;
