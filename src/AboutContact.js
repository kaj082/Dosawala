import React from "react";
import GreenEmail from "./Icons/GreenEmail";
import GreePhone from "./Icons/GreenPhone";
import AboutContactImg from "./Images/AboutPage/img-5.png";
import "./AboutContact.css";
const AboutContact = () => {
  return (
    <div className="about-contact-main" id="id-contact">
      <div className="about-contact-content">
        <p className="about-contact-header">Contact Us For More Info</p>
        <div className="about-contact-left">
          <div className="contact-1-left">
            <div className="contact-icon-1">
              <GreenEmail />
            </div>
            <p className="contact-1-text">franchise@dosawalaindia.com</p>
          </div>
          <div className="contact-1-left">
            <div className="contact-icon-1">
              <GreePhone />
            </div>
            <p className="contact-1-text">+91 8510957376</p>
          </div>
        </div>
        <p className="about-contact-final">
          Varieties of Traditional South FoodFirst time in Gujarat, Introducing
          Unlimited south Indian Meal with 51 Delicious south Indian items.
        </p>
      </div>
      <div className="about-contact-img">
        <img className="final-img" src={AboutContactImg} alt="" />
      </div>
    </div>
  );
};

export default AboutContact;
