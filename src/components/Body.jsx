import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const Body = () => {
  return (
    <div className="flex min-h-screen md:flex-row flex-col-reverse">
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <Home />
      </div>
      <div className="md:w-1/2 md:bg-slate-200 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
