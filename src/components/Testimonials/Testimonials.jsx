import React, { useRef, useState } from "react";
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

  return (
    <div className="testimonials">
      <img 
        src={next_icon} 
        alt="Next testimonial" 
        className="next-btn" 
        onClick={slideForward} 
      />
      <img
        src={back_icon}
        alt="Previous testimonial"
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {testimonialData.map((item, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={item.image} alt={`user-${index+1}`} />
                  <div>
                    <h3>{item.name}</h3>
                    <span>{item.location}</span>
                  </div>
                </div>
                <p>{item.testimonial}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
