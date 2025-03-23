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
    },
    {
      image: Program_2,
      icon: program_icon_2,
      title: "Graduate Programs",
      alt: "graduate-program",
    },
    {
      image: Program_3,
      icon: program_icon_3,
      title: "Doctoral Programs",
      alt: "doctoral-program",
    },
  ];

  // Add a fallback function for images
  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/400x300/212EA0/FFFFFF?text=Program";
    e.target.onerror = null;
  };

  return (
    <div className="programs">
      {programsData.map((program, index) => (
        <div className="program" key={index}>
          <img 
            src={program.image} 
            alt={program.alt} 
            onError={handleImageError}
          />
          <div className="caption">
            <img 
              src={program.icon} 
              alt={`${program.alt}-icon`}
              onError={handleImageError} 
            />
            <p>{program.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Programs;
