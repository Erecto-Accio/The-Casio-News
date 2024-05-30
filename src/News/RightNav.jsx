import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

import qzone1 from "../assets/qZone1.png";
import qzone2 from "../assets/qZone2.png";
import qzone3 from "../assets/qZone3.png";

const RightNav = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-4">Login With</h1>

      <div className="pt-2 mb-2">
        <button className="btn btn-outline w-full hover:text-white flex items-center justify-center space-x-2">
          <FcGoogle /> <span>Login with Google</span>
        </button>

        <button className="btn btn-outline btn-primary w-full mt-2 flex items-center justify-center space-x-2">
          <FaGithub /> <span>Login with Github</span>
        </button>
      </div>

      <h2 className="mt-4 font-bold text-xl mb-4">Find us on</h2>

      <div>
        <button
          className="btn btn-outline w-full mb-3 flex items-center justify-center space-x-2  hover:outline-none hover:border-none"
          style={{ backgroundColor: "#3b5998", color: "white" }}
        >
          <FaFacebook /> <span>Facebook</span>
        </button>
        <button
          className=" btn btn-outline hover:outline-none hover:border-none w-full mb-3 flex items-center justify-center space-x-2"
          style={{
            backgroundImage: "linear-gradient(45deg, #833ab4, #fcb045)",
            color: "white",
          }}
        >
          <FaInstagram /> <span>Instagram</span>
        </button>
        <button
          className="btn btn-outline w-full mb-3 flex items-center justify-center space-x-2  hover:outline-none hover:border-none"
          style={{ backgroundColor: "#bd081c", color: "white" }}
        >
          <FaPinterest /> <span>Pinterest</span>
        </button>
      </div>

      <div className="qzone p-3 font-bold space-y-3 mb-6 bg-base-200 rounded-md ">
        <h2 className="text-3xl">Q-zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>

      <div className="left-last-topic text-center text-white p-4">
        <h4 className="text-4xl font-bold mt-[65px]">
          Create an Amazing Newspaper
        </h4>
        <p className="mt-[30px]" style={{ lineHeight: "26px" }}>
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="mt-[45px] p-4" style={{ background: "#D72050" }}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightNav;
