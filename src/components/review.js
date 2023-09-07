import React from 'react'
import quote_icon from '../Stock/quote.png'
import male from '../Stock/pexels-tran-nhu-tuan-17050931.jpg'
import female from '../Stock/pexels-marcio-skull-3579181.jpg'

const Review = () => {
  return (
    <div className="py-28">
        <h2 className="text-5xl text-center mb-10">Happy Customers</h2>
        <div className="flex gap-20 mx-10">
            <div className="">
                <img src={quote_icon} className="w-10 opacity-40" />
                <p className="text-lg my-6">We loved the environment the second we walked in the door. The service was fantastic and we left feeling like our server was our new best friend.</p>
                <p className="text-lg">The food is bragworthy. This is where I’ll bring guests from out of town from now on.</p>
                <hr className="w-1/2 mt-6 mb-6" />
                <div  className="flex">
                    <img src={male} className="w-14 rounded-full mr-4" />
                    <div  className="">
                        <h6 className="text-lg font-semibold">Anton Delgado</h6>
                        <p className="text-lg">Traveler, Food Reviewer</p>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={quote_icon} className="w-10 opacity-40" />
                <p className="text-lg my-6">We loved the environment the second we walked in the door. The service was fantastic and we left feeling like our server was our new best friend.</p>
                <p className="text-lg">The food is bragworthy. This is where I’ll bring guests from out of town from now on.</p>
                <hr className="w-1/2 mt-6 mb-6" />
                <div  className="flex">
                    <img src={female} className="w-14 rounded-full mr-4" />
                    <div  className="">
                        <h6 className="text-lg font-semibold">Jane Doe</h6>
                        <p className="text-lg">Italian food enthusiast</p>
                    </div>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Review