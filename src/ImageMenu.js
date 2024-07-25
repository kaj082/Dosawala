import React from "react";
import ImageDescriptrion from "./ImageDescription";
import "./ImageMenu.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DishOne from "./Images/dis_1.png";
import DishTwo from "./Images/dis_2.png";
import DishThree from "./Images/dis_3.png";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";
const ImageMenu = () => {
  var settings = {
    // dots: false,
    // infinite: true,
    // className: "center",
    // // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // centerMode: true,
    // arrow: true,
    // autoplay: false,
    // autoplaySpeed: 2000,
    // centerPadding: "60px",
    arrows: true,
    className: "center",
    centerMode: false,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 2,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    
  };
  return (
    <div className="imagemenu">
      <Slider {...settings}>
        <div className="imagemenu-item">
          <ImageDescriptrion
            image={DishOne}
            title="Kara Mura"
            description="Masala dosa"
          />
        </div>
        <div className="imagemenu-item">
          <ImageDescriptrion
            image={DishTwo}
            title="Rava schezwan Dosa"
            description="supreme dosai"
          />
        </div>
        <div className="imagemenu-item">
          <ImageDescriptrion
            image={DishThree}
            title="Cone shape"
            description="Special masala dosa"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageMenu;
