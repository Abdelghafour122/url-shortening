import React from "react";

const Statistic = ({ image, heading, text }) => {
  return (
    <article className="stat df fd-c ai-c jc-c">
      <div className="image df ai-c jc-c">
        <img src={image} alt={`${image}-icon`} />
      </div>
      <h4> {heading} </h4>
      <p> {text} </p>
    </article>
  );
};

export default Statistic;
