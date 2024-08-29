import React from 'react'
import Rice from '../assets/friedrice.jpg'
import Burger from '../assets/burger.jpg'
import Hotdog from '../assets/hotdog.jpg'
import Noodle from '../assets/noodle.jpg'
import Soup from '../assets/soup.jpg'
import Pizza from '../assets/pizza.jpg'
import Flame from '../assets/flame.svg'

const HotDeals = () => {
  const picList=[
    {
      id:1,
      name:Rice,
      description:"Special Rice"
    },
    {
      id:2,
      name:Burger,
      description:"Burger"
    },
    {
      id:3,
      name:Hotdog,
      description:"Hotdog"
    },
    {
      id:4,
      name:Noodle,
      description:"Noodle"
    },
    {
      id:5,
      name:Soup,
      description:"Special Soups"
    },
    {
      id:6,
      name:Pizza,
      description:"Special Pizzas"
    }
  ]
  return (
    <div className='container mt-20'>
    
       <h2 className='text-5xl font-black text-orange-600 text-center'>Hot Deals </h2>
       <h2 className='text-center text-3xl'>50% Discuont offer in this Season</h2>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-3 m-10'>
          {
            picList.map((item)=>{
              return(
                <div key={item.id} className="border  w-[350px] rounded-2xl shadow-lg p-4 mb-10">
                  <img src={item.name} className='p-3'/>
                  <h2 className='text-green-700 text-2xl font-black text-center mb-5'>{item.description}</h2>

                </div>
              )
            })
          }

      </div>
    

    </div>

    
  )
}

export default HotDeals