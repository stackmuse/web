import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../lib/User";

export default function Logout({ setIsAuthenticated }) {
  const user = new User();
  const navigate = useNavigate();

  useEffect(() => {
    user.logout();
    setIsAuthenticated(false);
    navigate("/");
  });
}
