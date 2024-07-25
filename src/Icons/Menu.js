import React from "react";
import "./Menu.css";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <div className="Main_menu">
      <Link to="/about-page" className="header-menu-line">
        <p className=" header-text-menu">About Us</p>
      </Link>
      <a href="/about-page#id-franchise" className="header-menu-line">
        <p className="header-text-menu">Franchise</p>
      </a>
      <Link to="/about-page#id-menu" className="header-menu-line">
        <p className="header-text-menu">Menu</p>
      </Link>
      <Link to="/about-page#id-contact" className="header-menu-line">
        <p className="header-text-menu">Contact</p>
      </Link>
    </div>
  );
}

export default Menu;
