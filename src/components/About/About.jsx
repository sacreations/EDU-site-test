import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on transformative educational journey with our university's
          comprehensive educational programs. our cutting-edge curriculum
          designed to empower students with the knowledge , skills , and
          expriences needed to excel in the dynamic fields of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools and communities.
        </p>
        <p>
          Whethe you aspire become a teacher, administrator, counselor, or
          educational leader, our divers range of programs offers the perfect
          pathway to achieve your goals and unlock your full potentional in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
