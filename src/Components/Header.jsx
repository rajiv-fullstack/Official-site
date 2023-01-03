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
      <div className="Main-menu">
        {/* <!-- ======= Header ======= --> */}
        <header id="header" class="header">
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
            <a href="index.html" class="logo d-flex align-items-center">
              <img src={Logo} alt="" />
            </a>

            <nav id="navbar" class="navbar">
              <ul>
                <li>
                  <a class="nav-link scrollto active" href="#hero">
                    Home
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a class="nav-link scrollto" href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a class="getstarted scrollto" href="#about">
                    Get Started
                  </a>
                </li>
              </ul>
              <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
