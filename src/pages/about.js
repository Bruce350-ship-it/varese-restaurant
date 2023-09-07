import React from 'react'
import veg_pic from '../Stock/pexels-ready-made-3850920.jpg'
import male_chef from '../Stock/pexels-cottonbro-studio-4252136.jpg'
import female_chef from '../Stock/pexels-andres-ayrton-6578889.jpg'
import { Footer } from '../components'

const About = () => {
  return (
    <div>
        <div className="w-full px-7 pt-24 pb-10">
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
                <h1 className="text-6xl text-center leading-snug">True Italian with an<br /> innovative taste</h1>
            </div>
        </div>
        <img src={veg_pic} alt="veg-pic" />
        <div className="px-5 py-7 flex">
            <div className="w-1/2">
                <h4 className="text-3xl">We are Francis Family, a group of artisans that specialize in Italian Cuisine, specifically from the streets of Schiranna.</h4>
                <div className="px-5 pt-24 flex flex-col gap-8">
                    <h3 className="text-5xl">The Chefs</h3>
                    <p className="text-xl">We started Varese as a way to honor our family traditions while pursuing our own passions. In addition to being brother and sister, we’re fourth generation chefs with a strong dedication to making the most significant traditions relevant again.</p>
                    <p className="text-xl">We have spent countless hours in this kitchen developing and perfecting the recipes you see on the menu today. We’ve also dedicated our time and energy into sourcing the right ingredients and making sure seasonal specialities are available to our patrons.</p>
                </div>
            </div>
            <div className="w-1/2">
                <div className="flex flex-col gap-8 pb-6">
                    <p className="text-lg">We’ve gone to great effort to ensure that every meal we plate is composed of the freshest traditional ingredients. We even went as far as to establish our own greenhouse.</p>
                    <p className="text-lg">Our family has worked with small Italian farms from the beginning and we’re proud to carry on that tradition today.</p>
                </div>
                <div className="flex gap-8">
                    <img src={male_chef} alt="male-chef" className="w-1/2" />
                    <img src={female_chef} alt="female-chef" className="w-1/2" />
                </div>
            </div>
        </div>
        <p className="text-2xl leading-snug max-w-3xl mx-auto my-20 text-center">Located in the heart of 5th Avenue, Varese is a casual yet elegant<br /> restaurant, serving authentic cuisine from Schiranna, complimented by<br /> fine wine selections from around the world. Enjoy our indoor or<br /> outdoor dining options with friends and family.</p>
        <Footer />
    </div>
  )
}

export default About