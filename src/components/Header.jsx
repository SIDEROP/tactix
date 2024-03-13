import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Header = () => {
  let [btn,setBtn] = useState(false)

  // useEffect(()=>{
  //   document.addEventListener("scroll",(del)=>{
  //     let y = del.deltaY
  //     if (y >= 0) {
  //       document.querySelector("header").style.top = "-100%"
  //     } else{
  //       document.querySelector("header").style.top = "0%"
  //     }
  //   })
  // },[])

  useEffect(()=>{
    let scrol = 0
    document.addEventListener("scroll",(del)=>{
      let y = window.pageYOffset
      if (y > scrol) {
        document.querySelector("header").style.top = "-100%"
      } else{
        document.querySelector("header").style.top = "0%"
      }
      scrol = y
    })
  },[])

  return (
    <header>
      <div className="logo">
        <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc7a0e0a1464c239f1f367_Logo.svg" />
      </div>
      <nav className={`${btn?"active":null}`}>
        <div className="navLinks">
          {
            ["Home","About","Services","Approach","FAQ"]?.map(val=>(
              <span className="links" onClick={()=>setBtn(false)}>
              <a href={`#${val.toLowerCase()}`}>{val}</a>
            </span>
            ))
          }
        </div>
        <div className="contactBtn">
          <span>
            <a href="#contact">Contact Us</a>
          </span>
        </div>
      </nav>
        <i id="btn" onClick={()=>setBtn(pre=>!pre)}>
          <IoIosArrowBack size={"30px"} style={{rotate:`${btn?"180deg":"0deg"}`}}/>
        </i>
    </header>
  );
};

export default Header;
