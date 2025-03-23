import React, { useState } from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="University campus" className="about-img" />
        <button 
          className="play-button" 
          onClick={toggleVideo} 
          aria-label="Play video about our university"
        >
          <img src={play_icon} alt="" className="play-icon" />
        </button>
        
        {showVideo && (
          <div className="video-modal">
            <div className="modal-content">
              <button 
                className="close-modal" 
                onClick={toggleVideo}
                aria-label="Close video"
              >
                &times;
              </button>
              <div className="video-container">
                {/* Replace with your actual video embed */}
                <div className="video-placeholder">
                  <p>Video would play here</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive educational programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic fields of education.
        </p>
        <p>
          With a focus on innovation, hands-on learning, and personalized
          mentorship, our programs prepare aspiring educators to make a
          meaningful impact in classrooms, schools and communities.
        </p>
        <p>
          Whether you aspire to become a teacher, administrator, counselor, or
          educational leader, our diverse range of programs offers the perfect
          pathway to achieve your goals and unlock your full potential in
          shaping the future of education.
        </p>
      </div>
    </div>
  );
};

export default About;
