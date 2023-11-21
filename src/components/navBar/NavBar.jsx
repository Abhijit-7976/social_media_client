import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { useEffect, useState } from "react";
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
  const [searchText, setSearchText] = useState("");
  const [allUsers, setAllUsers] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    async function fetchAllUsers() {
      const res = await axios.get("/users/all");
      setAllUsers(res.data);
    }
    fetchAllUsers();
  }, []);

  useEffect(() => {
    console.log(searchText);
    const timeoutId = setTimeout(() => {
      if (searchText) {
        console.log("typed");
        const matchUsers = allUsers.filter(user => {
          return user.username
            .toLowerCase()
            .includes(searchText.trim().toLowerCase());
        });
        console.log(matchUsers);
        setSearchResult(matchUsers);
      }
    }, 1500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText, allUsers]);

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout");
      navigate("/login");
      setCurUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = value => {
    setSearchText(value);
  };

  return (
    <div className={`${className} nav`}>
      <Link
        className="logo"
        to="/">
        <h1>ShiniSphere</h1>
      </Link>
      <div className="search__box">
        <div className="search--bar">
          <input
            type="text"
            placeholder="search"
            onChange={e => handleSearch(e.target.value)}
          />
          <SearchOutlinedIcon />
        </div>
        {searchResult && (
          <div className="search--result">
            {searchResult && searchResult.length > 0
              ? searchResult.map(result => (
                  <Link
                    key={result._id}
                    className="username"
                    to={`/profile/${result.username}`}>
                    <span>{result.username}</span>
                  </Link>
                ))
              : "No username found"}
          </div>
        )}
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
