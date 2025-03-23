import React from "react";
import "./Campus.css";
// Import images directly from public directory
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  // Use require syntax for the problematic images
  const galleryImages = [
    { id: 1, alt: "Modern university lecture hall" },
    { id: 2, alt: "Student collaboration space" },
    { id: 3, alt: "Campus sports facilities" },
    { id: 4, alt: "University library" }
  ];

  return (
    <div className="campus" id="campus">
      <div className="gallery">
        {galleryImages.map((image) => (
          <img 
            key={image.id}
            src={`/assets/gallery-${image.id}.png`} 
            alt={image.alt}
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/300x200?text=Campus+Image";
              e.target.onerror = null;
            }}
          />
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
