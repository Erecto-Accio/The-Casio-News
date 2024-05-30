import PropTypes from "prop-types";
const NewsCardDetails = ({ news }) => {
  const { title, details, image_url } = news;
  return (
    <div className="card-body   outline-slate-0 shadow-sm rounded-tl-md rounded-tr-md">
      <img src={image_url} alt="" />
      <h1>{title}</h1>
      <p>{details}</p>
    </div>
  );
};

export default NewsCardDetails;
NewsCardDetails.propTypes = {
  news: PropTypes.object,
};
