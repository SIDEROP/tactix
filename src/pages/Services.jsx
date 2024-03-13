import React from "react";
import "./css/services.css";

// icons
import { IoFlashOutline } from "react-icons/io5";
import { TbClick } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { RxRocket } from "react-icons/rx";
import { MdOutlineHeadphones } from "react-icons/md";
import Missonbox from "../components/Missonbox";
import Digital from "../components/Digital";

const Services = () => {
    let data ={
        icons:MdOutlineHeadphones,
        titel:`Continuous Care    
        for Triumph`,
        p:`From strategy development to execution and ongoing optimization, we're committed to delivering measurable results that drive sustainable growth for your business.`,
        img:"https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65ccd3814843d1b774e58fe4_Illustration%205.svg",
        color:"#F9F9F9",
        bg:"#000000",
        iconBg:"#FFFFFF",
        iconColor:"#000000"
      }
    
    let digital = {
      color:"#815D00",
      bg:"#FDE680",
      h1:"Digital Services",
      h2:"Tailored",
      h3:"to Elevate",
      h4:"Your Brand"
    }

  return (
    <div id="services">
      <div className="servicesBox">

        <Digital digital={digital}/>

        <div className="servBox">
          <div className="serBox1">
            <i>
              <IoFlashOutline
                size={"49px"}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#815D00",
                  color: "white",
                  padding: "13px",
                }}
              />
            </i>
            <h1>
              <span>Search Engine</span>
              Optimization
            </h1>
            <p>
              Enhance your online visibility and drive organic traffic to your
              website with our expert SEO strategies.
            </p>
          </div>
          <div className="serBox1">
            <i>
              <TbClick
                size={"49px"}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#815D00",
                  color: "white",
                  padding: "13px",
                }}
              />
            </i>
            <h1>
              <span>Pay-Per-Click</span>Advertising
            </h1>
            <p>
              Enhance your online visibility and drive organic traffic to your
              website with our expert SEO strategies.
            </p>
          </div>
          <div className="serBox1">
            <i>
              <RiUserSettingsLine
                size={"49px"}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#815D00",
                  color: "white",
                  padding: "13px",
                }}
              />
            </i>
            <h1>
              <span>Social Media</span>
              Marketing
            </h1>
            <p>
              Enhance your online visibility and drive organic traffic to your
              website with our expert SEO strategies.
            </p>
          </div>
          <div className="serBox1">
            <i>
              <CiBookmark
                size={"49px"}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#815D00",
                  color: "white",
                  padding: "13px",
                }}
              />
            </i>
            <h1>
              <span>Content</span>Marketing
            </h1>
            <p>
              Enhance your online visibility and drive organic traffic to your
              website with our expert SEO strategies.
            </p>
          </div>
          <Missonbox data={data} />

        </div>
      </div>
    </div>
  );
};

export default Services;
