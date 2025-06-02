import React from "react";
import image2Doctor from "../assets/image2Doctor.jpg";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="">
        <div className="ml-10">
          <h2 className="text-4xl font-bold">
            The{" "}
            <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
              Professional
            </span>{" "}
            Network <br /> for Better Clinical <br />
            Outcomes
          </h2>
          <h4 className="from-neutral-600 mt-5 mb-5 font-serif">
            Upload patient cases. Gain diverse perspectives. Make more <br />{" "}
            confident decisions—together.
          </h4>
        </div>
        <img src={image2Doctor} alt="doctor" className="mt-8 md:mb-5 mr-5 rounded-lg" />
      </div>
    </div>
  );
};

export default Home;
