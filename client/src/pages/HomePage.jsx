import Jumbotron from "../components/Jumbotron";
import MainLayout from "../components/MainLayout";
import RecentBlog from "../components/RecentBlog";

const HomePage = () => {
  return (
    <div>
      <MainLayout>
        <Jumbotron />
        <RecentBlog />
        <h1> Hello World </h1>
      </MainLayout>
    </div>
  );
};

export default HomePage;
