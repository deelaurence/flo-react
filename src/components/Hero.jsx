import React from 'react'
import heroImage from "./images/IMG_1035 2.png"
import github from "./images/bi_github.png"
import message from "./images/ep_message.png"
import behance from "./images/akar-icons_behance-fill.png"
import  linkedIn from "./images/akar-icons_linkedin-v2-fill.png"
import twitter from "./images/akar-icons_twitter-fill.png"
const Hero = () => {
  return (
    <section className="px-6 md:px-16 pt-28 pb-[22rem] relative z-20 flex flex-col bg-darkShade text-lightShade md:min-h-[90vh] md:pb-10">
      <h1 className="text-4xl font-semibold md:text-5xl">
        FLOURISH <span className="block overflow-hidden">RALPH</span>
      </h1>
      <p className="font-bold text-opaque pt-8 text-[1.2rem]">
        Incepto Ne Desistam.
        <span
          className="block mt-4 leading-none overflow-hidden text-[1.1rem] pb-4 font-bold"
          >May I not shrink from<br />my purpose.</span
        >
      </p>
      <div className="lg:self-center">
        <h1
          className="text-xl mt-16 leading-8 font-bold z-10 lg:absolute lg:text-3xl lg:bottom-[30%] lg:-translate-x-1/2"
        >
          PRODUCT <span className="block overflow-hidden">DESIGNER</span>
        </h1>
      </div>
      <div className="invert flex gap-3 my-4 md:gap-6 lg:absolute lg:bottom-10">
        <img className="h-5" src={twitter} alt="twitter" />
        <img className="h-5" src={behance} alt="behance" />
        <img className="h-5" src={github} alt="github" />
        <img className="h-5" src={linkedIn} alt="linkedIn" />
        <img className="h-5" src={message} alt="message" />
      </div>

      <div className="absolute bottom-[10rem] right-0 md:bottom-0">
        <img
          className="h-[90vw] relative md:h-[100vh]"
          src={heroImage}
          alt="heroImage"
        />
        <div
          className="h-12 -mt-4 relative bottom-8 bg-gradient-to-b from-transparent via-darkShade to-darkShade w-full  border-none md:hidden"
        ></div>
      </div>
      <div
        className="seperator absolute bottom-20 -translate-x-1/2 left-1/2 h-14 w-[1.5px] bg-lightShade"
      ></div>
    </section>
  )  
 }

export default Hero
