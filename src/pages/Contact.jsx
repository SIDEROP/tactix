import React from "react";
import "./css/contact.css";
// icons
import { FiMail } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Contact = () => {
  return (
    <div id="contact">
      <div className="contactBox">
        <div className="faqTop">
          <h1>
            <span>
              Contact Us <span>to Start</span>
            </span>
            <span>Your Transformation</span>
          </h1>
        </div>

        <div className="userDatail">
          <a className="boxD1" href="#">
            <i>
              <FiMail size={"35px"} />
            </i>
            <h1>
              <span>Drop Us a Line</span>
              <span>to Start Your Journey</span>
            </h1>
          </a>

          <a className="boxD1" href="#">
            <i>
              <FaRegCalendarAlt size={"35px"} />
            </i>
            <h1>
              <span>Book a Consultation</span>
              <span>to Discuss Your Goals!</span>
            </h1>
          </a>
        </div>

        <div className="formContact">
          <form className="formBox1 form1">

            <div className="userInfo">
              <h1>Let’s Get Started</h1>
              <p>Provide us with some details and let's begin transforming your business together!</p>
            </div>

            <div className="userInput">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="How can we help you?" />
            </div>
            
            <div className="btn">
              <a href="#">
              <button>Send a Message</button>
              </a>
            </div>
          </form>

          <div className="formBox1 formBox2 form2">
            
          </div>
        </div>
        <footer>
          <div className="socilM">
            <img src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc7a0e0a1464c239f1f367_Logo.svg"/>
            <div className="socilIcons">
                <i>
                  <a href="#">
                    <FaLinkedin size={"30px"}/>
                  </a>
                </i>
                <i>
                  <a href="#">
                  <FaFacebookSquare size={"30px"}/>
                  </a>
                </i>
                <i>
                  <a href="#">
                  <FaXTwitter size={"30px"}/>
                  </a>
                </i>
            </div>
          </div>
          <div className="licen">
            <span>© Tactix 2024, All Rights Reserved</span>
            <span>Licenses</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
