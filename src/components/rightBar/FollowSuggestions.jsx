import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import User from "../user/User";
import FollowButton from "../follow-button/FollowButton";

const FollowSuggestions = () => {
  return (
    <div className="item">
      <span>People You May Know</span>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe"
        />
        <div className="buttons">
          <FollowButton text="follow" />
          <CloseRoundedIcon className="btn--close" />
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe"
        />
        <div className="buttons">
          <FollowButton text="follow" />
          <CloseRoundedIcon className="btn--close" />
        </div>
      </div>
    </div>
  );
};

export default FollowSuggestions;
