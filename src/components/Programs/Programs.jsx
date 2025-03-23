import React from "react";
import "../Programs/Programs.css";
// Import program images and icons
import Program_1 from "../../assets/program-1.png";
import Program_2 from "../../assets/program-2.png";
import Program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  const programsData = [
    {
      image: Program_1,
      icon: program_icon_1,
      title: "Undergraduate Programs",
      alt: "undergraduate-program",
      description: "Bachelor degrees in various disciplines for high school graduates."
    },
    {
      image: Program_2,
      icon: program_icon_2,
      title: "Graduate Programs",
      alt: "graduate-program",
      description: "Advanced study programs leading to master's degrees for college graduates."
    },
    {
      image: Program_3,
      icon: program_icon_3,
      title: "Doctoral Programs",
      alt: "doctoral-program",
      description: "Research-focused doctorate degrees for advanced academic pursuits."
    },
  ];

  // Add a fallback function for images
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300/212EA0/FFFFFF?text=Program";
    e.target.onerror = null;
  };

  return (
    <div className="programs-container">
      {programsData.map((program, index) => (
        <article className="program" key={index}>
          <figure className="program-figure">
            <img 
              src={program.image} 
              alt={program.alt} 
              onError={handleImageError}
              className="program-image"
            />
            <figcaption className="caption">
              <img 
                src={program.icon} 
                alt="" 
                aria-hidden="true"
                onError={handleImageError} 
                className="program-icon"
              />
              <h3 className="program-title">{program.title}</h3>
              <p className="program-description sr-only">{program.description}</p>
            </figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
};
export default Programs;
