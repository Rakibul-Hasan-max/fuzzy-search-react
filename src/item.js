import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <div className="logo">
        <img src={props.logo} alt={props.name} />
      </div>
      <div className="name">
        <p>{props.name}</p>
        <div className="details">{props.details}</div>
      </div>
    </div>
  );
};

export default Item;
