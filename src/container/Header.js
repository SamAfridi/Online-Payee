import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center
             flex-column align-items-start order-lg-first order-last">
              <h1 className="display-6">
                {" "}
                Online Payment Made <br /> Easy For You
              </h1>
              <p className="main-hero-para">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo
              </p>
              <h3>Get Early Access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 w-lg-75 me-3 p-2 from-control-text" placeholder="Enter your Email"
                />
                <div className="input-group-button">Get it know</div>
              </div>
            </div>
            {/* .......................Main header right side/image secetion................ */}

            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center 
            align-items-center main-herosection-images order-md-first order-sm-first">
              <img src="./images/image1.jpg" alt="img1" className="img-fluid" />
              <img src="./images/image2.jpg" alt="img2" className="img-fluid main-hero-img2" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
