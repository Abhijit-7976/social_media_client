import AttachFileIcon from "@mui/icons-material/AttachFile";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import { CircularProgress } from "@mui/material";
import Axios from "axios";
import { useRef, useState } from "react";
import axios from "../../config/axiosInstance";
import { useAuth } from "../../contexts/AuthContext";
import UserPic from "../userPic/UserPic";
import "./newPost.scss";

const NewPost = () => {
  const { curUser } = useAuth();
  const [formOpen, setFormOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState("");
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const postText = useRef();

  const handleDiscard = () => {
    setFormOpen(false);
  };

  const handleFileSelect = async e => {
    const file = e.target.files[0];
    const previewUrl = URL.createObjectURL(file);
    setFile(file);
    setFileUrl(previewUrl);
  };

  const handleFileDiscard = () => {
    setFileUrl("");
    setFile(null);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(file ? "present" : "not");
    const newPost = {
      userId: curUser._id,
      content: postText.current.value,
    };

    try {
      setIsLoading(true);
      // const res = await axios.post("/files/upload", formData);
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ShiniSphere");
        const res = await Axios.post(
          "https://api.cloudinary.com/v1_1/ddpj0uolz/image/upload",
          formData
        );
        console.log(res.data);
        newPost.img = res.data.secure_url;
      }
      // newPost.img = res.data.imageUrl;
      const result = await axios.post("/posts", newPost);
      console.log(result);
      setFileUrl("");
      setFile(null);
      setIsLoading(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new-post">
      <div className="head">
        <div className="user">
          <UserPic pic={curUser.profilePicture} />
          <span>{`Hey ${curUser.username}, Unleash Your Thoughts: Share Your Mind with the World!`}</span>
        </div>
        {!formOpen && (
          <button
            onClick={() => {
              setFormOpen(true);
            }}>
            Create New Post
          </button>
        )}
      </div>
      {formOpen && (
        <div className="post-form">
          <form onSubmit={handleSubmit}>
            <textarea
              name="postText"
              rows="10"
              ref={postText}
            />
            {fileUrl && (
              <div className="img-selected">
                <img
                  src={fileUrl}
                  alt="post img"
                />
                <ClearIcon onClick={handleFileDiscard} />
              </div>
            )}
            <div className="menue">
              <button
                type="submit"
                className="btn-post">
                {isLoading ? (
                  <CircularProgress
                    color="inherit"
                    size="15px"
                  />
                ) : (
                  "Post"
                )}
              </button>
              <input
                type="file"
                id="file"
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
              <label htmlFor="file">
                <AttachFileIcon />
              </label>
              <DeleteIcon onClick={handleDiscard} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default NewPost;
