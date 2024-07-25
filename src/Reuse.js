import React from "react";
import Ourstory from "./Ourstory";
import Group from "./Images/image_3.png";
import Groups from "./Images/image_4.png";
import FinalImg from "./Images/ourmenu-last-img.png";

function Reuse() {
  return (
    <div className="reuse">
      <Ourstory
        img_desktop={Group}
        mobile_img={Groups}
        extra_header=""
        header="Our Story"
        content_1="Dosawala is the best South Indian restaurant brand that has more
        than a decade of experience in serving authentic and contemporary
        delicacies of South Indian cuisine. We are established to breathe
        a new life into the traditional"
        content_2="South Indian cuisine and present it to the world in a new light.
        At Dosawala street, we endeavour to cater a unique menu to food
        conscious customers by modernising traditional south Indian
        recipes into healthier & tastier dishes."
        footer="Know more"
      />
      <Ourstory
        img-desktop={FinalImg}
        mobile-img={FinalImg}
        extra-header="Vision and Growth"
        header="A Winning Franchise Team"
        content_1="Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable prices and to generate prots for the benet of the franchise in a short duration of time. Dosawala dedicate to ensure the success of our franchisee associates by focussing and providing exclusive support and service on committed environment"
        content_2="To spread the product across the globe through our chain of retail outlets. Our brand chain special taste makers and ingredients will spread a standard avor of taste all over the country"
        footer="Know more"
      />
    </div>
  );
}

export default Reuse;
