import React from 'react'
import Rice from '../assets/friedrice.jpg'
import Burger from '../assets/burger.jpg'
import Hotdog from '../assets/hotdog.jpg'
import Noodle from '../assets/noodle.jpg'
import Soup from '../assets/soup.jpg'
import Pizza from '../assets/pizza.jpg'
import {motion} from "framer-motion";

const HotDeals = () => {
  const picList=[
    {
      id:1,
      name:Rice,
      description:"Special Rice",
      delay:0.1
    },
    {
      id:2,
      name:Burger,
      description:"Burger",
      delay:0.2
    },
    {
      id:3,
      name:Hotdog,
      description:"Hotdog",
      delay:0.3
    },
    {
      id:4,
      name:Noodle,
      description:"Noodle",
      delay:0.
    },
    {
      id:5,
      name:Soup,
      description:"Special Soups",
      delay:0.5
    },
    {
      id:6,
      name:Pizza,
      description:"Special Pizzas",
      delay:0.6
    }
  ]



  return (
    <div className='container mt-20'>
    
       <h2 className='text-5xl font-black text-orange-600 text-center'>Hot Deals </h2>
       <h2 className='text-center text-3xl'>50% Discount offer in this Season</h2>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3 m-10'>
          {
            picList.map((item)=>{
              return(
                <div key={item.id}  className='flex justify-center items-center'>
                <div
                
                
                className="border  w-[350px] rounded-2xl shadow-lg p-4 mb-10">
                  <img src={item.name} className='p-3'/>
                  <h2 className='text-green-700 text-2xl font-black text-center mb-5'>{item.description}</h2>

                </div>
                </div>
              )
            })
          }

      </div>
    

    </div>

    
  )
}

export default HotDeals