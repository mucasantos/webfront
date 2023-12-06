import React from "react";

function FoodCard() {
  return (
    <div className="foodCard">
      <img
        className="rounded"
        src="https://www.picanhacia.com.br/wp-content/uploads/2017/01/Frango-com-bacon-510x600.jpg"
        alt=""
      />
      <div>
        <h5>Dish 1</h5>
        <h5>R$26.99</h5>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          reprehenderit repellendus accusamus fugit atque consectetur porro
          minima praesentium deleniti quis expedita fuga quia repellat, autem
          cupiditate eos, saepe odit totam.
        </p>
        <div>
            <h5>Icon</h5>
            <h5>250g</h5>
            <h5>Icon</h5>
            <h5>5mins</h5>
            <h5>Icon</h5>
            <h5>Dairy Free</h5>                       
        </div>
        <button>Order Now</button>
      </div>
    </div>
  );
}

export default FoodCard;
