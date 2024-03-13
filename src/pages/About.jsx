import React from "react";
import "./css/about.css";
import { RxRocket } from "react-icons/rx";
import { IoDiamondOutline } from "react-icons/io5";
import Missonbox from "../components/Missonbox";

const About = () => {
  let data = {
    icons: RxRocket,
    titel: "Our Mission to Transform Your Digital Future",
    p: `At the heart of our ethos lies a powerful mission to empower
    businesses with cutting-edge digital strategies. We 're committed to
    igniting their path to success and fostering sustainable growth
    through expertise.`,
    bg: "#000000",
    color: "#FFFFFF",
    iconBg: "#64A3B7",
    iconColor: "#000000",
    img: "https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc94fa28ba72d260ea3e43_Illustration.svg",
  };

  return (
    <div id="about">
      <div className="aboutBox">
        <h1>
          <span>Innovation and</span> <span>Expertise</span> at the Heart of
          Everything We Do
        </h1>
        <p>
          At our core, we blend innovation and expertise to fuel every project,
          striving to pioneer digital solutions that redefine success.
        </p>
      </div>
      <Missonbox data={data} />
      <div className="agencyBox">
        <div className="agency1 age1">
          <div className="imgAge">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc95b3542b6b87b3223a81_Illustration%203.svg" />
          </div>
          <h1>Navigating the Agency Evolution</h1>
          <p>
            From humble beginnings to remarkable achievements, we've embarked on
            a journey fueled by passion, innovation, and a relentless drive for
            excellence.
          </p>
        </div>
        <div className="agency1 age2">
          <div className="imgAge">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc95b33328ca8765f0c726_Illustration%204.svg" />
          </div>
          <h1>Navigating the Agency Evolution</h1>
          <p>
            From humble beginnings to remarkable achievements, we've embarked on
            a journey fueled by passion, innovation, and a relentless drive for
            excellence.
          </p>
        </div>
      </div>
      <div className="aboutMeet">
        <i>
          <IoDiamondOutline
            size={"45px"}
            style={{
              color: "white",
              backgroundColor: "#246241",
              padding: "12px",
              borderRadius: "50%",
            }}
          />
        </i>
        <div className="meerTit">
          <h1>Meet Our </h1>
          <h1>Collaborators</h1>
        </div>
        <div className="meetLinks">
          <a href="">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cca406b6740fe6156fe2bf_logoipsum-297%201.svg" />
          </a>
          <a href="">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cca4065481f8e0f1f33c3f_logoipsum-286%201.svg" />
          </a>
          <a href="">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cca40780e5d433178900de_logoipsum-216%201.svg" />
          </a>
          <a href="">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cca40611e20c5e9d746486_logoipsum-311%201.svg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
