import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { loginPath, logoutPath } from "../lib/Config";

function Router(props) {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route
          path={"/dashboard"}
          element={<ProtectedRoute component={<Dashboard />} />}
        />
        <Route
          path={loginPath}
          element={<Login setIsAuthenticated={props.setIsAuthenticated} />}
        />
        <Route
          path={logoutPath}
          element={<Logout setIsAuthenticated={props.setIsAuthenticated} />}
        />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
