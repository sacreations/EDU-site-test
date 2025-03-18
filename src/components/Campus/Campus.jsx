import React from "react";
import "./Campus.css";
import gallery_1 from "/Users/thiniranilushan/Documents/Git-Hub/EDU-Site/react-edu-app/src/assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery-1" />
        <img src={gallery_2} alt="gallery-2" />
        <img src={gallery_3} alt="gallery-3" />
        <img src={gallery_4} alt="gallery-4" />
      </div>
      <button className="btn dark-btn">
        See more here
        <img src={white_arrow} alt="white_arrow" />
      </button>
    </div>
  );
};

export default Campus;
