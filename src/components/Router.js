import { Route, Routes } from "react-router-dom";
import config from "../config.json";
import Index from "./Index";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Logout from "./Logout";
import NotFound from "./NotFound";
import ProtectedRoute from "./ProtectedRoute";

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
          path={config.paths.login}
          element={<Login setIsAuthenticated={props.setIsAuthenticated} />}
        />
        <Route
          path={config.paths.logout}
          element={<Logout setIsAuthenticated={props.setIsAuthenticated} />}
        />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
