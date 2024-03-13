import React from "react";
import "./css/approach.css";
import Digital from "../components/Digital";
import Missonbox from "../components/Missonbox";
import { LuShare2 } from "react-icons/lu";
import Reviwbox from "../components/Reviwbox";

const Approach = () => {
  let data = {
    icons: LuShare2,
    titel: "Results Through Collaboration",
    p: `At Tactix, collaboration drives success. From ideation to execution, we work together to deliver outstanding results that propel your business forward.`,
    bg: "#FFFFFF",
    color: "#000000",
    iconBg: "#39608E",
    iconColor: "#FFFFFF",
    img: "https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65ccd513402a2068882a3cc7_Illustration%206.svg",
  };

  let digital = {
    color: "#39608E",
    bg: "#C0DDFF",
    h1: "Our Strategic",
    h2: "Framework",
    h3: "for",
    h4: "Excellence",
  };

  let digital2 = {
    color: "#999999",
    bg: "#000000",
    h1: "Voices of Success",
    h2: "from",
    h3: "Our Satisfied",
    h4: "Clients",
    solidColor:"#FFFFFF"
  };

  return (
    <div id="approach">
      <div className="approachbox">
        <Digital digital={digital} />

        <div className="agencyBox">
          <div className="agency1 age4">
            <div className="imgAge">
              <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65ccd5134ccff80af7dcce10_Illustration%208.svg" />
            </div>
            <h1>Our Proven Methodology</h1>
            <p>
              Our methodology ensures ongoing digital success. From analysis to
              execution and optimization, we deliver results with transparency
              and improvement.
            </p>
          </div>
          <div className="agency1 age5">
            <div className="imgAge">
              <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65ccd513c67165dd4e1c9bbb_Illustration%207.svg" />
            </div>
            <h1>Revealing Our Workflow</h1>
            <p>
              At Tactix, our workflow ensures project success. From planning to
              delivery, we prioritize efficiency and excellence, resulting in
              exceptional results.
            </p>
          </div>
        </div>
        <Missonbox data={data} />
        <span id="voice">
        <Digital digital={digital2}/>
        </span>
        <div className="approackClint">
          <Reviwbox />
          <Reviwbox />
          <Reviwbox />
          <Reviwbox />
        </div>
      </div>
    </div>
  );
};

export default Approach;
