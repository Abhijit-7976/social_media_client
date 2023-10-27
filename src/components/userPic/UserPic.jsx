import "./user-pic.scss";

const UserPic = ({ pic, onClick }) => {
  return (
    <>
      <img
        className="user__pic"
        src={pic || "/assets/no-avatar.png"}
        alt="user photo"
        onClick={onClick}
      />
    </>
  );
};

export default UserPic;
