import React from 'react'
import abt_pic from '../Stock/Dark/pexels-pixabay-262978.jpg'
import back_pic from '../Stock/pexels-mitchell-luo-3694711.jpg'
import meal_1 from '../Stock/Dark/pexels-foodie-factor-551997.jpg'
import meal_2 from '../Stock/Dark/pexels-yente-van-eynde-2403391.jpg'
import meal_3 from '../Stock/Dark/pexels-jonathan-borba-2878745.jpg'
import meal_4 from '../Stock/Dark/pexels-cottonbro-studio-4253317.jpg'
import meal_5 from '../Stock/Dark/pizza-3007395_1920.jpg'
import chef_pic from '../Stock/Dark/pexels-cottonbro-studio-3338672.jpg'

const About = () => {
  return (
    <div>
        <img src={abt_pic} alt="abt-pic" />
        <div style={{backgroundImage: `URL(${back_pic})`}} className="h-full bg-cover relative">
            <div className='bg-white/75 w-full h-full'>
                <div className="max-w-3xl mx-auto text-center pt-16 mb-32">
                    <p className="text-2xl leading-snug">Located in the heart of 5th Avenue, Varese is a casual yet elegant restaurant, serving authentic cuisine from Schiranna, complimented by fine wine selections from around the world. Enjoy our indoor or outdoor dining options with friends and family.</p>
                    <button className="bg-red-800 text-white py-3 px-12 mt-12 border-0 rounded-md hover:bg-neutral-500"><a href="contact">Book a Table</a></button>
                </div>
                
                <div className="flex items-end gap-10">
                    <div className="w-1/5"><img src={meal_1} alt="meal-1" /></div>
                    <div className="w-1/5"><img src={meal_2} alt="meal-2" /></div>
                    <div className="w-1/5"><img src={meal_3} alt="meal-3" /></div>
                    <div className="w-1/5"><img src={meal_4} alt="meal-4" /></div>
                    <div className="w-1/5"><img src={meal_5} alt="meal-5" /></div>
                </div>
            </div>  
        </div>
        <div className="flex gap-10 mt-16">
            <div className="w-1/3 mt-28">
                <h3 className="text-4xl">8 Decades of Italian Cooking Heritage</h3>
                <p className="text-lg mt-12">While some of our recipes have been crafted and perfected within our own walls, we offer several family recipes and use several techniques that have been handed down across four generations of chefs.</p>
            </div>
            <div className="w-1/3"><img src={chef_pic} alt="chef-pic" /></div>
            <div className="w-1/3 mb-20 flex flex-col justify-end">
                <h3 className="text-4xl">Pure Comfort</h3>
                <p className="text-lg mt-12">At Varese, we want you to enjoy the experience as much as you enjoy the food. We chose all of our funiture with comfort in mind. Kick back and enjoy small plates with friends around an open fire on our patio or sit close to that special someone as you share a meal and a bottle of wine.</p>
            </div>
        </div>
    </div>
  )
}

export default About