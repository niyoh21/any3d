import React from "react";
import Header from "./Header";
const Base = (props) => {
  return (
    <div className="h-screen">
      <Header />
      {/* <Login /> */}
      {props.children}
    </div>
  );
};

export default Base;
