import LeftNav from "./LeftNav";
import NewsCard from "./NewsCard";
import RightNav from "./RightNav";
import PropTypes from "prop-types";
const MainContent = ({ news }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mx-auto align-middle">
      <div>
        <LeftNav />
      </div>

      <div className="col-span-2">
        {news.map((aNews) => (
          <NewsCard key={aNews.id} news={aNews} />
        ))}
      </div>

      <div>
        <RightNav />
      </div>
    </div>
  );
};

MainContent.propTypes = {
  news: PropTypes.array,
};

export default MainContent;
