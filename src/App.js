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
        <footer>
          <p>Copyright©2020 SHEKHAR RAMOLA | Cover-Image Photo by <a href="https://unsplash.com/@brandomakesbranding?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brando Makes Branding</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

</p>
</footer>
      </div>
    );
  }
}

export default App;
