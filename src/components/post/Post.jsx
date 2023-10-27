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
  const [user, setUser] = useState({});
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes.length);

  useEffect(() => {
    async function fetchUser() {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/users?id=${post.userId}`
      );
      setUser(res.data);
    }
    fetchUser();
  }, [post.userId]);

  const handleLike = async () => {
    await axios.patch(
      `${import.meta.env.VITE_API_URL}/posts/${post._id}/like`,
      { userId: curUser.id }
    );

    setLiked(l => !l);
    setLikesCount(like => {
      return liked ? like - 1 : like + 1;
    });
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
          <MoreHorizIcon />
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
            12 Comments
          </div>
          <div className="post__btn">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
};

export default Post;
