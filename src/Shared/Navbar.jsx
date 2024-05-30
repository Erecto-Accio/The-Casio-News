import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const navLinks = (
  <>
    <li>
      <Link>
        <NavLink to="/">Home</NavLink>
      </Link>
    </li>
    <li>
      <Link>
        <NavLink to="/about">About</NavLink>
      </Link>
    </li>
    <li>
      <Link>
        <NavLink to="/career">Career</NavLink>
      </Link>
    </li>
    <li>
      <Link>
        <NavLink to="/contact-us">Contact us</NavLink>
      </Link>
    </li>
  </>
);

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="navbar bg-base-100 w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div className="w-10 mx-2">
          {user ? (
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              className="rounded-full"
            />
          ) : (
            <img src={user?.photoURL} />
          )}
        </div>
        {user ? (
          <Link onClick={handleLogOut} className="btn btn-primary text-white">
            Sign out
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary text-white">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
