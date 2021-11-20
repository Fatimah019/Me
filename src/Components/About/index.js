/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./index.css";
import OtherCard from "../UI/otherCard";
import { experience } from "../../data";

const About = () => {
  // const email = "daviesfatimah97@gmail.com";

  return (
    <div className="about">
      <div className="about-top">
        <div className="about-top-left">
          <h2>Hey there! ✨</h2>
          <p>
            I’m Fatimah!. I’m a frontend developer based in Lagos, Nigeria. In
            my years of being a frontend developer, I have worked on a wide
            range of projects ranging from small to large scale. I have worked
            on E-Commerce, Helath-Care and BlogSite Applications. I’m passionate
            about building beautiful and functional user interfaces and have fun
            while at it!
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dycyotaya/image/upload/v1616914740/fatimaheditedbckg_mefdki.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="experience">
        <div className="experience-head">
          <h2>Experience</h2>
          <a
            className="resume"
            href="https://docs.google.com/document/d/16GwKlkmfU3cXcugC2iWao7ysI_90NfpnsEc22Wpxj6w/edit?usp=sharing"
          >
            Resume
          </a>
        </div>
        <div className="experience-body">
          {experience.map((e, index) => (
            <OtherCard
              key={index}
              card_head={e.company_name}
              card_list={e.company_other_info}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default About;
