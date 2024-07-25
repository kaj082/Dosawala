import React from "react";
import "./Footer.css";
import ArrowFooter from "./Icons/FooterArrow";
import Facebook from "./Icons/Facebook";
import Insta from "./Icons/Insta";
import Twitter from "./Icons/Twitter";
import Phone from "./Icons/FooterPhone";
import GroupImg from "./Images/Group-img-footer.png";
function Footer() {
  return (
    <div className="footer-main">
      <div className="footerpartOne">
        <div className="footer-address">
          <p className="title-add">Address</p>
          <div className="inner-text-add">
            <p className="add-text">Head Office: Ground Floor,</p>
            <p className="add-text">Savan Mall, behind Kargil </p>
            <p className="add-text">Petrol Pump Ahmedabad</p>
            <p className="add-text">contact@dosawalaindia.com</p>
          </div>
        </div>
        <div className="storecontact">
          <p className="title-contact">Store contacts:</p>
          <div className="inner-text-store">
            <p className="contact-text">Sola road : 82380 11324</p>
            <p className="contact-text">Vaishnodevi : 6396772263</p>
            <p className="contact-text">Bhavnagar : 8145337482</p>
            <p className="contact-text">Mundra : 87358 82755</p>
          </div>
        </div>
        <div className="all-link">
          <div className="main-link-div">
            <p className="title-link">User Link</p>
            <div className="link-inner-text">
              <p className="user-link">
                <div className="arrow-icon-footer">
                  <ArrowFooter />
                </div>
                <p className="arrow-content">Our story</p>
              </p>
              <p className="user-link">
                <div className="arrow-icon-footer">
                  <ArrowFooter />
                </div>
                <p className="arrow-content">download menu</p>
              </p>
              <p className="user-link">
                <div className="arrow-icon-footer">
                  <ArrowFooter />
                </div>
                <p className="arrow-content">vison and growth</p>
              </p>
              <p className="user-link">
                <div className="arrow-icon-footer">
                  <ArrowFooter />
                </div>
                <p className="arrow-content">franchise</p>
              </p>
            </div>
          </div>
          <div className="socialmedia">
            <div className="social-inner">
              <p className="title-media">Social Media </p>
              <div className="inner-media">
                <p className="main-social">
                  <div className="icon-footer">
                    <Facebook />
                  </div>
                  <p className="icon-content">Facebook</p>
                </p>

                <p className="main-social">
                  <div className="icon-footer">
                    <Twitter />
                  </div>
                  <p className="icon-content">twitter</p>
                </p>
                <p className="main-social">
                  <div className="icon-footer">
                    <Insta />
                  </div>
                  <p className="icon-content">instagram</p>
                </p>
                <p className="main-social">
                  <div className="icon-footer">
                    <Phone />
                  </div>
                  <p className="icon-content">8510957376</p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="insta">
          <p className="title-insta">Instagram</p>
          <div className="inner-insta">
            <img classname="insta-img" src={GroupImg} alt="" />
          </div>
        </div>
      </div>
      <div className="footerpartTwo">
        <div className="line"></div>
        <p className="copyright-text">
          Copyright © 2021.designed and devloped by dizayn.io All Rights
          Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
