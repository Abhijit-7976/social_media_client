import User from "../user/User";

const LatestActivity = () => {
  return (
    <div className="item">
      <span>Latest Activities</span>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/no-avatar.png"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
    </div>
  );
};

export default LatestActivity;
