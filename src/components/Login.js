import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import User from "../lib/User";
import config from "../config.json";

function Login(props) {
  const user = new User();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user.isAuthenticated()) {
      navigate(config.paths.loginRedirect, {
        state: {
          flash: { class: "error", message: "You are already logged in." },
        },
      });
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.login(username, password);
    props.setIsAuthenticated(user.isAuthenticated());

    if (location.state?.next) {
      navigate(location.state.next, {
        state: {
          flash: { class: "success", message: "You have been logged in." },
        },
      });
    } else {
      navigate(config.paths.loginRedirect, {
        state: {
          flash: { class: "success", message: "You have been logged in." },
        },
      });
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" value={"Log In"} />
      </form>
    </>
  );
}

export default Login;
