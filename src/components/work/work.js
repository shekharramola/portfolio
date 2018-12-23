import React, { Component } from 'react';
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
                  I have worked on dozens of projects so I have picked only the
                  latest for you.
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
                              Yeild
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
                    data-category="other"
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
                            <h3 className="h4 reference-title">FOD</h3>
                            <p>Finnable Operation Dashboard</p>
                          </div>
                        </div>
                      </a>
                      <div
                        data-images="img/main-slider6.jpg"
                        className="sr-only reference-description"
                      >
                        <p>
                          Finnable operation dashboard is a web application to
                          check and verify the different set of details of the
                          user to avail the loan.
                        </p>

                        <p className="buttons text-center">
                          <a
                            href="http://finnable-operation-dashboard-dev.s3-website-us-east-1.amazonaws.com/?email=shekharramola@hummingwave.com&auth-token=u$rbf6a5764aadf7868bb86c4ed822AAAAu$rbf6a5764aadf7c4ec8e23d822"
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
