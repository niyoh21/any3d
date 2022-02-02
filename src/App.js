import logo from "./logo.svg";
import Header from "./Components/UI/Header";
import Login from "./Components/Auth/Login";
import React from "react";
import Image1 from "./../src/Images/3d-print-img-1.jpg";

function App() {
  return (
    <div className="h-screen">
      <Header />
      {/* <Login /> */}
      <h1 className="text-center mt-10 text-8xl">Services Offered</h1>
      <div className="flex flex-col mt-10 mx-20 h-screen ">
        <div className="bg-slate-100 h-[32rem] mb-6 pt-2 pb-2 pr-2 flex flex-row justify-center items-center shadow-2xl hover:rounded-3xl hover:bg-slate-600 hover:text-white transition-all duration-400 ease-linear">
          <div className=" h-[30rem] w-2/5 flex flex-col justify-center px-2 sm:px-10">
            <div>
              <p className="xl:text-7xl 2xl:text-9xl xs:text-xl md:text-4xl  ">
                3D Printing
              </p>
            </div>
            <div>
              <p className=" sm:text-xs md:text-base xl:text-lg 2xl:text-xl ">
                *magpaprint na kayo
              </p>
            </div>
          </div>
          <div className=" h-[30rem] w-3/5 flex-1 bg-[url('./../src/Images/image2.jpg')] bg-no-repeat bg-cover rounded-3xl">
            {/* <img src={Image1} className="object-none h-96 w-96"></img> */}
          </div>
        </div>
        <div className="flex flex-row h-96">
          <div className="bg-green-600 flex-1 mr-3 rounded-3xl"></div>
          <div className="bg-blue-600 flex-1 ml-3 rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
