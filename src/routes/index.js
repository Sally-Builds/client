import { Route, Routes, BrowserRouter } from "react-router-dom";

/**
 * import Layouts
 */
import MainLayout from "../containers/Layouts/MainLayout";
// import UserLayout from "../containers/Layouts/UserLayout";
/**
 * import views
 */
import Home from "../containers/Views/Home";

const Router = () => {
  const tributes = [
    { name: "Agu Ejindu" },
    { name: "Euphoria zimuzor" },
    { name: "Eugene Lenglet" },
    { name: "Jane Humphrey" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etiboksdjf" },
    { name: "Agu Ejindu" },
    { name: "Euphoria zimuzor" },
    { name: "Eugene Lenglet" },
    { name: "Jane Humphrey" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
    { name: "Samuel Etibo" },
  ];

  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home tributes={tributes} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
