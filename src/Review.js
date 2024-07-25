import React from "react";
import "./Review.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewImg from "./Images/review.png";
import ArrowLeft from "./Icons/ArrowLeft";
import ArrowRight from "./Icons/ArrowRight";

function Review() {
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
    slidesToShow: 1,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };
  return (
    <>
      <div className="review-main">
        <p className="review_text1"> What</p>
        <p className="review_text2"> Our constomer says</p>

        <div className="nav_review">
          <div className="review_overflow">
            <Slider {...settings}>
              <p className="review-text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                null”
                <div className="review-footer">Mr. sachin Rathor </div>
              </p>
              <p className=" review-text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                null”
                <div className="review-footer">Mr. Akshay Rathor </div>
              </p>
              <p className="review-text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                null”
                <div className="review-footer">Mr. Rajesh Rathor </div>
              </p>
            </Slider>
          </div>
        </div>

        <div className="review-img">
          <img className="image-review" src={ReviewImg} alt="" />
        </div>
      </div>
    </>
  );
}

export default Review;
