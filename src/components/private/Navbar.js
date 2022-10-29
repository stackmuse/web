import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/settings">Settings</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default Navbar;
