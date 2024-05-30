import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import Navbar from "../Shared/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const name = formData.get("name");
    const photo = formData.get("photo");
    const password = formData.get("password");

    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      {" "}
      <Navbar></Navbar>
      <div className="flex items-center justify-center min-h-[90vh]">
        <div className="w-full max-w-md  shadow-lg rounded-lg">
          <div className="px-8 py-6">
            <h1 className="text-2xl font-semibold text-center mb-4">
              Registration your account
            </h1>
            <hr className="border-t  my-4" />
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-3 py-2 border rounded-md text-sm input input-bordered"
                  required
                  name="name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-3 py-2 border rounded-md text-sm input input-bordered"
                  required
                  name="email"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  placeholder="Your Photo URL"
                  className="w-full px-3 py-2 border rounded-md text-sm input input-bordered"
                  required
                  name="photo"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 "
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 border rounded-md text-sm input input-bordered"
                  required
                  name="password"
                />
              </div>
              <div className="mb-6">
                <button className="w-full btn btn-primary text-white font-bold py-2 px-4 rounded-md">
                  Register
                </button>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary hover:underline">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
