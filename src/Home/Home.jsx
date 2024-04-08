
import Header from "../Navbar/Header/Header";
import Navbar from "../Navbar/Navbar";
import LeftSite from "./Layout/LeftSite";
import RightSite from "./Layout/RightSite";
import Markquee from "./Layout/Markquee/Markquee";
import NewsCard from "./NewsCard";
import Hooks from "../Hooks/Hooks";

const Home = () => {
  const {data, loading}=Hooks();
  return (
    <div>
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
      <div>
      <Markquee></Markquee>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div>
          <LeftSite></LeftSite>
        </div>
        <div className="col-span-2">
          {
            data.map(data=>(<NewsCard data={data}>
            </NewsCard>))
          }
        </div>
        <div>
          <RightSite></RightSite>
        </div>
      </div>
    </div>
  );
};

export default Home;
