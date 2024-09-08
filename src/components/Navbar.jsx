import './Navbar.css'
import React, { useContext } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import {motion} from "framer-motion";
import { IoMdCart } from "react-icons/io";
import {useState,useEffect} from "react";
import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { ShopContext } from './ShopContext/ShopContext';


const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1024);
    const {getTotalItems}=useContext(ShopContext)

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1024);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const navMenu = [
        {
            id: 1,
            title: 'Home',
            navLink: 'home',
            delay: 0.1,
            duration: 500,
            offset: -110,
        },
        {
            id: 2,
            title: 'About',
            navLink: 'about',
            delay: 0.2,
            duration: 1200,
            offset: -90,
        },
        {
            id: 3,
            title: 'Hot Deals',
            navLink: 'hotdeals',
            delay: 0.3,
            duration: 1900,
            offset: -100,
        },
        {
            id: 4,
            title: 'Contact',
            navLink: 'contact',
            delay: 0.4,
            duration: 3700,
            offset: -100,
        },
        ...(isSmallScreen
            ? [
                {
                    id: 5,
                    title: 'Login',
                    navLink: 'login',
                    delay: 0.5,
                    duration: 500,
                    offset: -70,
                },
                {
                    id: 6,
                    title: 'Cart',
                    navLink: 'cart',
                    delay: 0.6,
                    duration: 500,
                    offset: -70,
                }
              ]
            : []
        ),
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

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick1(){
        setIsMenuOpen(!isMenuOpen);
    }
  return (
    <nav className='lg:relative fixed w-full lg:bg-transparent top-0 z-50 bg-white '>
        <div className='container flex items-center justify-between p-5 '>
            <motion.h1  className="md:text-5xl text-4xl font-black tracking-wider "
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:2,delay:0.5}}>Chef<span className='text-orange-600'>Mook...</span></motion.h1>
            
            
            <div className="hidden lg:block">
                <ul className="flex font-bold  p-2 gap-6">
                    {
                        navMenu.map((menu)=>{
                            return(
                               
                                <motion.li 
                                variants={slideDown(menu.delay)}
                                initial="initial"
                                animate="animate"
                                key={menu.id} data-delay={menu.delay} className='navMenu'>

                                <NavLink
                                    to={menu.navLink}
                                    // smooth={true}
                                    // duration={menu.duration}
                                    // offset={menu.offset}
                                    className="inline-block px-2 py-2  text-2xl text-gray-600 hover:cursor-pointer">
                                    {menu.title}
                                </NavLink>

                                </motion.li>
                                
                            )
                        })
                    }
                </ul>
            </div>

            <div className='flex gap-5 justify-center items-center'>
            <NavLink to={'login'}>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:0.8,delay:1.5}}>
            {/* <IoMdCart  className='text-3xl text-white  '/> */}


            
            <button className=' px-2 py-1 text-2xl font-bold rounded-lg border text-gray-500 border-gray-500 hover:text-white hover:bg-gray-500 duration-1000 hidden lg:block'>Login</button>
            
            </motion.div>
            </NavLink>

            <NavLink to={'cart'}>
            <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration:0.8,delay:1.5}}
            className='p-4 bg-white border hover:bg-gray-500 text-gray-500 hover:text-white  border-gray-500 rounded-full hover:cursor-pointer hidden lg:block duration-1000 relative '>
            
            <IoMdCart  className='text-xl  '/>
            
            <div className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 bg-red-500 text-white rounded-full text-xs font-bold">{getTotalItems()}</div>
            
            </motion.div>
            </NavLink>
            

            </div>
            

            <div className="lg:hidden">
                        <button onClick={handleClick1} className="cursor-pointer">
                            {
                                isMenuOpen ? <FaXmark className="w-5 h-5"/> : <FaBars className="w-5 h-5" />
                            }

                        </button>
            </div>

        </div>
        <div className="bg-black">
                    <ul className={`lg:hidden gap-12 text-lg block space-y-4 px-5 py-6 font-semibold bg-red-50
                    ${isMenuOpen ? "fixed w-full transition-all ease-out duration-300" : "hidden"} `}>

                        {

                            navMenu.map((item,index)=>(
                                <div  key={index}>
                                <li className={`duration-300 hover:cursor-pointer mb-2 text-black `}>
                                <NavLink
                                    to={item.navLink}
                                    // smooth={true}
                                    // duration={500}
                                    // offset={item.offset}
                                    onClick={handleClick1}>
                                    {item.title}
                                </NavLink>

                                </li>
                                </div>
                            ))

                        }

                    </ul>
                </div>
    </nav>
  )
}

export default Navbar;