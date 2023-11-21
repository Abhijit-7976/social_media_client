import "./follow-button.scss";

const FollowButton = ({ text, onClick }) => {
  return (
    <button
      className="btn--follow"
      onClick={onClick}>
      {text}
    </button>
  );
};

export default FollowButton;
