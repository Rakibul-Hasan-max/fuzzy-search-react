import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <div className="logo">
        <img src={props.logo} alt={props.name} />
      </div>
      <div className="name">
        <h3>{props.name}</h3>
        <div className="details">{props.details}</div>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Item;
