
import React from 'react'
import Restaurant1 from '../assets/restaurant1.jpg'
import Restaurant2 from '../assets/restaurant2.jpg'
import {motion} from "framer-motion";
import Testimonial from './Testimonial';

const About = () => {
  
  return (
    <div className='my-28 lg:my-2 container'>
      <motion.h2 
      initial={{opacity:0,y:"100%"}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.8}}
      className='text-5xl font-black text-orange-600 text-center pb-16'>About Us</motion.h2>
      
     <div className="grid grid-cols-1 xl:grid-cols-2 text-2xl pb-36">
      {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-16  p-4' > */}
        {/* <div className='flex justify-center items-center'>
        <motion.img
          initial={{opacity:0,x:"-100%"}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.5}}
          src={Restaurant1} className='w-[250px] p-5 border bg-gray-300 '/>
        </div> */}

        <div className='flex justify-center items-center'>
        <motion.img 
          initial={{opacity:0,x:"-100%"}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.5}}
          src={Restaurant2} className='sm:w-[400px] w-[300px] p-5 border bg-gray-300 '/>

        </div>
      
      
      {/* </div> */}
      <motion.div 
       initial={{opacity:0,x:"100%"}}
       whileInView={{opacity:1,x:0}}
       transition={{duration:1.5}}
      
      className=' p-10 flex justify-center items-center border-2 rounded-2xl shadow-lg m-10'>
      <p className='sm:text-3xl text-xl sm:text-justify'>Welcome to ChefMook, your destination for tasty, chef-made meals. 
        Whether you order online or visit one of our shops across Sri Lanka, 
        we use the best ingredients to bring delicious food to your table. 
        ChefMook makes enjoying great meals easy, wherever you are.</p>
      </motion.div>
     
      

     </div>
     <div>
     <Testimonial/>
     </div>
     
    </div>
  )
}

export default About