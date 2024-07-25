import React from "react";
import "./Information.css";
import Download from "./Icons/Download";
const Information = () => {
  return (
    <div className="info-main" id="id-info">
      <div className="info-left">
        <div className="part-1-left">
          <p className="header-1">VISION</p>
          <p className="info-text">
            To formulate a memorable experience by preserving the highest
            standard of quality, hygiene, service and customer satisfaction.
          </p>
        </div>
        <div className="part-1-left">
          <p className="header-1">MISSION</p>
          <p className="info-text">
            To frequently offer value addition in all spheres thereby inducing
            loyalty by patrons. To obtain, recreate and replicate the brand
            experience in as many areas as possible.
          </p>
        </div>
      </div>
      <div className="info-right">
        <p className="header-2">For more information</p>
        <div className="main-right">
          <div className="info-2-right">
            <div className="info-icon-1">
              <Download />
            </div>
            <p className="right-text">Download our menu</p>
          </div>
          <div className="info-2-right">
            <div className="info-icon-1">
              <Download />
            </div>
            <p className="right-text">Download Franchise Brochure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
