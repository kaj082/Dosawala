import React from "react";
import "./About.css";
import Image from "./Images/background.png";
import Doa from "./Images/image_2.png";
import Doaa from "./Images/image_1.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about">
        <p className="about-text">Welcome To Authentic South Indian Taste</p>
        <p className="about-small-text">
          Introducing first time event Unlimited South Indian Meal
        </p>
        <a href="#id-menu" className="see-menu">
          <button className="btn-about">See Menu</button>
        </a>
        <img className="back-img" src={Image} alt="" />
        <div className="dosa-img">
          <div className="image-1">
            <img className="dosa-img-1" src={Doa} alt="" />
          </div>
          <div className="image-2">
            <img className="dosa-img-1 " src={Doaa} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
