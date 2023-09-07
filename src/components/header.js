import React from 'react'

const Header = () => {
  return (
    <div className="w-full px-7 pt-24 pb-16 bg-gradient-to-br from-yellow-900/60 to-yellow-900 text-white">
      <div className="flex justify-between">
        <h3 className="text-2xl tracking-[.45em]"><a className="hover:cursor-pointer" href="home">VARESE</a></h3>
        <div className="flex">
          <a className="text-base font-light mr-4 hover:cursor-pointer" href="home">HOME</a>
          <a className="text-base font-light mx-4 hover:cursor-pointer" href="about">ABOUT</a>
          <a className="text-base font-light mx-4 hover:cursor-pointer" href="menu">MENU</a>
          <a className="text-base font-light ml-4 hover:cursor-pointer" href="contact">CONTACT</a>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-6xl text-center leading-snug">The best flavors from<br /> the mediterranean.</h1>
        <div className="text-neutral-300 flex justify-center items-center mt-10">
          <div className="border-t border-neutral-400 flex-1"></div>
          <h3 className="mx-10 text-lg tracking-[.45em]">THE VARESE RESTAURANT</h3>
          <div className="border-t border-neutral-400 flex-1"></div>
        </div>
      </div>
    </div>
  )
}

export default Header