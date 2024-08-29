import React from 'react'
import Logo from '../assets/logo.png';
import {motion} from "framer-motion";
import { IoMdCart } from "react-icons/io";

const Navbar = () => {
    const navMenu=[
        {
            id:1,
            title:"Home",
            path:"/",
            delay:0.1
        },
        {
            id:2,
            title:"About",
            path:"/about",
            delay:0.2
        },
        {
            id:3,
            title:"Hot Deals",
            path:"/service",
            delay:0.3
        },
        {
            id:4,
            title:"Contact",
            path:"/contact",
            delay:0.4
        },
    ];

    const slideDown = (delay) =>{
        return {
            initial:{
                y:"-200%",
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
    <nav>
        <div className='container flex items-center justify-between p-5 '>
            <motion.h1  className="text-5xl font-black tracking-wider"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:2,delay:0.5}}>Chef<span className='text-orange-600'>Mook...</span></motion.h1>
            
            
            <div className="hidden md:block">
                <ul className="flex font-bold text-xl p-2 gap-6">
                    {
                        navMenu.map((menu)=>{
                            return(
                                <motion.li 
                                variants={slideDown(menu.delay)}
                                initial="initial"
                                animate="animate"
                                key={menu.id} data-delay={menu.delay} className='navMenu'>
                                    <a href={menu.path} className="inline-block px-2 py-2 text-3xl text-gray-600 ">{menu.title}</a>

                                </motion.li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='p-3 bg-gray-600 rounded-full hover:cursor-pointer'>
            <IoMdCart  className='text-3xl text-white '/>
            </div>

        </div>
    </nav>
  )
}

export default Navbar;