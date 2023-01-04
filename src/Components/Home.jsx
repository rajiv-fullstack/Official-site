import React from "react";
import { Helmet } from "react-helmet";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../assets/img/about.jpg";
import Valueone from "../assets/img/values-1.png";
import Value from "../assets/img/values-2.png";
import ValueThree from "../assets/img/values-3.png";
import Features from "../assets/img/features-3.png";
import Portfolione from "../assets/img/portfolio/portfolio-1.jpg";
import Portfoliotwo from "../assets/img/portfolio/portfolio-2.jpg";
import Portfoliothree from "../assets/img/portfolio/portfolio-3.jpg";
import Portfoliofour from "../assets/img/portfolio/portfolio-4.jpg";
import Portfoliofive from "../assets/img/portfolio/portfolio-5.jpg";
import Portfoliosix from "../assets/img/portfolio/portfolio-6.jpg";
import Testimonialsone from "../assets/img/testimonials/testimonials-1.jpg";
import Testimonialstwo from "../assets/img/testimonials/testimonials-2.jpg";
import Testimonialsthree from "../assets/img/testimonials/testimonials-3.jpg";
import Testimonialsfour from "../assets/img/testimonials/testimonials-4.jpg";
import Testimonialsfive from "../assets/img/testimonials/testimonials-5.jpg";

import Footer from "../Components/Footer";
import { render } from "@testing-library/react";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="about">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>
                    Expedita voluptas omnis cupiditate totam eveniet nobis sint
                    iste. Dolores est repellat corrupti reprehenderit.
                  </h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed
                    deserunt et. Inventore et et dolor consequatur itaque ut
                    voluptate sed et. Magnam nam ipsum tenetur suscipit
                    voluptatum nam et est corrupti.
                  </p>
                  <div className="text-lg-start">
                    <a
                      href="#"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={About} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- ======= Services Section ======= --> */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>

            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="service-box blue">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="service-box orange">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6 pb-5"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="service-box green">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="service-box red">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="service-box purple">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>

              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="service-box pink">
                  <i className="ri-discuss-line icon"></i>
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Services Section --> */}
        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-emoji-smile"></i>
                  <div>
                    <span className="purecounter">235</span>
                    <p>Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <div>
                    <span className="purecounter">1600</span>
                    <p>Projects</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i
                    className="bi bi-headset"
                    style={{ color: "#15be56;" }}
                  ></i>
                  <div>
                    <span className="purecounter">1465</span>
                    <p>Hours Of Support</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people" style={{ color: "#bb0852;" }}></i>
                  <div>
                    <span className="purecounter">15</span>
                    <p>Hard Workers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section --> */}
        {/* <!-- Feature Icons --> */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <div className="row feature-icons" data-aos="fade-up">
              <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>

              <div className="row">
                <div
                  className="col-xl-4 text-center"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <img src={Features} className="img-fluid p-4" alt="" />
                </div>

                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line"></i>
                      <div>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="ri-stack-line"></i>
                      <div>
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="ri-brush-4-line"></i>
                      <div>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="ri-magic-line"></i>
                      <div>
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <i className="ri-command-line"></i>
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>
                          Et fuga et deserunt et enim. Dolorem architecto
                          ratione tensa raptor marte
                        </p>
                      </div>
                    </div>

                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <i className="ri-radar-line"></i>
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>
                          Est autem dicta beatae suscipit. Sint veritatis et sit
                          quasi ab aut inventore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Feature Icons --> */}
          </div>
        </section>
        {/* <!-- End Features Section --> */}
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className="portfolio">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Portfolio</h2>
              <p>Check our latest work</p>
            </header>

            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>

            <div
              className="row gy-4 portfolio-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfolione} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfolione}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={Portfoliotwo} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliotwo}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfoliothree} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliothree}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img src={Portfoliofour} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliofour}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img src={Portfoliofive} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliofive}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 2"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img src={Portfoliosix} className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href={Portfoliosix}
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="App 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 1"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Card 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfokio-lightbox"
                        title="Web 3"
                      >
                        <i className="bi bi-plus"></i>
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bi bi-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Portfolio Section --> */}
        {/* <!-- ======= Testimonials Section ======= --> */}
        <div className="testimonials-wrap">
          <div className="container">
            <div className="heading-section">
              <span className="sub-heading">Testimonials</span>
              <h2>Happy Clients & Feedbacks</h2>
            </div>
            <div className="carousel-testimonial owl-carousel">
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img">
                    <img src={Testimonialsone} />
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img">
                    <img src={Testimonialstwo} />
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img">
                    <img src={Testimonialsthree} />
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img">
                    <img src={Testimonialsfour} />
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Father</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img">
                    <img src={Testimonialsfive} />
                  </div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Rodel Golez</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Ken Bosh</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Racky Henderson</p>
                    <span className="position">Father</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Henry Dee</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-box d-flex">
                  <div className="user-img"></div>
                  <div className="text pl-4">
                    <span className="quote">
                      <i className="fa fa-quote-left"></i>
                    </span>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                    <p className="name">Mark Huff</p>
                    <span className="position">Businesswoman</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Home;
