import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateAuth = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return <div className="progress w-56"></div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateAuth;
