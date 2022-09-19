import React from 'react'
import github from "./images/bi_github.png"
import message from "./images/ep_message.png"
import behance from "./images/akar-icons_behance-fill.png"
import linkedIn from "./images/akar-icons_linkedin-v2-fill.png"
import twitter from "./images/akar-icons_twitter-fill.png"
import logo from "./images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png"
const Footer = () => {
  return (
    <footer
      className="flex py-16 text-darkShade bg-lightShade gap-4 flex-col items-center"
    >
      <div className="flex">
        <img
          className="w-[20px]"
          src={logo}
          alt=""
        />
        <p className="font-bold self-end text-xs">Flo.</p>
      </div>
      <div>
        <p className="text-xl font-bold">FLOURISH RALPH</p>
      </div>
      <div className="flex gap-4 my-2">
        <img className="h-4" src={twitter} alt="twitter" />
        <img className="h-4" src={behance} alt="behance" />
        <img className="h-4" src={github} alt="github" />
        <img className="h-4" src={linkedIn} alt="linkedIn" />
        <img className="h-4" src={message} alt="message" />

      </div>
    </footer>

  )
}

export default Footer
