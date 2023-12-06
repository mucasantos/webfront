import React from "react";
//destruction

function Card({urlName, description}) {
  return (
    <div className="card">
      <img
        src= {urlName}
        alt=""
      />
      <p>
       {description}
      </p>
    </div>
  );
}

export default Card;
