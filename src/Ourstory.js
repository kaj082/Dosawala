import React from "react";

import "./Ourstory.css";
function Ourstory({
  img_desktop,
  // logoback,
  // mobileback,
  mobile_img,
  extra_header,
  header,
  content_1,
  content_2,
  content_3,
  content_4,
  footer,
  knowmore,
}) {
  return (
    <div>
      <div className="about-us">
        <div className="about-us-main">
          <div className="about-us-img">
            {/* {logoback === "" ?  : logoback} */}
            <img src={img_desktop} alt="" />
          </div>
          <div className="mobile-img">
            <img className="imgage-mob" src={mobile_img} alt="" />
          </div>
          <div className="about-us-content">
            {extra_header === "" ? (
              <></>
            ) : (
              <p className="extra-header">{extra_header}</p>
            )}

            <p className="about-header">{header}</p>
            <p className="about-1">{content_1}</p>
            <p className="about-2">{content_2}</p>
            {content_3 === "" && content_4 === "" ? (
              <></>
            ) : (
              <>
                <p className="about-1">{content_3}</p>
                <p className="about-2">{content_4}</p>
              </>
            )}
            <p className="about-footer">
              {footer === "" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <a href={knowmore} className="footer-know-more">
                    <span className="footer">Know More</span>
                  </a>
                  <span className="arrow">&gt;</span>
                  <span className="arrow">&gt;</span>
                  <span className="arrow">&gt;</span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourstory;
