import React from "react";
import "./Campus.css";
import white_arrow from "../../assets/white-arrow.png";

// The issue is with the gallery-1.png import path
// Instead, let's reference images that should be in the public folder
const Campus = () => {
  // Create array of gallery items without importing them directly
  const galleryItems = [
    { id: 1, alt: "Modern university lecture hall" },
    { id: 2, alt: "Student collaboration space" },
    { id: 3, alt: "Campus sports facilities" },
    { id: 4, alt: "University library" }
  ];

  return (
    <div className="campus" id="campus">
      <div className="gallery">
        {galleryItems.map((item) => (
          <div className="gallery-item" key={item.id}>
            {/* Use public path-based URLs instead of imports */}
            <img 
              src={`https://placehold.co/600x400/212EA0/FFFFFF?text=Campus+${item.id}`}
              alt={item.alt}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="Arrow icon" />
      </button>
    </div>
  );
};

export default Campus;
