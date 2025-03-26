import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import VideoPlayer from "./components/VideoPlayer/Videoplayer.jsx";

const App = () => {
  const [playstate, setplaystate] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="our program" title="what we offer" />
        <Programs />
        <About setplaystate={setplaystate} />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="TESTIMONIALS" title="what student says" />
        <Testimonials />
        <Title subtitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playstate={playstate} setplaystate={setplaystate} />
    </div>
  );
};

export default App;
