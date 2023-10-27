import { Link } from "react-router-dom";
import "./user.scss";
import UserPic from "../userPic/UserPic";

const User = ({
  profilePic,
  username,
  children,
  desc,
  profileLink,
  className,
  onClick,
}) => {
  return (
    <div className={`${className || ""} user__info`}>
      {children}
      <UserPic
        pic={profilePic}
        onClick={onClick}
      />
      <p>
        <Link
          className="username"
          to={profileLink}>
          <span>{username}</span>
        </Link>
        <span className="desc">{desc}</span>
      </p>
    </div>
  );
};

export default User;
