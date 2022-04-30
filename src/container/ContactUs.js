import React, { useState } from "react";

const ContactUs = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };
  //connect with firebase

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;
    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://reactfirebase-235d4-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("please fill the form");
      }
    } else {
      alert("please fill the form");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-4">
                  <h3 className="main-heading fw-bold">
                    Contact with Our <br /> Sale Team
                  </h3>
                  <p className="main-hero-para">
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada
                  </p>
                  <figure>
                    <img
                      src="./images/call center.jpg"
                      alt="contactus"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* Right side Contact Form */}

                <div className="contact-rightside col-12 col-lg-8">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="First Name"
                          name="firstName"
                          className="form-control"
                          value={userData.firstName}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          placeholder="Last Name"
                          name="lastName"
                          className="form-control"
                          value={userData.lastName}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="number"
                          placeholder="Phone Number"
                          name="phone"
                          className="form-control"
                          value={userData.phone}
                          onChange={postUserData}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="email"
                          placeholder="Email ID"
                          name="email"
                          className="form-control"
                          value={userData.email}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          placeholder="Add Address"
                          name="address"
                          className="form-control contact-input-field"
                          value={userData.address}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          placeholder="Add Massage"
                          name="message"
                          className="form-control"
                          value={userData.message}
                          onChange={postUserData}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label
                        class="form-check-label"
                        className="main-hero-para"
                      >
                        {" "}
                        i agree that the online payee may contact me at the
                        email address or phone number above
                      </label>
                      <button
                        className="btn btn-style mt-3"
                        type="submit"
                        onClick={submitData}
                      >
                        {" "}
                        submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
