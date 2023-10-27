import SendIcon from "@mui/icons-material/Send";
import { useAuth } from "../../contexts/AuthContext";
import UserPic from "../userPic/UserPic";
import "./comments.scss";

const Comments = () => {
  const { curUser } = useAuth();
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];

  return (
    <div className="comments">
      <form className="write">
        <UserPic pic={curUser.profilePic} />
        <input
          type="text"
          placeholder="write a comment"
        />
        <button>
          <SendIcon />
        </button>
      </form>
      {comments.map(comment => (
        <div
          className="comment"
          key={comment.id}>
          <UserPic pic={comment.profilePic} />
          <div className="comment__info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">22 hours ago </span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
