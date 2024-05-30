import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Navbar from "../Shared/Navbar";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const pass = formData.get("password");

    loginUser(email, pass)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-[90%]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="mx-auto">
                  <h1 className="text-2xl font-semibold w-full">
                    Login in your account
                  </h1>
                </div>
                <hr className=" border-0 h-[1px] bg-opacity-50 bg-[#ccc] mt-2 mb-2" />
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt text-accent font-medium link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-sm mt-2">
                  {"Don't have an account ? "}
                  <Link className="text-secondary" to="/register">
                    Create one
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
