import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full">
      <h1 className="text-center mt-10 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
        Services Offered
      </h1>
      <div className="flex flex-col mt-10 mx-20 pb-20 ">
        <div
          className="bg-slate-100 h-[32rem] mb-6 pt-2 pb-2 pr-2 flex flex-row justify-center
         items-center shadow-2xl hover:rounded-3xl hover:bg-slate-600
          hover:text-white transition-all duration-400 ease-linear group"
          onClick={() => navigate("/printing")}
        >
          <div className=" h-[30rem] w-2/5 flex flex-col justify-center px-2 sm:px-10">
            <div>
              <p className="xl:text-7xl 2xl:text-8xl xs:text-xl md:text-4xl  ">
                3D Printing
              </p>
            </div>
            <div>
              <p className=" sm:text-xs md:text-base xl:text-lg 2xl:text-xl ">
                *magpaprint na kayo
              </p>
            </div>
          </div>
          <div className=" h-[30rem] w-3/5 flex-1 bg-3D-Print-Image-1  group-hover:bg-3D-Print-Animated-1 bg-no-repeat bg-cover rounded-3xl">
            {/* <img src={Image1} className="object-none h-96 w-96"></img> */}
          </div>
        </div>
        <div className="flex flex-row h-96">
          <div
            className="bg-3D-Print-Image-2 hover:scale-[105%]
            bg-no-repeat bg-cover px-20 flex flex-1 justify-center
             transition-all duration-400 ease-linear group
             items-center mr-3 hover:mr-20 shadow-2xl hover:rounded-3xl"
            onClick={() => navigate("/design")}
          >
            <p className="xl:text-6xl 2xl:text-7xl xs:text-xl md:text-4xl text-white text-center ">
              3D Design & Modeling
            </p>
          </div>
          <div
            className="bg-Shop-Logo-2 hover:scale-[105%]
            bg-no-repeat bg-cover px-20 flex flex-1 justify-center
             transition-all duration-400 ease-linear group
             items-center mr-3 shadow-2xl hover:rounded-3xl hover:ml-20"
            onClick={() => navigate("/shop")}
          >
            <p className="xl:text-7xl 2xl:text-8xl xs:text-2xl md:text-5xl text-white text-center ">
              Shop
            </p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
