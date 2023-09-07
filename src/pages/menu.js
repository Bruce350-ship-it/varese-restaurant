import React from 'react'
import vegpiz_pic from '../Stock/pexels-valeria-boltneva-1308311.jpg'
import starter_1 from '../Stock/Meals/Starters/pexels-keegan-evans-90893.jpg'
import starter_2 from '../Stock/Meals/Starters/pexels-cook-eat-772513.jpg'
import starter_3 from '../Stock/Meals/Starters/pexels-ali-dashti-17650170.jpg'
import starter_4 from '../Stock/Meals/Starters/pexels-farhad-ibrahimzade-8696476.jpg'
import starter_5 from '../Stock/Meals/Starters/pexels-nishant-aneja-2955816.jpg'
import starter_6 from '../Stock/Meals/Starters/pexels-brett-jordan-2297961.jpg'
import starter_7 from '../Stock/Meals/Starters/pexels-nishant-aneja-2955819.jpg'
import starter_8 from '../Stock/Meals/Starters/pexels-alisha-mishra-1346381.jpg'

import mains_1 from '../Stock/Meals/pexels-maria-bortolotto-6270541.jpg'
import mains_2 from '../Stock/Meals/pexels-bp-2739250.jpg'
import mains_3 from '../Stock/Meals/pexels-bp-2739268.jpg'
import mains_4 from '../Stock/Meals/pexels-daniela-constantini-5591658.jpg'
import mains_5 from '../Stock/Meals/pexels-erik-mclean-4062274.jpg'
import mains_6 from '../Stock/Meals/pexels-jane-doan-793770.jpg'

import dessert_1 from '../Stock/Meals/Dessert/pexels-bp-2739274.jpg'
import dessert_2 from '../Stock/Meals/Dessert/pexels-cook-eat-772518.jpg'
import dessert_3 from '../Stock/Meals/Dessert/pexels-roman-odintsov-4871111.jpg'
import { Footer } from '../components'

const Menu = () => {
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
          <h1 className="text-6xl text-center leading-snug">Come and taste our<br /> splendid menu</h1>
        </div>
      </div>
      <div className="relative">
        <img src={vegpiz_pic} alt="vegpiz-pic" className="bg-right" />
        <div className="absolute bottom-0 left-0 px-8 py-7 bg-white">
          <h3 className="text-5xl mb-4">Starters</h3>
          <p className="text-lg">Taste of starters to kick off your beautiful meal.</p>
        </div>
      </div>
      <div className="p-10 flex gap-10 mb-10">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_1} alt="starter-1" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Golden Osettra Caviar</h4>
                <p className="text-xl opacity-60">With homemade BBQ sauce and avocado</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$26</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_2} alt="starter-2" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Genoa King Crab Tartare</h4>
                <p className="text-xl opacity-60">Served with tomato, arugula and pesto sauce</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$17</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_3} alt="starter-3" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Grilled Meat with Sauce</h4>
                <p className="text-xl opacity-60">Spice roasted sill family farm almonds</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$29</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_4} alt="starter-4" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Fried Rice on Pot</h4>
                <p className="text-xl opacity-60">With shrimp and roasted salad</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$18</p>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_5} alt="starter-5" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Bisque of the day</h4>
                <p className="text-xl opacity-60">Spice roasted sill family farm almonds</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$31</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_6} alt="starter-6" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Brown Potatoes with Pear</h4>
                <p className="text-xl opacity-60">With homemade BBQ sauce and avocado</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$22</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_7} alt="starter-7" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Buffalo milk Burrata</h4>
                <p className="text-xl opacity-60">Served with tomato, arugula and pesto sauce</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$16</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="mr-3"><img src={starter_8} alt="starter-8" className="w-24" /></div>
              <div className="">
                <h4 className="text-2xl font-medium mb-2">Fried Rice on Pot</h4>
                <p className="text-xl opacity-60">With shrimp and roasted salad</p>
              </div>
            </div>
            <p className="text-3xl pt-3">$24</p>
          </div>
        </div>
      </div>
      <div className="py-48 bg-neutral-400 text-white text-2xl text-center tracking-[.65em]">FOOD CRAFT. AT ITS BEST.</div>
      <div>
        <div className="px-10 pt-20">
          <h3 className="text-5xl mb-4">Mains</h3>
          <p className="text-lg">Taste of starters to kick off your beautiful meal.</p>
        </div>

        <div className="p-10 flex gap-10 mb-10">
          <div className="w-1/2 flex flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={mains_1} alt="mains-1" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Golden Osettra Caviar</h4>
                  <p className="text-xl opacity-60">With homemade BBQ sauce and avocado</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$26</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={mains_2} alt="mains-2" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Grilled Meat with Sauce</h4>
                  <p className="text-xl opacity-60">Spice roasted sill family farm almonds</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$19</p>
            </div>

            <div className="border border-solid border-orange-700">
              <p className="p-3 text-white text-xl tracking-[.45em] bg-orange-700">SEASONAL</p>
              <div className="flex justify-between p-5">
                <div className="flex items-center">
                  <div className="mr-3"><img src={mains_3} alt="mains-3" className="w-24" /></div>
                  <div className="">
                    <h4 className="text-2xl font-medium mb-2">Genoa King Crab Tartare</h4>
                    <p className="text-xl opacity-60">Served with tomato, arugula and pesto sauce</p>
                  </div>
                </div>
                <p className="text-3xl pt-3">$23</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={mains_4} alt="mains-4" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Fried Rice on Pot</h4>
                  <p className="text-xl opacity-60">With shrimp and roasted salad</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$16</p>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-10">
            <div className="border border-solid border-black">
              <p className="p-3 text-white text-xl tracking-[.45em] bg-black">SEASONAL</p>
              <div className="flex justify-between p-5">
                <div className="flex items-center">
                  <div className="mr-3"><img src={mains_5} alt="mains-5" className="w-24" /></div>
                  <div className="">
                    <h4 className="text-2xl font-medium mb-2">Brown Potatoes with Pear</h4>
                    <p className="text-xl opacity-60">With homemade BBQ sauce and avocado</p>
                  </div>
                </div>
                <p className="text-3xl pt-3">$31</p>
              </div>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={mains_6} alt="mains-6" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Bisque of the day</h4>
                  <p className="text-xl opacity-60">Spice roasted sill family farm almonds</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$25</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mb-20'>
        <div className="px-10 pt-20">
          <h3 className="text-5xl mb-4">Desserts</h3>
          <p className="text-lg">The sweet finish.</p>
        </div>

        <div className="p-10 flex gap-10 mb-10">
          <div className="w-1/2 flex flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={dessert_1} alt="dessert-1" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Tiramisú</h4>
                  <p className="text-xl opacity-60">Traditional savoiardi soaked in coffee grown in the central Italy.</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$26</p>
            </div>

            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={dessert_2} alt="dessert-2" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Crostata ricotta e visciole</h4>
                  <p className="text-xl opacity-60">A simple and elegant tart with ricotta cheese and sour black cherries.</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$19</p>
            </div>
          </div>
          <div className="w-1/2 flex flex-col gap-10">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="mr-3"><img src={dessert_3} alt="dessert-2" className="w-24" /></div>
                <div className="">
                  <h4 className="text-2xl font-medium mb-2">Tiramisú</h4>
                  <p className="text-xl opacity-60">Traditional savoiardi soaked in coffee grown in the central Italy.</p>
                </div>
              </div>
              <p className="text-3xl pt-3">$31</p>
            </div>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Menu