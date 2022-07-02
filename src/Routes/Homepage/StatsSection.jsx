import React, { useEffect, useState } from "react";
import InputField from "../../Components/InputField";
import Statistic from "../../Components/Statistic";

import { statsArr } from "../../stats";
import { getShortLink } from "../../requests";
import LinksList from "./LinksList";

const LINK_REGEX =
  /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;

const StatsSection = () => {
  const [link, setLink] = useState(String);
  const [validLink, setValidLink] = useState(LINK_REGEX.test(link));
  const [linksList, setLinksList] = useState([]);

  useEffect(() => {
    setValidLink(LINK_REGEX.test(link));
  }, [link]);

  const handleClick = async () => {
    if (!validLink) return;
    const result = await getShortLink(link);
    addShortLink({ link, result });
    setLink("");
  };

  const addShortLink = (newShortLinkData) => {
    setLinksList((prevList) => [...prevList, newShortLinkData]);
  };

  useEffect(() => {
    console.log(linksList);
  }, [linksList]);

  return (
    <div className="stats">
      <div className="container df fd-c ai-c jc-sb">
        <InputField
          link={link}
          validLink={validLink}
          handleClick={handleClick}
          setLink={setLink}
        />
        <LinksList linksList={linksList} />
        <section className="text df ai-c jc-c fd-c">
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        <div className="articles">
          {statsArr.map((stat, ind) => {
            return (
              <Statistic
                key={ind}
                heading={stat.head}
                image={stat.image}
                text={stat.p}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
