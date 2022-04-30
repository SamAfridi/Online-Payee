import React, { useState } from "react";
import aboutApi from "./AboutApi";
const AboutUs = () => {
  const [aboutData, setAboutData] = useState(aboutApi);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services=leftside-img">
              <img src="./images/laptop.jpeg" alt="left-side-img" />
            </div>

            <div className="col-12 col-lg-5 our-services-list mt-5">
              <h3 className="mini-title">
                ---Available @ google and ios app store only
              </h3>
              <h2 className="main-heading">How To Use The App ?</h2>
              {aboutData.map((item) => {
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{item.id}</div>
                      <div className="col-10 our-services-data">
                        <h4>{item.title}</h4>
                        <p className="main-hero-para">{item.detail}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

           {/* 2nd part */}

           <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            

            <div className="col-12 col-lg-5 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
                ---SUPPORT IN ANY LANGUAGES
              </h3>
              <h2 className="main-heading">World Class Support is <br />Available 24/7</h2>
              {aboutData.map((item) => {
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{item.id}</div>
                      <div className="col-10 our-services-data">
                        <h4>{item.title}</h4>
                        <p className="main-hero-para">{item.detail}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            <div className="col-12 col-lg-5 text-center our-services=leftside-img">
              <img src="./images/callcenter.jpg" alt="left-side-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
