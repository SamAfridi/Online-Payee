import React, { useState } from "react";
import workapi from "./WorkApi";
const HowitWork = () => {
  const [workData, setWorkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How It Work</h1>
          <div className="row">
            {workData.map((item) => {
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fontawesome-style ${item.logo}`}> </i>
                    <h2 className="sub-heading">{item.title}</h2>
                    <p className="main-hero-para w-100">{item.detail}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowitWork;
