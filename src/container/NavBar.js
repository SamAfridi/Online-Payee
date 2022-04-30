import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              Online Payee
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/">
                    <a class="nav-link active" aria-current="page">
                      Home
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/service">
                    <a class="nav-link active" aria-current="page">
                      Service
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about">
                    <a class="nav-link active" aria-current="page">
                      About
                    </a>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact">
                    <a class="nav-link active" aria-current="page">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <button class="btn  btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn  btn-style btn-style-border" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default NavBar;
