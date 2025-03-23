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
    <article className="about" id="about">
      <div className="about-left">
        <img src={about_img} alt="University campus aerial view" className="about-img" />
        <button 
          className="play-button" 
          onClick={toggleVideo} 
          aria-label="Play video about our university"
        >
          <img src={play_icon} alt="" aria-hidden="true" className="play-icon" />
        </button>
      </div>
      
      <div className="about-right">
        <header className="about-header">
          <h3 className="about-subtitle">About University</h3>
          <h2 className="about-title">Nurturing Tomorrow's Leaders Today</h2>
        </header>
        
        <div className="about-description">
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
      
      {showVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-title">
          <div className="modal-content">
            <header className="modal-header sr-only">
              <h2 id="video-title">University Introduction Video</h2>
            </header>
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
    </article>
  );
};

export default About;
