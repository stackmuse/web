import { Navigate, useLocation } from "react-router-dom";
import User from "../lib/User";
import { loginPath } from "../lib/Config";

function ProtectRoute({ component }) {
  const user = new User();
  const location = useLocation();

  if (user.isAuthenticated()) {
    return component;
  } else {
    return <Navigate to={loginPath} replace state={{ next: location }} />;
  }
}

export default ProtectRoute;
