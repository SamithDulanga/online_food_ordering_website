import React from 'react'
import Rice from '../assets/friedrice.jpg'
import Burger from '../assets/burger.jpg'
import Hotdog from '../assets/hotdog.jpg'
import Noodle from '../assets/noodle.jpg'
import Soup from '../assets/soup.jpg'
import Pizza from '../assets/pizza.jpg'
import { NavLink } from 'react-router-dom';

const HotDeals = () => {
  const picList=[
    {
      id:1,
      name:Rice,
      description:"Rice",
      navLink:"rice",
      delay:0.1
    },
    {
      id:2,
      name:Burger,
      description:"Burger",
      navLink:"burger",
      delay:0.2
    },
    {
      id:3,
      name:Hotdog,
      description:"Hotdog",
      navLink:"hotdog",
      delay:0.3
    },
    {
      id:4,
      name:Noodle,
      description:"Noodle",
      navLink:"noodle",
      delay:0.
    },
    {
      id:5,
      name:Soup,
      description:"Soup",
      navLink:"soup",
      delay:0.5
    },
    {
      id:6,
      name:Pizza,
      description:"Pizza",
      navLink:"pizza",
      delay:0.6
    }
  ]



  return (
    <div className='container my-28 lg:my-7'>
    
       <h2 className='text-5xl font-black text-orange-600 text-center'>Hot Deals </h2>
       <h2 className='text-center text-3xl'>50% Discount offer in this Season</h2>

        <div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3 m-10'>
          {
            picList.map((item)=>{
              return(
                <NavLink to={`/chefmook/hotdeals/${item.navLink}`} key={item.id}>
                <div  className='flex justify-center items-center'>
                <div
                
                
                className="border  w-[350px] rounded-2xl shadow-lg p-4 mb-10 hover:cursor-pointer hover:scale-105 duration-500 flex flex-col items-center justify-center">
                  <img src={item.name} className='p-3 w-[300px] h-[200px]'/>
                  <h2 className='text-green-700 text-2xl font-black text-center mb-5'>{item.description}</h2>

                </div>
                </div>
                </NavLink>
              )
            })
          }

      </div>
    

    </div>

    
  )
}

export default HotDeals