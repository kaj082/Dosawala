import React, { useState } from "react";
import "./Header.css";
import Cancel from "./Icons/Cancel";
import Image from "./Icons/Image";
import List from "./Icons/List";
import Menu from "./Icons/Menu";
import About from "./About";
import Hamburger from "hamburger-react";

import { Link, Route, Routes } from "react-router-dom";
import AboutPage from "./AboutPage";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log("hello");
  };

  return (
    <>
      <nav className="header">
        <Link to="/" className="logo-link">
          <div className="header_logo">
            <Image />
          </div>
        </Link>
        {/* </Link> */}

        <div className="list" onClick={handleClick}>
          <Hamburger color="#1A750B" />
          {/* {click === true ? <Cancel /> : <List />} */}
        </div>

        <div className="header__nav">
          {/* { 1st link} */}
          <Link to="/about-page" className="header_link">
            <span className=" header-text">About Us</span>
          </Link>

          {/* { 2 link} */}
          <a href="#id-franchise" className="header_link">
            <span className="header-text">Franchise</span>
          </a>
          {/* { 3 link} */}
          <a href="#id-menu" className="header_link">
            <span className="header-text">Menu</span>
          </a>
          {/* { 4 link} */}
          <a href="/about-page#id-contact" className="header_link">
            <span className="header-text">Contact</span>
          </a>
        </div>
      </nav>

      {click === true ? (
        <div className="menu">
          <Menu />
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Header;
