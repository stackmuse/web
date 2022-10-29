import { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import User from "./lib/User";

function App() {
  const user = new User();
  const [isAuthenticated, setIsAuthenticated] = useState(
    user.isAuthenticated()
  );

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Router setIsAuthenticated={setIsAuthenticated} />
    </>
  );
}

export default App;
