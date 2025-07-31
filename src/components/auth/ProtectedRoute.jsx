// src/components/auth/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true";
  return isAuthenticated ? children : <Navigate to="/admin-login" />;
};

export default ProtectedRoute;
