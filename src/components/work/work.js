import React, { Component } from "react";
export default class Work extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="references">
          <div className="container">
            <div className="col-sm-12">
              <div className="mb-5 text-center">
                <h2 data-animate="fadeInUp" className="title">
                  My work
                </h2>
                <p data-animate="fadeInUp" className="lead">
                  {/* I have worked on dozens of projects so I have picked only the
                  latest for you. */}
                </p>
              </div>
              <ul id="filter" data-animate="fadeInUp">
                <li className="active">
                  <a href="#" data-filter="all">
                    All
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="webdesign">
                    Angular
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="seo">
                    React
                  </a>
                </li>
                <li>
                  <a href="#" data-filter="marketing">
                    Node.js
                  </a>
                </li>
                {/* <li>
                  <a href="#" data-filter="other">
                    Other
                  </a>
                </li> */}
              </ul>
              <div id="detail">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <span className="close">×</span>
                    <div
                      id="detail-slider"
                      className="owl-carousel owl-theme"
                    />
                    <div className="text-center">
                      <h1 id="detail-title" className="title" />
                    </div>
                    <div id="detail-content" />
                  </div>
                </div>
              </div>
              {/* Reference detail*/}
              <div id="references-masonry" data-animate="fadeInUp">
                <div className="row">
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-1.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">SElogicIq</h3>
                            <p>
                              Real-Time Analytics to Maximise the Solar Plant
                              Yield
                            </p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider1.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Solar plant performance monitoring Insights on
                          scheduling of O&M. Smart demand management tool. Tool
                          to measure net electricity, generated less used
                          Real-time performance ratio & solar yield calculation
                          Active monitoring for faults which are impossible to
                          detect.
                        </p>
                        {/* <p>
                          Sitting mistake towards his few country ask. You
                          delighted two rapturous six depending objection
                          happiness something the. Off nay impossible dispatched
                          partiality unaffected. Norland adapted put ham
                          cordial. Ladies talked may shy basket narrow see. Him
                          she distrusts questions sportsmen. Tolerably pretended
                          neglected on my earnestly by. Sex scale sir style
                          truth ought.
                        </p> */}
                        <p className="buttons text-center">
                          <a
                            href="https://energylogiciq.com/"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-2.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">MovieAPP</h3>
                            <p>Top movies with other information</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider2.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Movie app is an application which includes upcoming
                          and recent movies with reviews, ratings and cast along
                          with other bollywood/hollywood news links.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://shekharramola.github.io/media-app/"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-3.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">NLRS</h3>
                            <p>Nira Loan Registration System</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider3.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Nira Loan Registraation system is the web application
                          to let the user apply for loan. the system take user
                          information and on the basis of the information, it
                          give the credit line.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="http://apply-dev.nirafinance.com/"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-4.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">MLS</h3>
                            <p>Myntra Logistics System</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider4.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Mnytra Logistics system is the system which let the
                          user return the item in case they don't like within
                          their given day and time out of available slots.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://myntralogistics.com/"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-5.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">EMIDSHB</h3>
                            <p>EMIDS Healthcare Blockchain</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider5.jpg"
                        className="sr-only reference-description"
                      >
                        <p>It is a centralized system for patient, doctor.</p>

                        <p className="buttons text-center">
                          <a
                            href="http://emids-blockchain-project-usecase1.s3-website-us-east-1.amazonaws.com/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-6.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">FO</h3>
                            <p>Finnable Operation</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider6.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Finnable operation is a complete web application to
                          complete the steps from initiating to disbursing and
                          finally closing the loan.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="http://finnable-operations-login-dev.s3-website-us-east-1.amazonaws.com/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a href="" className="btn btn-outline-primary">
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-11.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Sk</h3>
                            <p>SmartKarrot</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/smart-slide.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is a incentive system to automate the incentive
                          process of the employees.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://platform.smartkarrot.com/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a href="" className="btn btn-outline-primary">
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="webdesign"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/backofficeforex.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">MWA</h3>
                            <p>MWA Forex Backoffice</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/backofficeforexslide.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is an operational application for the payment
                          system.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://platform.smartkarrot.com/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a href="" className="btn btn-outline-primary">
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-7.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Portfolio</h3>
                            <p>My Portfolio</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider7.jpg"
                        className="sr-only reference-description"
                      >
                        <p>My Portfolio which is built on react.js. </p>

                        <p className="buttons text-center">
                          <a
                            href="https://shekharramola.github.io/portfolio/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/infinite-loader-cover.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              React Infinite Data Loader
                            </h3>
                            <p>
                            React infinite loader using button or scroll
                            </p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/infinite-loader.png"
                        className="sr-only reference-description"
                      >
                        <p>                              It is a npm package to load infinite amount of data which support both button or scroll </p>

                        <p className="buttons text-center">
                          <a
                            href="https://codesandbox.io/s/infinitdataloader-demo-637gr/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/redditlogin.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              Reddit Web Client
                            </h3>
                            <p>
                              It is a replica of reddit web app with enhanced
                              design
                            </p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/redditdashbord.png"
                        className="sr-only reference-description"
                      >
                        <p>Social Netowrking platform. </p>

                        <p className="buttons text-center">
                          <a
                            href="https://shekharramola.github.io/reddit-web-client/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/burger.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              Burger Builder
                            </h3>
                            <p>E-commerce web app</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/burgerbuilderorder.png"
                        className="sr-only reference-description"
                      >
                        <p>It is a fun platform to order burger. </p>

                        <p className="buttons text-center">
                          <a
                            href="https://shekharramola.github.io/burger-builder/"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-10.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">MWA Forex</h3>
                            <p>
                              Payment system for customer to send and receive
                              bitcoins.
                            </p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/portfolio-10.png"
                        className="sr-only reference-description"
                      >
                        <p>It is a payment system to tranfer the money. </p>

                        <p className="buttons text-center">
                          <a
                            href="http://www.customerforex.com.s3-website-ap-southeast-1.amazonaws.com"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/winds.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              WINDS
                            </h3>
                            <p>E-commerce platform for shopping.</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/winds_cover.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is an E-commerce platform for shopping, and paying
                          bill with a chance to win exciting rewards.{" "}
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="http://app.windseworld.com"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/after.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              Wheel of fortune
                            </h3>
                            <p>It's a game based on luck</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/before.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is a fully reusable, configurable component library built on react.{" "}
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://github.com/shekharramola/react-wheel-of-prizes"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/range.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              Input range slider
                            </h3>
                            <p>It's a slider based on input range</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/range_cover.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is a fully reusable, configurable component library module programmed to take user minimum, maximum and step etc properties.{" "}
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://github.com/shekharramola/react-input-range-slider"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="seo"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/dynamic_form.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">
                              Interactive dynamic form generator
                            </h3>
                            <p>It's a reusable component library module</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/dynamic_form_cover.png"
                        className="sr-only reference-description"
                      >
                        <p>
                          It is a fully reusable, configurable component library module programmed to designed form with full validation.{" "}
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://github.com/shekharramola/react-interactive-dynamic-form-generator"
                            className="btn btn-outline-primary"
                            target="_blank"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    data-category="marketing"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-8.jpg"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">meanAuthApp</h3>
                            <p>MEAN Authentication application</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider8.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          A simple authentication application built on mean
                          stack.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://limitless-refuge-80381.herokuapp.com/register"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    data-category="marketing"
                    className="reference-item col-lg-3 col-md-6"
                  >
                    <div className="reference">
                      <a href="#">
                        <img
                          src="img/portfolio-9.png"
                          alt="port"
                          className="img-fluid"
                        />
                        <div className="overlay">
                          <div className="inner">
                            <h3 className="h4 reference-title">Steelmint</h3>
                            <p>A node.js web application</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider9.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          It tells the current price of steel product around the
                          world and also predict the value.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="https://www.steelmint.com/"
                            target="_blank"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-globe" /> Visit website
                          </a>
                          {/* <a
                            href="javascript:void(0);"
                            className="btn btn-outline-primary"
                          >
                            <i className="fa fa-download" /> Download case study
                          </a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
