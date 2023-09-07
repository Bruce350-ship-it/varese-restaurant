import React from 'react'
import { Footer } from '../components'

const Contact = () => {
  return (
    <div>
      <div className="w-full px-7 pt-24 pb-14">
        <div className="flex justify-between">
          <h3 className="text-2xl tracking-[.45em]"><a className="hover:cursor-pointer" href="home">VARESE</a></h3>
          <div className="flex">
            <a className="text-base font-light mr-4 hover:cursor-pointer" href="home">HOME</a>
            <a className="text-base font-light mx-4 hover:cursor-pointer" href="about">ABOUT</a>
            <a className="text-base font-light mx-4 hover:cursor-pointer" href="menu">MENU</a>
            <a className="text-base font-light ml-4 hover:cursor-pointer" href="contact">CONTACT</a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-20">
          <h1 className="text-6xl text-center leading-snug">Contact</h1>
          <div className="flex gap-10 mt-10">
            <div className="flex flex-col gap-10 w-1/2">
              <div className="flex justify-between">
                <p className="font-semibold">Restaurant:</p>
                <p className="">+39 0173 78625</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Winery:</p>
                <p className="">+39 348 221979</p>
              </div>
            </div>
            <div className="flex justify-between w-1/2">
              <p className="font-semibold">Management:</p>
              <p className="">+39 0173 78625</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-40">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57464.174595830154!2d-80.40898867832034!3d25.819704800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9bbdbe1763da5%3A0x3bcb3ef6e18fd8b0!2sGusto%20RistoBar!5e0!3m2!1sen!2sug!4v1693832926246!5m2!1sen!2sug" width="100%" height="650" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Footer />
    </div>
  )
}

export default Contact