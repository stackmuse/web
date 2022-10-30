import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import config from "../config.json";
import User from "../lib/User";

export default function Logout(props) {
  const user = new User();
  const navigate = useNavigate();

  useEffect(() => {
    user.logout();
    props.setIsAuthenticated(user.isAuthenticated());

    navigate(config.paths.logoutRedirect, {
      state: {
        flash: { class: "success", message: "You have been logged out" },
      },
    });
  });
}
