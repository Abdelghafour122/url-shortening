import React from "react";

const ShortenedLink = ({ shortLink, originalLink }) => {
  return (
    <div className="shortened">
      <p> {originalLink} </p>
      <div className="right">
        <a href={shortLink} target="_blank" rel="noreferrer">
          {shortLink}
        </a>
        <button className="squared">
          {/* MAKE A STATE TO SWITCH BETWEEN COPY AND COPIED */}
          Copy
        </button>
      </div>
    </div>
  );
};

export default ShortenedLink;
