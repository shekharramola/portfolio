import React, { Component } from 'react';
export default class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <section
          id="intro"
          style={{
            background: 'url(img/cover-img.jpg) center center no-repeat',
            backgroundSize: 'cover'
          }}
          className="intro-section pb-2"
        >
           <div className="container text-center">
            <div data-animate="fadeInDown" className="logo">
              {/* <img src="img/logo-big.png" alt="logo" width={130} /> */}
              Hello, hola, नमस्ते !
              <br/>
              I am Shekhar Ramola.<br/> I design and build User Interfaces.
            
            </div>
{/* 
            <h1 data-animate="fadeInDown" className="text-shadow mb-5">
              Hello, hola, नमस्ते !
            </h1>
            <p data-animate="slideInUp" className="h3 text-shadow text-400">
              I am Shekhar Ramola. I design and build User Interfaces.
            </p> */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
