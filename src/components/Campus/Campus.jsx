import React from "react";
import "./Campus.css";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  const galleryImages = [
    { src: gallery_1, alt: "campus-gallery-1" },
    { src: gallery_2, alt: "campus-gallery-2" },
    { src: gallery_3, alt: "campus-gallery-3" },
    { src: gallery_4, alt: "campus-gallery-4" },
  ];

  return (
    <div className="campus">
      <div className="gallery">
        {galleryImages.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} />
        ))}
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="white_arrow" />
      </button>
    </div>
  );
};

export default Campus;
