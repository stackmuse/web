import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import config from '../config.json'
import User from "../lib/User";

export default function Logout(props) {
  const user = new User();
  useEffect(() => {
    user.logout();
    props.setIsAuthenticated(user.isAuthenticated());
  });

  return <Navigate to={config.paths.logoutRedirect} replace />;
}
