import React from "react";
import "./Logo.css";
import FinalLogo from "./Images/FinalLogo2.png";
function Logo() {
  return (
    <div className="logo">
      <img className="finallogo" src={FinalLogo} alt="" />
    </div>
  );
}

export default Logo;
