import moment from "moment";
import Marquee from "./Slider";
import Navbar from "../Shared/Navbar";

const Heading = () => {
  const now = moment();
  const formattedDate = now.format("MMMM Do YYYY");
  return (
    <>
      {" "}
      <div className="text-center w-[90%] mx-auto">
        <h1 className="heading">The Casio news</h1>
        <p className="text-center text-slate-500 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur,
          earum.
        </p>
        <p className="mt-4">{formattedDate}</p>
        <Marquee></Marquee>
      </div>{" "}
      <Navbar></Navbar>
    </>
  );
};

export default Heading;
