import React from 'react'
import Plane from '../assets/plane.png'
import Logo from '../assets/logo.png'
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

  return (
    <div className='container min-h-[600px] flex justify-center'>

        <div className='grid md:grid-cols-2 grid-cols-1 place-items-center justify-between gap-12 lg:gap-24'>
        <div className='text-center md:text-left '>
        <motion.h2
        variants={slideUp(0.5)}
        initial="initial"
        whileInView="animate"

        className='uppercase text-6xl font-black '
        >Bringing  </motion.h2>
        <div className='flex item-center justify-center gap-2'>
        <motion.h2 
        variants={slideUp(1)}
        initial="initial"
        whileInView="animate"
        className='uppercase text-7xl font-black text-outline text-transparent flex items-center '>the world</motion.h2>
        <motion.img 
        variants={slideUp(1.3)}
        initial="initial"
        whileInView="animate"
        src={Plane} className='w-24'/>
        </div>
        
        <motion.h2
        variants={slideUp(1.5)}
        initial="initial"
        whileInView="animate" 
        className='uppercase text-6xl font-black'>to your screen</motion.h2>
        <motion.h2 
        variants={slideUp(1.6)}
        initial="initial"
        whileInView="animate"
        className='px-2'>Explore diverse cultures, stunning landscapes, and unique stories.</motion.h2>
        </div>

        <div>
            <motion.img
            initial={{opacity:0,rotate:90,x:600,y:0}}
            whileInView={{opacity:1,rotate:0,x:0,y:0}}
            transition={{duration:1.8}}
             src={Logo} className="w-[450px] img-shadow"/>
        </div>

        </div>

        
        
    </div>
  )
}

export default Hero