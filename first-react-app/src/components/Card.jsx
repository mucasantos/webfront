import React from "react";
import "../components/Card.css";
import { FaRegHeart, FaRegComment, FaFlagUsa } from "react-icons/fa";
import { food } from "../data/food";

function Card(props) {
  return (
    <div className="icons wrap">
      {food.map((item) => {
        return (
          <>
            <div className="card">
              <img src={item.image} alt="" />
              <h3>{item.title}</h3>
              <h4>Samuel Santos cooker</h4>
              <div className="icons">
                <FaRegComment />
                <FaRegHeart />
                <FaFlagUsa />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Card;
