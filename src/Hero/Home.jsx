import { useLoaderData } from "react-router-dom";
import MainContent from "../News/MainContent";

const Home = () => {
  const loader = useLoaderData();
  return (
    <div className="w-[90%] mx-auto">
      <MainContent news={loader}></MainContent>
    </div>
  );
};

export default Home;
