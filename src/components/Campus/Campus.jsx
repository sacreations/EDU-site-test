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
    { src: gallery_1, alt: "Modern university lecture hall", title: "Lecture Hall" },
    { src: gallery_2, alt: "Student collaboration space", title: "Collaboration Hub" },
    { src: gallery_3, alt: "Campus sports facilities", title: "Sports Complex" },
    { src: gallery_4, alt: "University library", title: "Main Library" }
  ];

  return (
    <div className="campus" id="campus">
      <div className="gallery" aria-label="Campus photo gallery">
        {galleryImages.map((image, index) => (
          <figure className="gallery-item" key={index}>
            <img 
              src={image.src} 
              alt={image.alt}
              className="gallery-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x300/212EA0/FFFFFF?text=Campus+Image";
              }}
            />
            <figcaption className="gallery-caption">{image.title}</figcaption>
          </figure>
        ))}
      </div>
      <a href="#gallery" className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="" aria-hidden="true" />
      </a>
    </div>
  );
};

export default Campus;
