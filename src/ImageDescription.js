import React from "react";
import "./ImageDescription.css";

function ImageDescriptrion({ title, image, description }) {
  return (
    <div className="sub-main">
      <div className="part1">
        <img className="desc-img" src={image} alt="" />
      </div>
      <div className="part2">
        <p className="title-text">{title}</p>
        <p className="desc-text">{description}</p>
      </div>
    </div>
  );
}

export default ImageDescriptrion;
