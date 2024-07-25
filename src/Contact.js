import React from "react";
import "./Contact.css";
import ContactImg from "./Images/contact-img.png";
import Email from "./Icons/Email";
import Phone from "./Icons/Phone";
import EmailG from "./Icons/GreenEmail";
import PhoneG from "./Icons/GreenPhone";
function Contact() {
  return (
    <div className="contact-main">
      <div className="contact-content">
        <p className="header_text1"> contact for</p>
        <p className="header_text2">Franchise Inquiry </p>
        <p className="left-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat null
        </p>
        <div className="footer-1">
          <div className="icon-email">
            <Email />
          </div>
          <div className="icon-email-2">
            <EmailG />
          </div>
          <p className="footer-email">info@dosawalaindia.com</p>
        </div>
        <div className="footer-2">
          <div className="icon-mob">
            <Phone />
          </div>
          <div className="icon-mob-2">
            <PhoneG />
          </div>
          <p className="footer-mob"> +91 9974937667</p>
        </div>
      </div>
      <div className="contact-img-component">
        <div className="mobile-text">
          <p className="mob_header_text1"> contact for</p>
          <p className="mob_header_text2">Franchise Inquiry </p>
        </div>
        <div className="contact-img">
          <img className="image-review" src={ContactImg} alt="" />
        </div>
        <p className="img-text">
          <p> Authentic South Indian Taste.</p>
          <p>Introducing first time ever! Unlimited South Indian Meal</p>
        </p>
      </div>
    </div>
  );
}

export default Contact;
