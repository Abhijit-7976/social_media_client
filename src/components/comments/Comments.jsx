import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import UserPic from "../userPic/UserPic";
import "./comments.scss";

import moment from "moment";
import Loading from "../loading/Loading";

const Comments = ({ postId, setCommentsCount }) => {
  const { curUser } = useAuth();
  const [comments, setComments] = useState(null);
  const newComment = useRef();

  useEffect(() => {
    async function fetchComments() {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/comments/all/${postId}`
      );
      setComments(res.data);
    }
    fetchComments();
  }, [postId]);

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/comments`, {
      userId: curUser._id,
      content: newComment.current.value,
      postId: postId,
    });
    newComment.current.value = "";
    setComments(comments => [res.data, ...comments]);
    setCommentsCount(c => c + 1);
  };

  return (
    <div className="comments">
      <form
        className="write"
        onSubmit={handleSubmit}>
        <UserPic pic={curUser.profilePic} />
        <input
          type="text"
          placeholder="write a comment"
          ref={newComment}
        />
        <button>
          <SendIcon />
        </button>
      </form>
      {!comments ? (
        <Loading />
      ) : (
        comments.map(comment => (
          <div
            className="comment"
            key={comment._id}>
            <UserPic pic={comment.profilePic} />
            <div className="comment__info">
              <span>{comment.name}</span>
              <p>{comment.content}</p>
            </div>
            <span className="date">{moment(comment.createdAt).fromNow()}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default Comments;
