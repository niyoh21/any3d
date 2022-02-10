import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
const Base = (props) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="h-screen">
      {location.pathname === "/printing" ? "" : <Header />}

      {/* <Login /> */}
      {props.children}
    </div>
  );
};

export default Base;
