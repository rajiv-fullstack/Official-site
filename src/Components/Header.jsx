import React from "react";
import "../assets/css/style.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import Logo from "../assets/img/netsparked.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div classNameName="Main-menu">
        {/* <!-- ======= Header ======= --> */}
        <header id="header" className="header">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={Logo} alt="" />
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a className="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="nav-link scrollto" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a className="getstarted scrollto" href="#about">
                    Get Started
                  </a>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
