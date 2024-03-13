import React from "react";
import "./missonbox.css";

const Missonbox = ({data}) => {

  return (
    <>
      <div className="aboutMissonbox" style={{backgroundColor:`${data.bg}`,color:`${data.color}`}}>
        <div className="box1">
          <div className="ico">
            <i>
              <data.icons
                size={"40px"}
                style={{
                  backgroundColor: `${data.iconBg}`,
                  color: `${data.iconColor}`,
                  padding: "12px",
                  borderRadius: "50%"
                }}
              />
            </i>
          </div>
          <div className="missTitle">
            <h1>{data.titel}</h1>
          </div>
          <p>
            {data.p}
          </p>
        </div>
        <div className="box2">
          <div className="imgAge">
            <img src={`${data.img}`} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Missonbox;
