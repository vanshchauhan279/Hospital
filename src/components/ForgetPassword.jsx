import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(email);
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="card bg-base-100  shadow-xl ">
        <div className="card-body">
          <h1 className="font-bold text-3xl ">Forget Password</h1>
          <p className="font-light mb-4">
            Enter your registered email id and create your new password , <br />{" "}
            mail should be correct
          </p>

          <div className="mt-2">
            <label htmlFor="email" className="font-1xl font-serif">
              Email address
            </label>
            <br />
            <input
              id="email"
              type="text"
              placeholder="Enter your email address"
              className="input input-bordered w-full max-w-xs mt-1"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
           <div className="mt-2">
              <label htmlFor="password" className="font-1xl font-serif">New Password</label>
              <br />
              <input
                id="password"
                type="password"
                placeholder="Create your new password"
                className="input input-bordered w-full max-w-xs mt-1"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

          <button
            className="btn mt-5  border-none w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 text-white transition-all duration-500 ease-in-out  hover:bg-gradient-to-r hover:from-purple-500 hover:via-yellow-500 hover:to-pink-500"
            // onClick={}
          >
            Login
          </button>
        </div>
        <p className="text-center items-center mt-10 pb-3">
          Don't have an account?
          <span
            className="text-pink-500 font-bold"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Sign-up Here
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default ForgetPassword;
