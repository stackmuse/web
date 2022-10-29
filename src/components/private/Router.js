import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Logout from "./Logout";
import NotFound from "../NotFound";

function Router({ setIsAuthenticated }) {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/settings"} element={<Settings />} />
        <Route
          path={"/logout"}
          element={<Logout setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Router;
