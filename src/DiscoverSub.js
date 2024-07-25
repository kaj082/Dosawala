import React from "react";
import "./DiscoverSub.css";
import ImageDescriptrion from "./ImageDescription";
import DishOne from "./Images/dis_1.png";
import DishTwo from "./Images/dis_2.png";
import DishThree from "./Images/dis_3.png";
function DiscoverSub() {
  return (
    <div className="discover-sub">
      <ImageDescriptrion
        image={DishOne}
        title="Kara Mura"
        description="Masala dosa"
      />
      <ImageDescriptrion
        image={DishTwo}
        title="Rava schezwan Dosa"
        description="supreme dosai"
      />
      <ImageDescriptrion
        image={DishThree}
        title="Cone shape"
        description="Special masala dosa"
      />
    </div>
  );
}

export default DiscoverSub;
