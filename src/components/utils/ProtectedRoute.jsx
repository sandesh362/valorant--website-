import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("admin-auth") === "true"; // Compare with string "true"
  
  if (!isAuthenticated) {
    return <Navigate to="/admin-login" replace />;
  }
  
  return children;
};

export default ProtectedRoute;