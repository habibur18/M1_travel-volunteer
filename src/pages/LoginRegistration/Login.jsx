import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { googleSin } = useContext(AuthContext);
  const hadleGoogleSignin = (e) => {
    e.preventDefault();
    googleSin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div>
        <img
          className="w-72 md:w-96 mx-auto py-10"
          src="https://i.ibb.co/WpvqjnY/Group-1329.png"
          alt=""
        />
      </div>
      <div className="bg-[#fff] flex flex-col justify-center w-2/3 mx-auto text-center min-h-[500px] rounded-lg">
        <h1 className="text-3xl font-semibold">Login With</h1>
        <div className="text-2xl flex justify-center">
          <div
            onClick={hadleGoogleSignin}
            className="flex items-center border-2 p-3 text-2xl text-center my-5 rounded-lg w-2/3 cursor-pointer"
          >
            <span>
              <i className="fa-brands fa-google text-blue-600"></i>
            </span>
            <span className="w-full">Continue with Google</span>
          </div>
        </div>
        <p>
          Don't have an account?{" "}
          <Link className="underline text-blue-700" to="/create">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
