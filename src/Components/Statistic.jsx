import React from "react";

const Statistic = ({ image, heading, text }) => {
  return (
    <article className="stat">
      <img src={image} alt={`${image}-icon`} />
      <h4> {heading} </h4>
      <p> {text} </p>
    </article>
  );
};

export default Statistic;
