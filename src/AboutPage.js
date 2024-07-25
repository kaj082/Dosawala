import React from "react";
import About from "./About";
import Header from "./Header";
import Ourstory from "./Ourstory";
import ImgOne from "./Images/AboutPage/img-1.png";
import ImgTwo from "./Images/AboutPage/img-2.png";
import ImgThree from "./Images/AboutPage/img-4.png";
import Review from "./Images/review.png";
import Logo from "./Logo";

import Information from "./Information";
import AboutContact from "./AboutContact";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page" id="about-us">
      <Header />
      <AboutSection
        image=""
        logoimg={<Logo />}
        smalltitle="Know us"
        largetitle="About Dosawala"
        content_1="Dosawa is the best South Indian restaurant brand that has more than a decade of experience in serving authentic and contemporary delicacies of South Indian cuisine."
        content_2="We are established to breathe a new life into the traditional south Indian cuisine and present it to the world in a new light. At Dosawala street, we endeavour to cater a unique menu to food conscious customers by modernising traditional south Indian recipes into healthier & tastier dishes. "
        content_3="Dosawala unique in its concept has varying franchise based on site availability and expertise in feasibility analytics in the food & beverage industry."
        content_4="We have designed our menu very cautiously that ensures the authentic taste of the South. Some of the most popular food items on our menu are Idli, Dosa, Special Chula Dosa Vada, Uthappam, Upma, Rice, and rice."
      />
      <AboutSection
        image={ImgOne}
        logoimg={""}
        smalltitle=""
        largetitle="Our Story"
        content_1="In a world that is increasingly coming closer, we seek to promote the harmony of Indian culture, cuisine and experience. Celebrating southern dining in all its glory, we use the finest ingredients, often flown in from different parts of South India, to create mouth-watering delicacies for a truly authentic and unforgettable dining experience."
        content_2="providing the world with a different traditional experience and considering our youth going to Morden era we have created the cuisine and menu to serving authentic and contemporary delicacies South Indian food with our decade of experience."
        content_3=""
        content_4=""
        style_type
      />
      <AboutSection
        image={ImgTwo}
        logoimg={""}
        smalltitle=""
        largetitle="Growth and Opportunity "
        content_1="Dosawala strives to provide its customers, the healthiest and wholesome meal at a very affordable price and to generate profits for the benefit of the franchise in a short duration of time."
        content_2="Dosawala dedicates to ensure the success of our franchisee associates by focussing and providing exclusive support and service in a committed environment To spread the product across the globe through our chain of retail outlets. "
        content_3="Our brand chain special tastemakers and ingredients will spread a standard flavour of taste all over the country"
        content_4="We offer you the right opportunity a franchise with The dosawala team will create the immediate advantage of working with a well-established brand. "
        content_5="If you have the spirit of an entrepreneur, the zeal for growth, commitment to building a successful business and the ability to accept new challenges, we offer you the right opportunity."
      />
      <Information />
      <AboutSection
        image={ImgThree}
        logoimg={""}
        smalltitle=""
        largetitle="Grow with us"
        content_1="Dosawala offers some of the best franchise support in the industry. We provide access to a wide range of experts across the country. Strong parent group. Extensive franchise support. The management is experienced.

        "
        content_2="An enthusiastic, service-oriented company having high sensitivity towards food service standards and strong casual dining concept acumen Competent group with phenomenal ability to operate a network of the restaurant on Pan Indian scale Strong operational expertise of operating restaurant in the industries Strategic tie-ups with vendors and supplier promising national procurement network Fabulous back -end team with exceptional work experience in F&B category Excellent real estate acquisition ability through strategic tie-ups high profile real estate developers of the county Attractive margins High ROI"
        content_3=""
        content_4=""
      />
      <AboutContact />
      <div className="about-section-last-img">
        <img className="about-section-review-img" src={Review} alt="" />
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;
