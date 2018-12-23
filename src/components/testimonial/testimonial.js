import React, { Component } from 'react';
export default class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="testimonials" className="testimonials-section bg-gray">
          <div className="container">
            <header className="text-center mb-2">
              <h2 data-animate="fadeInUp" className="title">
                My customers said
                <br />
                <span>about me</span>
              </h2>
              <p data-animate="fadeInUp" className="lead">
                I am always glad to hear that my customers leave satisfied. Some
                of them shared with you their insights on our cooperation.
              </p>
            </header>
            <ul
              data-animate="fadeInUp"
              className="owl-carousel owl-theme testimonials equalize-height"
            >
              <li className="item">
                <div className="testimonial full-height">
                  <div className="text">
                    <p>
                      I’ve used Shekhar’s services on many occasions for logo
                      editing. I require exemplary results and I have always
                      gotten just that. Not only the the takes to time to ask
                      questions, follow-up, and make sure everything is just how
                      I would like them. I’ve worked with him extensively on
                      creating different versions of images and he’s always
                      quick to respond, courteous, and makes sure everything is
                      just how I want them. I would recommend using his
                      services. I will certainly be using him should the need
                      arise again, too. His communication and professionalism
                      are impressive. He gets the job done right at highly
                      competitive rates.
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="name-picture">
                      <img alt src="img/person-1.jpg" />
                      <h5>Ellen Mcbride</h5>
                      <p>GM, ABHouse</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="testimonial full-height">
                  <div className="text">
                    <p>
                      I was looking for the fornt end developer who can do that
                      work but everyone starts but after some time they say that
                      they don't have time for this project. Then I meet
                      Shekhar. He completed the time within timeframe. I am
                      happy with his efforts.
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="name-picture">
                      <img alt src="img/person-2.jpg" />
                      <h5>Aseem Rastogi</h5>
                      <p>CEO, CloudOptics</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="testimonial full-height">
                  <div className="text">
                    <p>
                      His room, a proper human room although a little too small,
                      lay peacefully between its four familiar walls. A
                      collection of textile samples lay spread out on the table
                      - Samsa was a travelling salesman - and above it there
                      hung a picture that he had recently cut out of an
                      illustrated magazine and housed in a nice, gilded frame.
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="name-picture">
                      <img alt src="img/person-3.jpg" />
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="testimonial full-height">
                  <div className="text">
                    <p>
                      It showed a lady fitted out with a fur hat and fur boa who
                      sat upright, raising a heavy fur muff that covered the
                      whole of her lower arm towards the viewer. Gregor then
                      turned to look out the window at the dull weather. Drops
                      of rain could be heard hitting the pane, which made him
                      feel quite sad.
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="name-picture">
                      <img alt src="img/person-4.jpg" />
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="item">
                <div className="testimonial full-height">
                  <div className="text">
                    <p>
                      It showed a lady fitted out with a fur hat and fur boa who
                      sat upright, raising a heavy fur muff that covered the
                      whole of her lower arm towards the viewer. Gregor then
                      turned to look out the window at the dull weather. Drops
                      of rain could be heard hitting the pane, which made him
                      feel quite sad. Gregor then turned to look out the window
                      at the dull weather. Drops of rain could be heard hitting
                      the pane, which made him feel quite sad.
                    </p>
                  </div>
                  <div className="bottom">
                    <div className="icon">
                      <i className="fa fa-quote-left" />
                    </div>
                    <div className="name-picture">
                      <img alt src="img/person-4.jpg" />
                      <h5>John McIntyre</h5>
                      <p>CEO, TransTech</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
