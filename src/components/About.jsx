
import React from 'react'
import Restaurant1 from '../assets/restaurant1.jpg'
import Restaurant2 from '../assets/restaurant2.jpg'

const About = () => {
  return (
    <div className='mt-48 container'>
      <h2 className='text-5xl font-black text-orange-600 text-center'>About Us</h2>
      <div className='p-5 flex justify-center items-center'>

      </div>
     <div className="grid grid-cols-1 md:grid-cols-2 text-2xl">
      <div className='flex justify-center gap-16' >
      <img src={Restaurant1} className='w-[250px] p-5 border bg-gray-300 '/>
      <img src={Restaurant2} className='w-[250px] p-5 border bg-gray-300 '/>
      </div>
      <div className=' p-10 flex justify-center items-center border-2 rounded-2xl shadow-lg'>
      <p className='text-3xl text-justify'>Welcome to ChefMook, your destination for tasty, chef-made meals. 
        Whether you order online or visit one of our shops across Sri Lanka, 
        we use the best ingredients to bring delicious food to your table. 
        ChefMook makes enjoying great meals easy, wherever you are.</p>
      </div>
     
      

     </div>
    </div>
  )
}

export default About