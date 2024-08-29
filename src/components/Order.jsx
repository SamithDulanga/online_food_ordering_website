import React from 'react'
import Search from '../assets/search.png'
import Ordering from '../assets/order.png'
import Eat from '../assets/eat.png'

const Order = () => {

  const desList=[
    {
      id:1,
      name:Search,
      description:"Search"
    },
    {
      id:2,
      name:Ordering,
      description:"Order"
    },
    {
      id:3,
      name:Eat,
      description:"Enjoy"
    }
  ]
  return (
    <div className='container mt-20 '>
      <h2 className='text-orange-600 text-5xl font-black text-center mb-10'>
        How it works
      </h2>

      <div className='grid md:grid-cols-3 grid-cols-1 gap-3'>
        {
          desList.map((item)=>{
            return(
              <div key={item.id} className="border w-[400px] rounded-2xl shadow-lg">
              <img src={item.name}/>
              <h2 className='text-green-700 text-2xl font-black text-center mb-10'>{item.description}</h2>
              </div>

            )
          })
        }
      </div>

      <div className='flex justify-center m-10 '>
        <button className='py-4 px-6 bg-green-700 text-2xl text-white font-black rounded-2xl'>Search Now</button>
      </div>
    </div>
  )
}

export default Order