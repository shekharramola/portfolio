import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Services from './components/services/services';
import Testimonial from './components/testimonial/testimonial';
import Work from './components/work/work';
import Clients from './components/clients/clients';
// import Contact from './components/contact/contact';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
        <About />
        {/* <Services /> */}
        { <Testimonial /> }
        <Work />
        {/* <Clients /> */}
        {/* <Contact /> */}
      </div>
    );
  }
}

export default App;
