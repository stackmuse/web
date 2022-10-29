import { useState } from "react";
import User from './lib/User';
import Navbar from './components/private/Navbar';
import Router from "./components/private/Router";
import PublicNavbar from './components/public/Navbar';
import PublicRouter from './components/public/Router';


function App() {
  const user = new User();
  const [isAuthenticated, setIsAuthenticated] = useState(user.isAuthenticated());

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Router setIsAuthenticated={setIsAuthenticated} />
      </>
    );
  } else {
    return (
      <>
        <PublicNavbar />
        <PublicRouter setIsAuthenticated={setIsAuthenticated} />
      </>
    );
  }
}

export default App;
