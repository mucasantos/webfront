import React from "react";
import { FaStar } from "react-icons/fa";

import food from "../food.json";

function FoodCard() {
  return (
    <div className="container">
      {food.map((item) => (
        <div key={item.id} class="card">
          <div class="card__image">
            <img src={item.image} alt="Salad" />
          </div>
          <div class="card__info">
            <div class="car__info--title">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div class="card__info--price">
              <p>{item.p}</p>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodCard;
