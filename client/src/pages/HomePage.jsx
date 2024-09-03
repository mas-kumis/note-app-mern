import Jumbotron from "../components/Jumbotron";
import MainLayout from "../components/MainLayout";
import RecentBlog from "../components/RecentBlog";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Jumbotron />
        <RecentBlog />
      </MainLayout>
    </div>
  );
};

export default HomePage;
