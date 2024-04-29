import React from "react";
import Bg from "../assest/bg.jpg";
import circle from "../assest/circle.png";
import earth from "../assest/earth.json";
import Lottie from "lottie-react";
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={Bg}
        alt="bg"
        style={{ height: "555px" }}
        className="w-full sticky"
      />

      {/*new*/}
      <div className="mt-7 flex flex-col md:flex-row">
        <div className="mr-0 md:mr-10 mb-7 md:mb-0">
          <div
            style={{
              width: "100%", // Adjusted to full width on small screens
              maxWidth: "490px", // Added to limit width on larger screens
              height: "200px",
              backgroundColor: "#fafafa",
            }}
            className="p-4"
          >
            <div className="">
              <div className="text-3xl font-bold mb-3 md:mb-0 md:mr-4">
                Our Vision
              </div>
              <div className="text-xs md:mt-3 from-neutral-400 ">
                <h5>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima eveniet repudiandae rem delectus dolores illo nam in
                  non repellat obcaecati quae tempora cum, adipisci ducimus,
                  nemo quis aliquid. Cumque, nobis.
                </h5>
              </div>
              <div className="mt-16 border-4 border-green-400"></div>
            </div>
          </div>
        </div>
        {/*new*/}
        {/*new2*/}
        <div className="mr-0 md:mr-10">
          <div
            style={{
              width: "100%", // Adjusted to full width on small screens
              maxWidth: "490px", // Added to limit width on larger screens
              height: "200px",
              backgroundColor: "#fafafa",
            }}
            className="p-4"
          >
            <div className="">
              <div className="text-3xl font-bold mb-3 md:mb-0 md:mr-4">
                Our Misisson
              </div>
              <div className="text-xs md:mt-3 from-neutral-400">
                <h5>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Minima eveniet repudiandae rem delectus dolores illo nam in
                  non repellat obcaecati quae tempora cum, adipisci ducimus,
                  nemo quis aliquid. Cumque, nobis.
                </h5>
              </div>
              <div className="mt-16 border-4 border-amber-400"></div>
            </div>
          </div>
        </div>
        {/*new2*/}
      </div>
      {/*1 */}
      <div className="max-w-6xl mx-auto bg-red-100 rounded-3xl shadow-md overflow-hidden md:max-w-6xl lg:max-w-7xl mt-24 p-8">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Lottie
              animationData={earth}
              loop={true}
              className="h-64 w-full object-cover md:h-auto md:w-64"
            />
            ;
          </div>

          <div className="md:ml-8 mt-4 md:mt-0">
            <div className="uppercase tracking-wide text-4xl text-black font-extrabold mt-2">
              Disha Foundation
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
      <div>sca</div>
    </div>
  );
};

export default Home;
