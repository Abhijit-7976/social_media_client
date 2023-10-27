import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../config/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";
import { useDarkMode } from "../../contexts/DarkModeContext";
import User from "../user/User";
import "./nav-bar.scss";

const NavBar = ({ className }) => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const { handleToggle, darkMode } = useDarkMode();
  const { curUser, setCurUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      navigate("/login");
      setCurUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={`${className} nav`}>
      <Link
        className="logo"
        to="/">
        <h1>ShiniSphere</h1>
      </Link>
      <div className="search">
        <input
          type="text"
          placeholder="search"
        />
        <SearchOutlinedIcon />
      </div>
      <div className="options">
        {darkMode ? (
          <div
            className="icon-box"
            onClick={handleToggle}>
            <WbSunnyOutlinedIcon />
          </div>
        ) : (
          <div
            className="icon-box"
            onClick={handleToggle}>
            <DarkModeOutlinedIcon />
          </div>
        )}

        <div className="icon-box">
          <GridViewOutlinedIcon />
        </div>
        <div className="icon-box">
          <PersonOutlinedIcon />
        </div>
        <div className="icon-box">
          <EmailOutlinedIcon />
        </div>
        <div className="icon-box">
          <NotificationsOutlinedIcon />
        </div>
        <div className="user-box">
          <User
            className="nav__user"
            profilePic={curUser.profilePicture}
            username={curUser.username}
            profileLink={`/profile/${curUser.username}`}
            onClick={() => {
              setLogoutOpen(o => !o);
            }}
          />
          {logoutOpen && (
            <div className="logout">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
