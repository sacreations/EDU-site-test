import React, { useRef, useState, useEffect } from "react";
import "../Testimonials/Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  const [position, setPosition] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const testimonialCount = 4;
  
  const testimonialData = [
    {
      image: user_1,
      name: "Emily Williams",
      location: "Edusity, USA",
      testimonial:
        "Choosing to pursue my Degree at Edusity was one of the best decisions I've ever made. The Supportive Community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.",
    },
    {
      image: user_2,
      name: "William Jackson",
      location: "Edusity, USA",
      testimonial:
        "The professors at Edusity are truly exceptional. They bring real-world experience to the classroom and are always available to provide guidance and support. I've gained not just knowledge, but valuable industry connections.",
    },
    {
      image: user_3,
      name: "Sarah Thompson",
      location: "Edusity, USA",
      testimonial:
        "The global perspective I've gained at Edusity has been invaluable. Through exchange programs and diverse classmates, I've developed a deep understanding of international education systems and cultural approaches to learning.",
    },
    {
      image: user_4,
      name: "Michael Chen",
      location: "Edusity, USA",
      testimonial:
        "The research opportunities at Edusity have prepared me for a successful career in academia. Working alongside renowned faculty members on cutting-edge projects has been the highlight of my educational experience.",
    },
  ];

  const slideForward = () => {
    if (position > -(testimonialCount - 1)) {
      const newPosition = position - 1;
      setPosition(newPosition);
      slider.current.style.transform = `translate(${newPosition * 25}%)`;
    }
  };

  const slideBackward = () => {
    if (position < 0) {
      const newPosition = position + 1;
      setPosition(newPosition);
      slider.current.style.transform = `translate(${newPosition * 25}%)`;
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        slideBackward();
      } else if (e.key === 'ArrowRight') {
        slideForward();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [position]);

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    // Swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        slideForward();
      } else {
        slideBackward();
      }
      setTouchStart(null);
    }
  };

  return (
    <div 
      className="testimonials-section" 
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className="testimonial-controls">
        <button 
          className="slider-btn back-btn" 
          onClick={slideBackward}
          aria-label="Previous testimonial"
          disabled={position >= 0}
        >
          <img src={back_icon} alt="" aria-hidden="true" />
        </button>
        
        <button 
          className="slider-btn next-btn" 
          onClick={slideForward}
          aria-label="Next testimonial"
          disabled={position <= -(testimonialCount - 1)}
        >
          <img src={next_icon} alt="" aria-hidden="true" />
        </button>
      </div>
      
      <div 
        className="slider" 
        aria-live="polite" 
        aria-roledescription="carousel"
        aria-label="Student testimonials"
      >
        <ul ref={slider} className="testimonial-list">
          {testimonialData.map((item, index) => (
            <li 
              key={index} 
              className="testimonial-item"
              aria-hidden={position !== -index}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${testimonialCount}`}
            >
              <blockquote className="slide">
                <div className="user-info">
                  <img src={item.image} alt="" aria-hidden="true" />
                  <div className="user-details">
                    <cite className="user-name">{item.name}</cite>
                    <span className="user-location">{item.location}</span>
                  </div>
                </div>
                <p className="testimonial-text">"{item.testimonial}"</p>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="testimonial-indicators" role="tablist" aria-label="Select a testimonial">
        {testimonialData.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${position === -index ? 'active' : ''}`}
            onClick={() => {
              setPosition(-index);
              slider.current.style.transform = `translate(${-index * 25}%)`;
            }}
            aria-label={`Show testimonial ${index + 1}`}
            aria-selected={position === -index}
            role="tab"
          />
        ))}
      </div>
    </div>
  );
};
export default Testimonials;
