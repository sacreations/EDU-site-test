import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content container">
        <div className="hero-text">
          <h1 className="hero-title">We Ensure Better Education for a Better World</h1>
          <p className="hero-description">
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experience needed to excel in the dynamic field
            of education
          </p>
          <a href="#program" className="btn hero-btn">
            Explore more
            <img src={dark_arrow} alt="" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
