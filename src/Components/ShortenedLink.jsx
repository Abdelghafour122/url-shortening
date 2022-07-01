import React, { useState } from "react";

const ShortenedLink = ({ shortLink, originalLink }) => {
  const [copied, setCopied] = useState(false);
  const copyLink = () => {
    navigator.clipboard.writeText(shortLink);
    setCopied((prevC) => !prevC);
  };
  return (
    <div className="shortened df ai-c jc-c">
      <p> {originalLink} </p>
      <div className="right">
        <a href={shortLink} target="_blank" rel="noreferrer">
          {shortLink}
        </a>
        <button className={`squared ${copied && "copied"}`} onClick={copyLink}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ShortenedLink;
