import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Group from "./Images/image_3.png";
import Groups from "./Images/image_4.png";
import Wall from "./Images/dosa-img-wall.png";
import Doa from "./Images/image_2.png";
import Doaa from "./Images/image_1.png";
import "./Simple.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <Slider {...settings}>
      <div className="content">
        <img className="image" src={Group} alt="" />
      </div>
      <div className="content">
        <img className="image" src={Groups} alt="" />
      </div>
      <div className="content">
        <img className="image" src={Wall} alt="" />
      </div>
      <div className="content">
        <img className="image" src={Doa} alt="" />
      </div>
      <div className="content">
        <img className="image" src={Doaa} alt="" />
      </div>
    </Slider>
  );
}
