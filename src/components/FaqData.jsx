import React from "react";
import "./FaqData.css"
import { FaPlus } from "react-icons/fa6";

const FaqData = ({val,i,newFun}) => {
  return (
    <div className="faqData" onClick={e=>newFun(i)}>
      <div className="titelLogo">
        <h2>{val.a}</h2>
        <i>
          <FaPlus size={"23px"} />
        </i>
      </div>
      <p>
        {val.b}
      </p>
    </div>
  );
};

export default FaqData;
