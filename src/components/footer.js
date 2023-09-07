import React from 'react'
import facebook_png from '../Stock/For white background/facebook.png'
import twitter_png from '../Stock/For white background/twitter.png'
import instagram_png from '../Stock/For white background/instagram.png'
import tiktok_png from '../Stock/For white background/tik-tok.png'

const Footer = () => {
  return (
    <div className="py-20 pl-5 flex gap-20">
      <div className="w-1/3">
        <h3 className="text-2xl tracking-[.45em] font-medium"><a className="hover:cursor-pointer" href="home">VARESE</a></h3>
        <p className="text-lg mt-7">Located in the heart of 5th Avenue, Varese is a casual yet elegant restaurant, serves an authentic delicious cuisine from Schiranna.</p>
      </div>
      <div className="w-1/3">
        <h3 className="text-xl">WORKING HOURS</h3>
        <div className="flex justify-between mt-7">
          <div className="flex flex-col">
            <p className="text-lg mb-8">Monday – Saturday</p>
            <p className="text-lg">Sunday</p>
          </div>
          <div className="flex flex-col">
            <p className="text-lg mb-8">10 AM – 9 PM</p>
            <p className="text-lg">Closed</p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <h3 className="text-xl">CONNECT WITH US</h3>
        <div className="flex mt-8">
          <img src={facebook_png} alt="facebook-png" className="w-5 mr-2 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={twitter_png} alt="facebook-png" className="w-5 mx-2 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={instagram_png} alt="facebook-png" className="w-5 mx-2 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300" />
          <img src={tiktok_png} alt="facebook-png" className="w-5 ml-2 transition ease-in-out delay-75 hover:cursor-pointer hover:-translate-y-1 hover:scale-110 duration-300" />
        </div>
      </div>
    </div>
  )
}

export default Footer