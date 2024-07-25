import React from "react";
import "./AboutSection.css";
import cx from "classnames";
const AboutSection = ({
  image,
  logoimg,
  smalltitle,
  largetitle,
  content_1,
  content_2,
  content_3,
  content_4,
  content_5,
  style_type,
}) => {
  return (
    <>
      <div className={cx("about-section-main", { type_2_style: style_type })}>
        <div className="section-left">
          {logoimg === "" ? (
            <img className="section-img" src={image} alt="" />
          ) : (
            logoimg
          )}
        </div>
        <div
          className={cx("section-right", { type_2_section_right: style_type })}
        >
          <div
            className={cx("section-header", {
              type_2_section_largetitle: style_type,
            })}
          >
            <div className="small-title-section">{smalltitle}</div>
            <div className="large-title-section">{largetitle}</div>
          </div>
          <div className="section-content">
            <p className="section-content-1">{content_1}</p>
            <p className="section-content-1">{content_2}</p>
            <p className="section-content-1">{content_3}</p>
            <p className="section-content-1">{content_4}</p>
            <p className="section-content-1">{content_4}</p>
          </div>
        </div>
      </div>
      <div className="about-section-mobile">
        <div className="section-header">
          <div className="small-title-section">{smalltitle}</div>
          <div className="large-title-section">{largetitle}</div>
        </div>
        <div className="mobile-section">
          <div className="section-left">
            {logoimg === "" ? (
              <img
                className={cx("mobile-section-img", {
                  type_2_section_img: style_type,
                })}
                src={image}
                alt=""
              />
            ) : (
              logoimg
            )}
          </div>
          <div className="section-content">
            <p className="section-content-1">{content_1}</p>
            <p className="section-content-1">{content_2}</p>
            <p className="section-content-1">{content_3}</p>
            <p className="section-content-1">{content_4}</p>
            <p className="section-content-1">{content_5}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
