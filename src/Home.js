import React from "react";
import Header from "./Header";
import Cancel from "./Icons/Cancel";
import Image from "./Icons/Image";
import About from "./About";
import Ourstory from "./Ourstory";
import Discover from "./Discover";
import Ourmenu from "./Ourmenu";
import Group from "./Images/ourstory.png";
import Groups from "./Images/image_4.png";
import FinalImg from "./Images/ourmenu-img.jpg";
import Contact from "./Contact";
import Review from "./Review";
import Footer from "./Footer";
import AboutPage from "./AboutPage";
import Information from "./Information";
const Home = () => {
  return (
    <div className="home-main">
      <Header />
      <About />

      <Ourstory
        // logoback={""}
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
        knowmore={"about-page/#id-info"}
      />
      <Discover />
      <Ourmenu />
      <div className="ourstory-part" id="id-franchise">
        <Ourstory
          // logoback={""}
          img_desktop={FinalImg}
          mobile_img={FinalImg}
          extra_header="Vision and Growth"
          header="A Winning Franchise Team"
          content_1="Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable prices and to generate prots for the benet of the franchise in a short duration of time. Dosawala dedicate to ensure the success of our franchisee associates by focussing and providing exclusive support and service on committed environment"
          content_2="To spread the product across the globe through our chain of retail outlets. Our brand chain special taste makers and ingredients will spread a standard avor of taste all over the country"
          footer="Know more"
          knowmore={"#id-discover"}
        />
      </div>
      <Contact />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
