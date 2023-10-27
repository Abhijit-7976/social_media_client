import { Outlet } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext";
import LeftBar from "../leftBar/LeftBar";
import NavBar from "../navBar/NavBar";
import RightBar from "../rightBar/RightBar";
import "./layout.scss";

const Layout = () => {
  const { darkMode } = useDarkMode();
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <div className="layout">
        <NavBar className="navbar" />
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
