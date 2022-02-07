import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Base from "./Components/UI/Base";

function App() {
  return (
    <Base>
      <Outlet />
    </Base>
  );
}

export default App;
