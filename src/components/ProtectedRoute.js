import User from "../lib/User";
import { Navigate, useLocation } from "react-router-dom";

function ProtectRoute({ component }) {
  const user = new User();
  const location = useLocation();

  if (user.isAuthenticated()) {
    return component;
  } else {
    return <Navigate to={"/login"} replace state={{ next: location }} />;
  }
}

export default ProtectRoute;
