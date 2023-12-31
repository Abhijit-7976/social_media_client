import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import TwitterIcon from "@mui/icons-material/Twitter";

import FollowButton from "../../components/follow-button/FollowButton";
import Loading from "../../components/loading/Loading";
import Posts from "../../components/posts/Posts";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../config/axiosInstance";

import { useAuth } from "../../contexts/AuthContext";
import "./profile.scss";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isFollowing, setIsfollowing] = useState(false);
  const { username } = useParams();
  const { curUser, setCurUser } = useAuth();

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    }
    fetchUser();
  }, [username]);

  useEffect(() => {
    if (user && user.followers.includes(curUser._id)) {
      setIsfollowing(true);
    }
  }, [user, curUser._id]);

  const handleFollow = async () => {
    if (!isFollowing) {
      await axios.patch(`/users/${user._id}/follow`, {
        userId: curUser._id,
      });
      setIsfollowing(true);
      setCurUser(curUser => {
        const followings = [...curUser.followings];
        followings.push(user._id);
        return { ...curUser, followings };
      });
    } else {
      await axios.patch(`/users/${user._id}/unfollow`, {
        userId: curUser._id,
      });
      setIsfollowing(false);
      setCurUser(curUser => {
        const followings = curUser.followings.filter(followingUser => {
          return followingUser !== user._id;
        });
        return { ...curUser, followings };
      });
    }
  };

  if (!user) return <Loading />;

  return (
    <div className="profile">
      <div className="images">
        <img
          src={user.coverPicture || "/assets/no-cover.jpeg"}
          alt=""
          className="cover"
        />
        <img
          src={user.profilePicture || "/assets/no-avatar.png"}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profile__container">
        <div className="profile__details">
          <div className="user__links">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon />
            </a>
          </div>
          <div className="user__main">
            <span>{user.username}</span>
            <div className="info--item">
              <PlaceIcon />
              <span>{user.city}</span>
            </div>
            <div className="info--item">
              <span>{user.followers.length}</span>
              <span>Followers</span>
            </div>
            <div className="info--item">
              <span>{user.followings.length}</span>
              <span>Following</span>
            </div>
            {username !== curUser.username && (
              <FollowButton
                onClick={handleFollow}
                text={isFollowing ? "unfollow" : "follow"}
              />
            )}
            <span>{user.bio}</span>
          </div>
          <div className="user__options">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={user._id} />
      </div>
    </div>
  );
};

export default Profile;
