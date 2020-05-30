import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="about" className="about-section">
          <div className="container">
            <header className="text-center">
              <h2 data-animate="fadeInDown" className="title">
                About me
              </h2>
            </header>
            <div className="row">
              <div data-animate="fadeInUp" className="col-lg-6">
                {/* <p>
                  An sincerity so extremity he additions. Her yet{' '}
                  <strong>there truth merit</strong>. Mrs all projecting
                  favourable now unpleasing. Son law garden chatty temper. Oh
                  children provided to mr elegance marriage strongly. Off can
                  admiration prosperous now devonshire diminution law.
                </p> */}
                <p>
                  I am a Bengaluru based Front End developer with a focus on
                  writing clean, elegent and efficient code. I am skilled in UI
                  technologies and libraries like{' '}
                  <strong>AngularJS/ Angular, React, Jquery etc </strong>
                </p>
                <p>
                  I always use available tools to automate the process and
                  increase my productivity. My favourites one include
                  <strong> NPM, Gulp</strong> etc.
                </p>

                <p>
                  I have developed web applications for the past 3 years, and
                  have experience developing web application from scratch. I
                  have a strong background in javascript as well as Bachelor of
                  Technology in Computer Science and Engineering from GGSIPU,
                  Delhi.
                </p>
              </div>
              <div data-animate="fadeInUp" className="col-lg-6">
                <div className="skill-item">
                  <div className="progress-title">Angular</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={0}
                      aria-valuemin={88}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill1"
                    />
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-title">Javascript</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={89}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill2"
                    />
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-title">React.js</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill3"
                    />
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-title">Typescript</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '90%' }}
                      aria-valuenow={87}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill4"
                    />
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-title">Knockout.js</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '70%' }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill5"
                    />
                  </div>
                </div>
                <div className="skill-item">
                  <div className="progress-title">Nunjucks</div>
                  <div className="progress">
                    <div
                      role="progressbar"
                      style={{ width: '75%' }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="progress-bar progress-bar-skill5"
                    />
                  </div>
                </div>
              </div>
              <div data-animate="fadeInUp" className="col-sm-6 mx-auto mt-5">
                <img
                  src="img/about.jpg"
                  alt="This is me - IT worker"
                  className="image rounded-circle img-fluid"
                />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
