import { Link } from "react-router-dom";
import config from "../config.json";

function Navbar(props) {
  return (
    <nav>
      <Link to="/">Index</Link>

      {props.isAuthenticated ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <Link to={config.paths.logout}>Logout</Link>
        </>
      ) : (
        <Link to={config.paths.login}>Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
