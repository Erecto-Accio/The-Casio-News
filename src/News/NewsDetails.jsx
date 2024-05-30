import { useEffect, useState } from "react";
import Heading from "../Hero/Heading";
import RightNav from "./RightNav";
import NewsCardDetails from "./NewsCardDetails";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const [news, setNews] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((n) => n._id === id);
        setNews(item);
      });
  }, [id]);

  if (!news) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-[90%] mx-auto">
      <Heading></Heading>

      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2>Casio News</h2>

          <NewsCardDetails news={news} />
        </div>

        <RightNav></RightNav>
      </div>
    </div>
  );
};

export default NewsDetails;
