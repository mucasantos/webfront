import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import  FoodCard  from "./components/FoodCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FoodCard />
  </React.StrictMode>
);
