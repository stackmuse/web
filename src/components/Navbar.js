import { Link } from "react-router-dom";
import { loginPath, logoutPath } from "../lib/Config";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Index</Link>

      {props.isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to={logoutPath}>Logout</Link>
        </>
      ) : (
        <Link to={loginPath}>Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
