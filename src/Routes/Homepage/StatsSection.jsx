import React, { useState } from "react";
import InputField from "../../Components/InputField";
import Statistic from "../../Components/Statistic";

import { statsArr } from "../../stats";
const StatsSection = () => {
  const [shortList, setShortList] = useState([]);

  return (
    <div className="stats">
      <div className="container df fd-c ai-c jc-sb">
        <InputField />

        <section className="text">
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
