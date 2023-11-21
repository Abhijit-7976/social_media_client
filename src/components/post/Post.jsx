import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Comments from "../comments/Comments";
import User from "../user/User";
import "./post.scss";

const Post = ({ post }) => {
  const { curUser } = useAuth();
  const [commentOpen, setCommentOpen] = useState(false);
  const [menueOpen, setMenueOpen] = useState(false);
  const [user, setUser] = useState({});
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes.length);
  const [commentsCount, setCommentsCount] = useState(post.comments.length);

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?id=${post.userId}`
      );
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);

  useEffect(() => {
    setLiked(post.likes.includes(curUser._id));
  }, [curUser._id, post.likes]);

  const handleLike = async () => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_URL}/posts/${post._id}/like`,
      { userId: curUser._id }
    );
    if (res.data === "The post has been liked") {
      setLiked(true);
      setLikesCount(like => like + 1);
    } else {
      setLiked(false);
      setLikesCount(like => like - 1);
    }
  };

  const handleMenue = () => {
    if (post.userId == curUser._id) {
      setMenueOpen(o => !o);
    }
  };

  const handleDelete = async () => {
    console.log(curUser._id);
    await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${post._id}`, {
      data: { userId: curUser._id },
    });
    window.location.reload();
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <User
            className="post__user"
            profilePic={user.profilePicture}
            username={user.username}
            desc={moment(post.createdAt).fromNow()}
            profileLink={`/profile/${user.username}`}
          />
          <div>
            <MoreHorizIcon onClick={handleMenue} />
            {menueOpen && (
              <div className="post__menue">
                <DeleteOutlineOutlinedIcon onClick={handleDelete} />
              </div>
            )}
          </div>
        </div>
        <p className="content__text">{post.content}</p>
        {post.img && (
          <img
            className="content__img"
            src={post.img}
            alt=""
          />
        )}
        <div className="post__info">
          <div
            className="post__btn"
            onClick={handleLike}>
            {liked ? (
              <FavoriteOutlinedIcon style={{ fill: "#f44336" }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
            {likesCount} Likes
          </div>
          <div
            className="post__btn"
            onClick={() => setCommentOpen(open => !open)}>
            <TextsmsOutlinedIcon />
            {commentsCount} Comments
          </div>
          <div className="post__btn">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && (
          <Comments
            postId={post._id}
            commentsCount={commentsCount}
            setCommentsCount={setCommentsCount}
          />
        )}
      </div>
    </div>
  );
};

export default Post;
