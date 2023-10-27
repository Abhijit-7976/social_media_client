import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuth } from "../../contexts/AuthContext";
import User from "../user/User";
import "./stories.scss";

const stories = [
  {
    id: 2,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 5,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 6,
    name: "John Doe",
    profilePic:
      "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const Stories = () => {
  const { curUser } = useAuth();

  return (
    <div className="stories">
      <div
        className="story story--add"
        key={curUser.id}>
        <img src={curUser.profilePicture || "/assets/no-cover.jpeg"} />
        <AddCircleIcon className="btn-add" />
        <User
          className="story__user"
          profilePic={curUser.profilePicture}
          username={curUser.username}
        />
      </div>
      {stories.map(story => (
        <div
          className="story"
          key={story.id}>
          <img src={story.img} />
          <User
            className="story__user"
            profilePic={story.profilePic}
            username={story.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Stories;
