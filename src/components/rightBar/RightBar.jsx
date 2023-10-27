import FollowSuggestions from "./FollowSuggestions";
import LatestActivity from "./LatestActivity";
import OnlineFriends from "./OnlineFriends";
import "./right-bar.scss";

const RightBar = () => {
  return (
    <div className="right-bar">
      <div className="container">
        <FollowSuggestions />
        <LatestActivity />
        <OnlineFriends />
      </div>
    </div>
  );
};

export default RightBar;
