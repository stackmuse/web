import { Link } from "react-router-dom";

function PublicNavbar() {
  return (
    <nav>
      <Link to="/">Index</Link>
      <Link to="/about">About</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default PublicNavbar;
