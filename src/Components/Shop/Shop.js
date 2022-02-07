import React from "react";

const Shop = () => {
  return (
    <div class="grid  gap-5 px-20 pt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  ">
      <div className="h-[30rem] w-72 flex flex-col">
        <div className="bg-Sample-Item bg-cover bg-no-repeat h-[17rem] text-center" />
        <div className="bg-pink-600 h-[13rem] text-center pt-10">
          <p>PRODUCT NAME WEWS</p>
          <p>$69.99</p>
        </div>
      </div>
      <div className="bg-green-500 h-[30rem] w-72">2</div>
      <div className="bg-pink-500 h-[30rem] w-72">3</div>
      <div className="bg-blue-500 h-[30rem] w-72">4</div>
      <div className="bg-violet-700 h-[30rem] w-72">5</div>
      <div className="bg-red-900 h-[30rem] w-72">6</div>
      <div className="bg-purple-400 h-[30rem] w-72">7</div>
      <div className="bg-amber-500 h-[30rem] w-72">8</div>
      <div className="bg-yellow-400 h-[30rem] w-72">9</div>
      <div className="bg-sky-500 h-[30rem] w-72">10</div>
    </div>
  );
};

export default Shop;
