import Posts from "../../components/posts/Posts";
import Stories from "../../components/stories/Stories";
import "./home.scss";

const Home = () => {
  return (
    <main className="home">
      <Stories />
      <Posts />
    </main>
  );
};

export default Home;
