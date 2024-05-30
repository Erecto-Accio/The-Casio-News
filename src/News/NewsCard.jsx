import { CiBookmark } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FaEye, FaStar } from "react-icons/fa";
const NewsCard = ({ news }) => {
  const { author, title, total_view, image_url, details, rating, _id } = news;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  return (
    <div
      className=" mt-4 border-gray-400 outline-slate-500 shadow-sm rounded-tl-md rounded-tr-md"
      style={{ border: "1px solid #ccc" }}
    >
      <div className=" p-5 flex items-center justify-between bg-base-200">
        <div className="flex items-center gap-2">
          <img
            src={author.img}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <p>
            {author.name} <br /> {formatDate(author.published_date)}
          </p>
        </div>

        <div className="icon-share-save flex items-center gap-2">
          <CiBookmark className="text-xl" />
          <CiShare2 className="text-xl" />
        </div>
      </div>

      <h3 className="text-2xl font-bold mt-2 px-8">{title}</h3>
      <div className="card-body">
        <img
          className="card-img-top w-full"
          src={image_url}
          alt=""
        />
        {details.length > 200 ? (
          <p className="mt-[32px] text-[#706F6F] text-[16px]">
            {details.slice(0, 300)}{" "}
            <Link to={`/news/${_id}`} className="read-more">
              {" "}
              Read more..
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <hr className=" border-0 h-[1px]  bg-[#ccc] mt-2 mb-2" />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <FaStar className="text-yellow-400 text-xl" />
            <p className="px-2">{rating.number}</p>
          </div>

          <div className="flex items-center gap-2">
            <FaEye />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  news: PropTypes.object,
};
