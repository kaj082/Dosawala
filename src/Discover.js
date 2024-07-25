import React from "react";
import "./Discover.css";
import Wall from "./Images/dosa-img-wall.png";
import ImageMenu from "./ImageMenu";
import DiscoverSub from "./DiscoverSub";

function Discover() {
  return (
    <div className="discover-main" id="id-discover">
      <div className="discover-header">
        <p className="text-1">Discover</p>
        <p className="text-2">Special dish</p>
      </div>
      <div className="image-discover">
        <div className="image-component">
          <DiscoverSub />

          <ImageMenu />
        </div>
        <div className="slider-header">
          <div className="inner-header">
            <p className="text-1">Discover</p>
            <p className="text-2">Special dish</p>
          </div>
        </div>
        <div className="discover-image">
          <div className="test-image">
            <img className="wall-image" src={Wall} alt="" />
          </div>
          <p className="wall-image-text">Test With Love</p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
