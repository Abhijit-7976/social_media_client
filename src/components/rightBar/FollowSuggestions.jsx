import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useEffect, useState } from "react";
import axiosInstance from "../../config/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";
import FollowButton from "../follow-button/FollowButton";
import Loading from "../loading/Loading";
import User from "../user/User";

const FollowSuggestions = () => {
  const { curUser, setCurUser } = useAuth();
  const [suggestUsers, setSuggestUsers] = useState(null);
  // const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    async function fetchAllUsers() {
      const res = await axiosInstance.get("/users/all");
      const users = res.data.filter(user => {
        return (
          user._id !== curUser._id && !curUser.followings.includes(user._id)
        );
      });
      let sugUsers = [];
      for (let i = 0; i < 2; i++) {
        const x = Math.floor(Math.random() * users.length);
        sugUsers.push(users[x]);
      }
      setSuggestUsers(sugUsers);
    }
    fetchAllUsers();
  }, [curUser]);

  const handleFollow = async sUserId => {
    await axiosInstance.patch(`/users/${sUserId}/follow`, {
      userId: curUser._id,
    });
    setCurUser(curUser => {
      const followings = [...curUser.followings];
      followings.push(sUserId);
      return { ...curUser, followings };
    });
  };

  return (
    <div className="item">
      <span>People You May Know</span>
      {!suggestUsers ? (
        <Loading />
      ) : (
        suggestUsers.map(sUser => (
          <div
            className="user"
            key={sUser._id}>
            <User
              profilePic={sUser.profilePicture}
              username={sUser.username}
              profileLink={`/profile/${sUser.username}`}
            />
            <div className="buttons">
              <FollowButton
                text="follow"
                onClick={() => handleFollow(sUser._id)}
              />
              <CloseRoundedIcon className="btn--close" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default FollowSuggestions;
