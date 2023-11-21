import { useEffect, useState } from "react";
import axios from "../../config/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../loading/Loading";
import NewPost from "../newPost/NewPost";
import Post from "../post/Post";
import "./posts.scss";

const Posts = ({ userId }) => {
  const [posts, setPosts] = useState(null);
  const { curUser } = useAuth();

  useEffect(() => {
    async function fetchTimeline() {
      const res = userId
        ? await axios.get(`/posts/profile/${userId}`)
        : await axios.get(`/posts/timeline/${curUser._id}`);
      setPosts(res.data);
    }
    fetchTimeline();
  }, [userId, curUser._id]);

  if (!posts) return <Loading />;

  return (
    <div className="posts">
      <NewPost />
      {posts.map(post => (
        <Post
          post={post}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default Posts;
