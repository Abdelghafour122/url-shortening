import React from "react";
import ShortenedLink from "../../Components/ShortenedLink";

const LinksList = ({ linksList }) => {
  return (
    <div className="links-list df ai-c jc-c">
      {linksList.map((link, ind) => {
        return (
          <ShortenedLink
            key={ind}
            shortLink={link.result}
            originalLink={link.link}
          />
        );
      })}
    </div>
  );
};

export default LinksList;
