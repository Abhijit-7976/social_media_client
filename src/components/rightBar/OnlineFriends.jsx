import User from "../user/User";

const OnlineFriends = () => {
  return (
    <div className="item">
      <span>Online Friends</span>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
      <div className="user">
        <User
          profilePic="/assets/person/1.jpeg"
          username="Jane Doe">
          <span className="online"></span>
        </User>
      </div>
    </div>
  );
};

export default OnlineFriends;
