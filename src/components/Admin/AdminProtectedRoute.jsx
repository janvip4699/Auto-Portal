import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

const AdminProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/admin" />;
  }
  return children;
};

export default AdminProtectedRoute;
