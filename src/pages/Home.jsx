import React from 'react'
import "./css/home.css"

const Home = () => {
  return (
    <div id="home">
      <div className="homeContent">
        <a className='homeBtn' href='#voice'>
          What Our Clients Say. <span>{">"}</span>
        </a>
        <h1>
          <span>
            Transform Your Brand with
            Expert Marketing Strategies
          </span>
        </h1>
        <p>
          <span>
            Experience the transformative power of our expert marketing strategies as we partner with
            you to elevate your brand's digital presence. Let us take your brand to new heights online!
          </span>
        </p>
      </div>
      <div className="homebox">
        <img className='off1' src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc8657acc7ac557a3a3c7f_Illustration%20-%202.svg"/>
        <span className='off2'>
          <a href="#">Schedule Consultation</a>
        </span>
        <span className='off3'>
          <a href="#services">Our Services</a>
        </span>
        <img className='off4' src="https://assets-global.website-files.com/65cc742940cb3798ef9ade41/65cc8656f99292c62ad2dea3_email-campaign-flatline%202.svg"/>
      </div>
      <div className="homeNote">
        With innovative strategies and a results-driven approach, we empower brands to thrive in the ever-evolving digital landscape.
      </div>
    </div>
  )
}

export default Home