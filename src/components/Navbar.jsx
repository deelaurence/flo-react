import { Link } from 'react-router-dom'
import React from 'react'
import logo from './images/680fe7a0a23e7b6c80c6547abf7eb43a-sticker 2.png'
const Navbar = () => {
  return (
    <nav
      className="px-6 relative z-10 flex py-5 items-center justify-between bg-darkShade text-lightShade md:px-16"
    >
      <Link to="/">
        <div className="flex gap-1 overflow-hidden">
          <img
            className="h-12"
            src={logo}
            alt="logo"
          />


          <h3 className="self-end -mb-1 text-xl font-bold">Flo.</h3>

        </div>
      </Link>
      <div className="md:hidden flex flex-col gap-1 self-end font-[500]">
        <p className='text-sm text-[#fafafab9]' ><Link to='/portfolio'>menu</Link></p>
      </div>
    </nav>

  )
}

export default Navbar
