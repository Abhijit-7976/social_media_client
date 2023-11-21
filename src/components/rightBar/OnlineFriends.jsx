import User from "../user/User";

const OnlineFriends = () => {
  return (
    <div className="item">
      <span>Online Friends</span>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
    </div>
  );
};

export default OnlineFriends;
