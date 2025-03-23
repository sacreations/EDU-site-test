import React from "react";
import "./Campus.css";
// Fix the gallery-1 import to use relative path like the others
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  // Create array of gallery images with their imports
  const galleryImages = [
    { src: gallery_1, alt: "Modern university lecture hall" },
    { src: gallery_2, alt: "Student collaboration space" },
    { src: gallery_3, alt: "Campus sports facilities" },
    { src: gallery_4, alt: "University library" }
  ];

  return (
    <div className="campus" id="campus">
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x300/212EA0/FFFFFF?text=Campus+Image";
              }}
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
