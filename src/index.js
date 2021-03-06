import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CostEstimation from "./Components/CostEstimation/CostEstimation";
import ContactUs from "./Components/ContactUs/ContactUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Printing from "./Components/Printing/Printing";
import DesignAndModeling from "./Components/DesignAndModeling/DesignAndModeling";
import Shop from "./Components/Shop/Shop";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="printing" element={<Printing />} />
        <Route path="design" element={<DesignAndModeling />} />
        <Route path="shop" element={<Shop />} />
      </Route>
      <Route path="*" element={<App />} />
      <Route path="cost-estimation" element={<CostEstimation />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
