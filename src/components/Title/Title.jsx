import React from "react";
import "../../components/Title/Title.css";

const Title = ({ subtitle, title }) => {
  return (
    <header className="title">
      <p className="title-subtitle">{subtitle}</p>
      <h2 className="title-heading">{title}</h2>
    </header>
  );
};
export default Title;
