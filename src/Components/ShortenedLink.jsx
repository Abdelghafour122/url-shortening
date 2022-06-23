import React from "react";

const ShortenedLink = ({ link }) => {
  return (
    <div className="shortened">
      <p> {link} </p>
      <div className="right">
        <p>{/* THE SHORTENED LINK HERE */}</p>
        <button className="squared">
          {/* MAKE A STATE TO SWITCH BETWEEN COPY AND COPIED */}
        </button>
      </div>
    </div>
  );
};

export default ShortenedLink;
