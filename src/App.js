import { useState } from "react";
import Navbar from "./components/Navbar";
import Router from "./components/Router";
import User from "./lib/User";
import Flash from "./components/Flash";

function App() {
  const user = new User();
  const [isAuthenticated, setIsAuthenticated] = useState(
    user.isAuthenticated()
  );

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Flash />
      <Router setIsAuthenticated={setIsAuthenticated} />
    </>
  );
}

export default App;
