import React from 'react'
import back_pic from '../Stock/pexels-denys-gromov-4669261.jpg'
import meal_1 from '../Stock/pexels-pietro-jeng-671956.jpg'
import meal_2 from '../Stock/pexels-rene-asmussen-1327393.jpg'
import meal_3 from '../Stock/abstract-1238656_1920.jpg'
import meal_4 from '../Stock/pexels-roman-odintsov-4869433.jpg'

const Menu = () => {
  return (
    <div>
        <div style={{backgroundImage: `URL(${back_pic})`}} className="h-full bg-cover bg-fixed">
            <div className='bg-black/80 w-full h-full text-white'>
                <div className="px-5 text-center py-24">
                    <h2 className="text-5xl mb-10">Specials Menu</h2>
                    <div className="flex gap-10">
                        <div className="w-1/4 text-left">
                            <img src={meal_1} alt="meal-1" />
                            <h4 className="text-3xl mt-7">Golden Osettra Caviar</h4>
                            <p className="text-xl my-2">With homemade BBQ sauce and avocado</p>
                            <p className="text-3xl font-semibold">$26</p>
                        </div>
                        <div className="w-1/4 text-left">
                            <img src={meal_2} alt="meal-2" />
                            <h4 className="text-3xl mt-7">Genoa King Crab Tartare</h4>
                            <p className="text-xl my-2">Served with tomato, arugula and pesto sauce</p>
                            <p className="text-3xl font-semibold">$29</p>
                        </div>
                        <div className="w-1/4 text-left">
                            <img src={meal_3} alt="meal-3" />
                            <h4 className="text-3xl mt-7">Bisque of the day</h4>
                            <p className="text-xl my-2">Spice roasted sill family farm almonds</p>
                            <p className="text-3xl font-semibold">$18</p>
                        </div>
                        <div className="w-1/4 text-left">
                            <img src={meal_4} alt="meal-4" />
                            <h4 className="text-3xl mt-7">Brown Potatoes with Pear</h4>
                            <p className="text-xl my-2">With homemade BBQ sauce and avocado</p>
                            <p className="text-3xl font-semibold">$24</p>
                        </div>
                    </div>
                    <button className="bg-red-800 text-white py-3 px-12 mt-12 border-0 rounded-md hover:bg-neutral-500"><a href="contact">Book a Table</a></button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Menu