import { Navigate, useLocation } from "react-router-dom";
import config from '../config.json'
import User from "../lib/User";

function ProtectRoute({ component }) {
  const user = new User();
  const location = useLocation();

  if (user.isAuthenticated()) {
    return component;
  } else {
    return <Navigate to={config.paths.login} replace state={{ next: location }} />;
  }
}

export default ProtectRoute;
