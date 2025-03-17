import React from "react";
import "../../components/Title/Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <div className="title">
      <p key={subtitle}>{subtitle}</p>
      <h2 key={title}>{title}</h2>
    </div>
  );
};
export default Title;
