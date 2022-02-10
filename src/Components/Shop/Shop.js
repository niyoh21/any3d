import React, { useEffect, useState } from "react";

const Shop = () => {
  const pic = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg";
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchItems = async () => {
    console.log("fetch item");
    setLoading(true);
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=11");
      const data = await res.json();
      setItems(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const displayItems = () => {
    console.log(items);
    return items.map((x) => (
      <div className="h-[30rem] w-72 flex flex-col hover:bg-gray-200 hover:border-2 hover:bg-opacity-75 hover:border-gray-200 transition-all ease-linear duration-100">
        <div className={`h-[18rem] object-contain `}>
          <img className=" w-full h-full " src={x.image} />
        </div>
        <div className=" h-[13rem] text-center pt-10">
          <p>{x.title}</p>
          <p>${x.price}</p>
        </div>
      </div>
    ));
  };

  const displayLoading = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          style={{ borderTopColor: "transparent" }}
          className="w-40 h-40 border-4 border-blue-400 border-solid rounded-full animate-spin"
        ></div>
      </div>
    );
  };
  useEffect(() => fetchItems(), []);
  return (
    <React.Fragment>
      {loading ? (
        displayLoading()
      ) : (
        <div className="grid  gap-5 px-20 pt-20 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  ">
          {displayItems()}
        </div>
      )}
    </React.Fragment>
  );
};

export default Shop;
