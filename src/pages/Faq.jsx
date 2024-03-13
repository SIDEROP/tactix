import React, { useEffect, useState } from 'react'
import "./css/faq.css"
import FaqData from '../components/FaqData';

const Faq = () => {
  let [db,Setdb] = useState([
    {
      a:"What services does your agency offer?",
      b:`We offer a comprehensive range of digital marketing services, including
      SEO, PPC advertising, social media marketing, content creation, email
      marketing, and more. Our goal is to provide tailored solutions to meet
      your specific needs and objectives.`
    },
    {
      a:"How do I know which digital marketing strategies are right for my business?",
      b:`Our team of experts conducts a thorough analysis of your business, industry, target audience, and competitors to determine the most effective strategies for your unique situation. We then work closely with you to develop a customized plan that aligns with your goals and budget.`
    },
    {
      a:"What sets your agency apart from others?",
      b:`At Tactix, we pride ourselves on our commitment to excellence, innovation, and client satisfaction. Our team of experienced professionals brings a wealth of knowledge and expertise to every project, ensuring that we deliver outstanding results and exceed our clients' expectations.`
    },
    {
      a:"How long does it take to see results from digital marketing efforts?",
      b:`The timeline for seeing results can vary depending on factors such as your industry, competition, budget, and the specific strategies employed. However, our goal is always to deliver tangible results as quickly as possible while also focusing on long-term growth and sustainability.`
    },
    {
      a:"How much does digital marketing services cost?",
      b:`The cost of our services can vary depending on factors such as the scope of the project, the services required, and the level of customization. We offer flexible pricing options to accommodate businesses of all sizes and budgets, and we always strive to provide maximum value for our clients' investment.`
    },
    {
      a:"Do you provide reports and analytics to track progress?",
      b:`Yes, we provide regular reports and analytics to track the progress of your campaigns and measure key performance indicators. These reports include detailed insights and actionable recommendations to help you understand the impact of our efforts and make informed decisions moving forward.`
    },
  ])

  let newFun = (e)=>{
    console.log(e)
  }

  useEffect(()=>{
    let ac = document.querySelectorAll(".faqData")

    ac.forEach(elm=>{
      elm.addEventListener("click",()=>{
        ac.forEach(e=>e.classList.remove("active"))
        elm.classList.toggle("active")
      })
    })

  },[])
  return (
    <div id="faq">
      <section className="faqBox">

        <div className="faqTop">
          <h1>
            <span>Your Burning</span>
            <span>Questions Answered</span>
          </h1>
        </div>
        {
          db && db?.map((val,i)=>(
            <>
              <FaqData val={val} i={i} newFun={newFun}/>
            </>
          ))
        }

      </section>
    </div>
  )
}

export default Faq