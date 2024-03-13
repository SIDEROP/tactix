import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
// page
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Approach from "./pages/Approach.jsx";
import Faq from "./pages/Faq.jsx";
import Contact from "./pages/Contact.jsx";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Layout = () => {
  // const locomotiveScroll = new LocomotiveScroll();

  useEffect(()=>{
    document.body.addEventListener("mousemove",x=>{
      document.getElementById("cursBox").style.left = `${x.x-10}px`
      document.getElementById("cursBox").style.top = `${x.y -10}px`
    })
    
    document.querySelectorAll("a").forEach(elm=>{
      elm.addEventListener("mouseenter",()=>{
        document.getElementById("cursBox").style.scale="3"
      })
      
      elm.addEventListener("mouseout",()=>{
        document.getElementById("cursBox").style.scale="1"
      })
    })
  },[])

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: 2,
        start: "top 50%",
        end: "top 50%",
        markers: false,
      },
    });

    tl.to("#home, #about", {
      backgroundColor: "#C2DECF",
    });

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#services",
        scrub: 2,
        start: "top 50%",
        end: "top 50%",
        markers: false,
      },
    });

    tl2.to("#services, #about", {
      backgroundColor: "#FDE680",
    });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#approach",
        scrub: 2,
        start: "top 50%",
        end: "top 50%",
        markers: false,
      },
    });

    tl3.to("#approach, #services", {
      backgroundColor: "#C0DDFF",
    });

    let tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: "#approach .approackClint",
        scrub: 2,
        start: "top 99%",
        end: "top 90%",
        markers: false,
      },
    });

    
    tl4.to("#approach", {
      backgroundColor: "#000000",
    });

    let dbT = gsap.timeline()

    dbT.from("header",{
      y:"-100%",
      duration:.8,
      opacity:0
    },"a")

    dbT.from("#home .homeBtn",{
      y:"-100000px",
      duration:.3,
      opacity:0
    },"a")

    dbT.from(" .homeContent h1, .homeContent p",{
      x:"-200%",
      duration:.8,
      transition:"cubic-bezier(0.61, 1, 0.88, 1)",
      opacity:0
    })

    dbT.from(" .homebox",{
      x:"200%",
      duration:.8,
      transition:"cubic-bezier(0.61, 1, 0.88, 1)",
      opacity:0
    })

    dbT.from(".homeNote",{
      opacity:0
    })

    let tlHeader = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: 2,
        start: "top 95%",
        end: "top 50%",
        markers: false,
      },
    });

    tlHeader.from(".aboutBox", {
      x:-300,
      opacity:0
    });

    let tlHeader2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        scrub: 2,
        start: "top 50%",
        end: "top 10%",
        markers: false,
      },
    });

    tlHeader2.from(".aboutMissonbox", {
      x:300,
      opacity:0
    });


    let tlHeader3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".agency1",
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
        markers: false,
      },
    });

    tlHeader3.from(" .age2", {
      x:300,
      opacity:0
    },"age");
    tlHeader3.from(" .age1", {
      x:-300,
      opacity:0
    },"age");


    let tlHeader4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutMeet",
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
        markers: false,
      },
    });

    tlHeader4.from(" .aboutMeet", {
      opacity:0
    },"age");

    let tlHeader5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".servBox",
        scrub: 2,
        start: "top 99%",
        end: "top 60%",
        markers: false,
      },
    });

    tlHeader5.from(" .serBox1", {
      y:300,
      opacity:0,
      scale:.5
    },"age");

    
    let tlHeader6 = gsap.timeline({
      scrollTrigger: {
        trigger: " .approachbox .agencyBox",
        scrub: 2,
        start: "-150% 99%",
        end: "-100% 60%",
        markers: false,
      },
    });

    tlHeader6.from(".aboutMissonbox", {
      y:300,
      scale:0
    });


    let tlHeader7 = gsap.timeline({
      scrollTrigger: {
        trigger: ".approachbox .agencyBox",
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
        markers: false,
      },
    });

    tlHeader7.from(".age4", {
      x:300,
      opacity:0,
      scale:0
    },"age");

    tlHeader7.from(".age5", {
      x:-300,
      opacity:0,
      scale:0
    },"age");
    
    
    let tlHeader9 = gsap.timeline({
      scrollTrigger: {
        trigger: "#voice",
        scrub: 2,
        start: "top 99%",
        end: "top 40%",
        markers: false,
      },
    });
    
    tlHeader9.from("#voice", {
      x:600,
      opacity:0
    });

    let tlHeader10 = gsap.timeline({
      scrollTrigger: {
        trigger: ".reviBox",
        scrub: 2,
        start: "top 99%",
        end: "top 76%",
        markers: false,
      },
    });

    tlHeader10.from(" .reviBox", {
      y:300,
      opacity:0
    },"age");

    let tlHeader11 = gsap.timeline({
      scrollTrigger: {
        trigger: " .faqData",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
        markers: false,
      },
    });

    tlHeader11.from(" .faqData", {
      opacity:0,
      stagger:1
    });

    let tlHeader12 = gsap.timeline({
      scrollTrigger: {
        trigger: " .formBox1",
        scrub: 2,
        start: "top 90%",
        end: "top 40%",
        markers: false,
      },
    });

    tlHeader12.from(" .form1", {
      opacity:0,
      x:-300
    },"form");
    tlHeader12.from(" .form2", {
      opacity:0,
      x:300
    },"form");

    tlHeader12.from(" footer", {
      opacity:0,
      y:300,
      duration:1
    });

  }, []);

  return (
    <>
    <div id="cursBox"></div>
      <Header />
      <Outlet />
      <Home />
      <About />
      <Services />
      <Approach />
      <Faq />
      <Contact/>
    </>
  );
};

export default Layout;
