import React from 'react'
import download  from "./images/ant-design_download-outlined.png"
 
import logo from "./images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png"

const WhoIsFlo = () => {
  return (
    <section
      className="bg-lightShade px-6 md:pl-16 relative text-darkShade flex flex-col"
    >
      <div
        className="mt-20 self-center overflow-y-hidden md:absolute md:top-[30%] md:right-[10%] justify-self-center"
      >
        <h2
          className="text-3xl whitespace-nowrap overflow-visible font-semibold md:text-4xl md:font-bold"
        >
          Who is Flo?
        </h2>
      </div>
      <div
        className="self-center pt-10 pb-12 justify-self-center md:ml-[15%] md:mt-12 md:self-start"
      >
        <img
          className="h-24"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="md:mb-20">
        <p className="font-medium text-[0.8rem] w-[350px]">
          Flourish Ralph is a Product designer currently <br />
          based in Nigeria. She has experience in user <br />
          experience design and is proficient in using <br />
          Figma to ensure user-centered designs.
          <br />
          <br />
          Flourish Ralph wants to design innovative<br />
          digital products that can solve world problems; <br />
          even the tiniest ones deemed inconsequential.
        </p>
      </div>

      <div
        className="flex border-[1px] h-14 w-56 rounded-[8px] mt-10 mb-24 px-4 py-3 border-darkShade md:absolute md:bottom-[5%] md:right-[10%]"
      >
        <p className="font-semibold translate-y-1  overflow-hidden ">Download her CV</p>
        <img
          className="h-6 ml-4 translate-y-0.5"
          src={download}
        
          alt="download"
        />
      </div>
    </section>
  )
}

export default WhoIsFlo
