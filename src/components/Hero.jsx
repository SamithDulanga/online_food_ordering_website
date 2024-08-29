import React from 'react'
import Plane from '../assets/plane.png'
import Chef from '../assets/chef.png'
import Food from '../assets/food.jpg'
import {motion} from "framer-motion";

const Hero = () => {

    const slideUp = (delay) =>{
        return {
            initial:{
                y:"100%",
                opacity:0
            },
            animate: {
                y:0,
                opacity:1,
                transition:{
                    duration:0.8,
                    delay:delay
                }
            }
        }
    }

    const getTransformValues = () => {
        if (window.innerWidth < 676) {
          return { opacity: 1, rotate: 90, x: 200, y: 100 };
        } else {
          return { opacity: 1, rotate: 90, x: 600, y: 200 };
        }
      };

  return (
    <main className='flex justify-center items-center'>
    <div className='container min-h-[600px] flex justify-center relative z-10  m-10'>

        <div className='grid xl:grid-cols-2 grid-cols-1 place-items-center justify-between gap-12 lg:gap-24 p-10'>
        <div className=' xl:text-left text-center'>
        <motion.h2
        variants={slideUp(0.5)}
        initial="initial"
        whileInView="animate"

        className='uppercase md:text-6xl text-5xl font-black '>Bringing  </motion.h2>
        <div className='flex item-center justify-center gap-2'>
        <motion.h2 
        variants={slideUp(1)}
        initial="initial"
        whileInView="animate"
        className='uppercase md:text-7xl text-5xl font-black text-outline text-transparent flex items-center '>the world</motion.h2>
        <motion.img 
        variants={slideUp(1.3)}
        initial="initial"
        whileInView="animate"
        src={Chef} className='2xl:w-24 w-0'/>
        </div>
        
        <motion.h2
        variants={slideUp(1.5)}
        initial="initial"
        whileInView="animate" 
        className='uppercase md:text-6xl text-5xl font-black'>to your table</motion.h2>
        <motion.h2 
        variants={slideUp(1.8)}
        initial="initial"
        whileInView="animate"
        className='px-2 md:text-4xl text-2xl'>The king of delicious foods</motion.h2>
        </div>

        <div>
            <motion.img
            initial={getTransformValues()}
            whileInView={{opacity:1,rotate:0,x:0,y:0}}
            transition={{duration:2}}
             src={Food} className=" img-shadow z-11 rounded-full"/>
        </div>

        </div>  
    </div>

    </main>
  )
}

export default Hero