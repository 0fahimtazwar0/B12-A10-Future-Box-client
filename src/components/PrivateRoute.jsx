import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "./Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return <Loading />;
  } else if (user && user?.email) return children;
  else {
    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
  }
};

export default PrivateRoute;
