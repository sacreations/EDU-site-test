import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div className="container">
        <div id="program">
          <Title subtitle="our program" title="what we offer" />
          <Programs />
        </div>
        <About />
        <div id="campus">
          <Title subtitle="Gallery" title="Campus Photos" />
          <Campus />
        </div>
        <div id="testimonials">
          <Title subtitle="TESTIMONIALS" title="what student says" />
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default App;
