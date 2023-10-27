import User from "../user/User";

const LatestActivity = () => {
  return (
    <div className="item">
      <span>Latest Activities</span>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe"
          desc="changed their cover picture"
        />
        <div className="time">
          <span>1 min ago</span>
        </div>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
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
