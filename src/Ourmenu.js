import React, { useState } from "react";
import "./Ourmenu.css";
import OurImg from "./Images/ourmenu.png";
import Swiggy from "./Images/swiggy.png";
import Zomato from "./Images/zomato.png";
function Ourmenu() {
  const ourmenu_list = [
    { setItems: "VADAI & UPMA" },
    { setItems: "CLASSIC" },
    { setItems: "PREMIUM " },
    { setItems: "SUPREME" },
    { setItems: "SIGNATURE" },
  ];
  const item_list = [
    [
      { item: "Ulundu Vadai", amount: 99 },
      { item: "Onion Ulundu Vadai", amount: 199 },
      { item: "Rassam Ulundu Vadai", amount: 119 },
      { item: "Upma", amount: 89 },
    ],

    [
      { item: "saada dosai ", amount: 99 },
      { item: "mysuru saada dosai", amount: 139 },
      { item: "nilgiri saada dosai ", amount: 139 },
      { item: "palak saada dosai", amount: 139 },
      { item: "online saada dosai", amount: 149 },
      { item: "schezwan saada dosai", amount: 149 },
      { item: "paper saada dosai", amount: 149 },
      { item: "karamura saada dosai", amount: 149 },
    ],
    [
      { item: "nilgiri saada dosai ", amount: 139 },
      { item: "saada dosai ", amount: 99 },
      { item: "palak saada dosai", amount: 139 },
      { item: "schezwan saada dosai", amount: 149 },
      { item: "paper saada dosai", amount: 149 },
      { item: "mysuru saada dosai", amount: 139 },
      { item: "karamura saada dosai", amount: 149 },
      { item: "online saada dosai", amount: 149 },
    ],

    [
      { item: "Rawa nilgiri  dosai ", amount: 139 },
      { item: "Rawa  dosai ", amount: 99 },
      { item: "Rawa palak  dosai", amount: 139 },
      { item: "Rawa schezwan  dosai", amount: 149 },
      { item: "Rawa paper  dosai", amount: 149 },
      { item: "Rawa mysuru  dosai", amount: 139 },
      { item: "Rawa karamura  dosai", amount: 149 },
      { item: "Rawa online  dosai", amount: 149 },
    ],

    [
      { item: "Spring Dosai", amount: 99 },
      { item: " corn Dosai", amount: 99 },
      { item: "Tiranga Dosai", amount: 99 },
      { item: "Special D/s Dosai", amount: 99 },
      { item: " Family Dosai", amount: 99 },
    ],
  ];
  const [click, setClick] = useState(0);
  const handleClick = (index) => {
    return () => {
      setClick(index);
      console.log(click);
    };
  };

  return (
    <div>
      <div className="ourmenu" id="id-menu">
        <div className="ourmenu_header">
          <p className="menu_text1"> Find About</p>
          <p className="menu_text2"> Our Menu</p>
        </div>
        <div className="nav_ourmenu">
          <div className="overflow">
            {ourmenu_list.map((Items, index) => {
              const className = index === click ? "text-second" : "";
              return (
                <div
                  className={`ourmenu-text ${className}`}
                  onClick={handleClick(index)}
                >
                  {Items.setItems}
                </div>
              );
            })}
            {/* <p className="ourmenu-text">VADAI & UPMA</p>
            <p className=" text-second">CLASSIC</p>
            <p className="ourmenu-text">PREMIUM</p>
            <p className="ourmenu-text">SUPREME</p>
            <p className="ourmenu-text">SIGNATURE</p> */}
          </div>
        </div>
        <div className="ourmenu_content">
          <div className="ourmenu_text2">
            {item_list[click].map((Items, index) => (
              <>
                <div className="text-alig">
                  <p classname="text-three">{Items.item} </p>
                  <div className="dot-line"></div>
                  <p>{Items.amount}</p>
                </div>
              </>
            ))}
          </div>
          {/* <div className="text-alig">
              <p classname="text-three"> mysuru saada dosai</p>
              <div className="dot-line"></div>
              <p>139</p>
            </div>
            <div className="text-alig">
              <p classname="text-three"> nilgiri saada dosai</p>
              <div className="dot-line"></div>
              <p>139</p>
            </div>
            <div className="text-alig">
              <p classname="text-three">palak saada dosai </p>
              <div className="dot-line"></div>
              <p>139</p>
            </div>
            <div className="text-alig">
              <p>online saada dosai </p>
              <div className="dot-line"></div>
              <p>149</p>
            </div>
            <div className="text-alig">
              <p classname="text-three">schezwan saada dosai </p>
              <div className="dot-line"></div>
              <p>149</p>
            </div>
            <div className="text-alig">
              <p classname="text-three"> paper saada dosai</p>
              <div className="dot-line"></div>
              <p>149</p>
            </div>
            <div className="text-alig">
              <p classname="text-three">karamura saada dosai </p>
              <div className="dot-line"></div>
              <p>149</p>
            </div> */}
          {/* </div> */}
          <div className="ourmenu_img">
            <img className="right-img" src={OurImg} alt="" />
            <div className="icon-1">
              <img src={Swiggy} alt="" />
            </div>
            <div className="icon-2">
              <img src={Zomato} alt="" />
            </div>
            <div className="ourmenu-final-text">Whoo-Hoo!!</div>
          </div>
          <div className="ourmenu-final-text-1">
            <p className="ourmenu-final-text-1">
              Now you can order a meal right from your mobile via our partner
              swiggi and zomato and enjoy south Indian cuisine at home with the
              best offers and non-touch delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ourmenu;
