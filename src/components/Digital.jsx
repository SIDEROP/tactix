import React from "react";
import "./digital.css"

const Digital = ({digital}) => {
  return (
    <>
      <div className="digitalSer" style={{backgroundColor:`${digital.bg}`}}>
        <h1 style={{color:`${digital?digital.solidColor:null}`}}>
          <span style={{color:`${digital.color}`}}>{digital.h1}</span>
          <span><span style={{color:`${digital.color}`}}>{digital.h2}</span> {digital.h3}</span>
          {digital.h4}
        </h1>
      </div>
    </>
  );
};

export default Digital;
