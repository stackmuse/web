import { Navigate } from "react-router-dom";
import User from "../lib/User";
import { logoutRedirectPath } from "../lib/Config";
import { useEffect } from "react";

export default function Logout(props) {
  const user = new User();
  useEffect(() => {
    user.logout();
    props.setIsAuthenticated(user.isAuthenticated());
  });

  return <Navigate to={logoutRedirectPath} replace />;
}
