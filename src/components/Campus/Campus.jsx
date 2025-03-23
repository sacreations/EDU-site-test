import React from "react";
import "./Campus.css";
// Just import white arrow, which seems to work
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  // Define gallery items with external placeholder URLs instead of imports
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
            {/* Use external placeholder images instead of local imports */}
            <img 
              src={`https://via.placeholder.com/400x300/212EA0/FFFFFF?text=Campus+${item.id}`}
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
