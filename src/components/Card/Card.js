import React from "react";
import "./Card.css";

const Card = (props) => {
  const { id } = props;
  const { title } = props;
  const { description } = props;
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>:trash:</button>
    </div>
  );
};

export default Card;
