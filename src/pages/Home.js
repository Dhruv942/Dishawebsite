import React from "react";
import Bg from "../assest/bg.jpg";
import circle from "../assest/circle.png";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={Bg}
        alt="bg"
        style={{ height: "555px" }}
        className="w-full sticky"
      />

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-md overflow-hidden md:max-w-6xl lg:max-w-7xl mt-24 p-8">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img
              className="h-64 w-full object-cover md:h-auto md:w-64"
              src={circle}
              alt="Modern building architecture"
            />
          </div>

          <div className="md:ml-8 mt-4 md:mt-0">
            <div className="uppercase tracking-wide text-4xl text-black font-extrabold mt-2">
              DishaFoundation
            </div>

            <p className=" text-black mt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas
              possimus omnis velit totam voluptates officia, debitis sequi Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Esse maxime
              fuga nostrum tempore possimus, quas ipsa sequi quam. Quidem,
              earum! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quos maiores earum eveniet sunt sit, distinctio ipsum itaque,
              porro laborum ipsa natus voluptates? Odit, laborum quos.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center mt-12">
        {" "}
        {/* Added flex-wrap and justify-center */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          {/* Added margin */}
          <a href="#">
            <img className="rounded-t-lg" src={Bg} alt="" />
          </a>
          <div className="p-5 text-xl ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Vision
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
          {" "}
          {/* Added margin */}
          <a href="#">
            <img className="rounded-t-lg" src={Bg} alt="" />
          </a>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Mission
            </h5>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={Bg} alt="" />
          </a>
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Our Goal
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
