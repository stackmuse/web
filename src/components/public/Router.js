import { Route, Routes } from "react-router-dom";
import Index from "./Index";
import About from "./About";
import Login from "./Login";
import NotFound from "../NotFound";

function PublicRouter({ setIsAuthenticated }) {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Index />} />
        <Route path={"/about"} element={<About />} />
        <Route
          path={"/login"}
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route path={"/*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default PublicRouter;
