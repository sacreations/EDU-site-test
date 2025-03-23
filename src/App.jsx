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
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home" className="hero-section">
          <Hero />
        </section>
        
        <section id="program" className="section-padding">
          <div className="container">
            <Title subtitle="our program" title="what we offer" />
            <Programs />
          </div>
        </section>
        
        <section id="about" className="section-padding">
          <div className="container">
            <About />
          </div>
        </section>
        
        <section id="campus" className="section-padding">
          <div className="container">
            <Title subtitle="Gallery" title="Campus Photos" />
            <Campus />
          </div>
        </section>
        
        <section id="testimonials" className="section-padding">
          <div className="container">
            <Title subtitle="TESTIMONIALS" title="what student says" />
            <Testimonials />
          </div>
        </section>
      </main>
      
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Edusity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
