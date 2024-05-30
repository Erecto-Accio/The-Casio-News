import { Outlet, useLocation } from "react-router-dom";
import Heading from "../Hero/Heading";

const Root = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/" && <Heading></Heading>}
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
