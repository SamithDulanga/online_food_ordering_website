import React from 'react'

import {FaFacebookSquare, FaLinkedin} from "react-icons/fa";
import {FaSquareInstagram, FaSquareXTwitter, FaSquareYoutube} from "react-icons/fa6";
import { Link } from 'react-scroll';

const Footer = () => {
 


    const navMenu=[
        {
            id:1,
            title:"Home",
            path:"home",
            duration:3700,
            offset:-110
          
        },
        {
            id:2,
            title:"About",
            path:"about",
            duration:1900,
            offset:-90
        },
        {
            id:3,
            title:"Hot Deals",
            path:"hotdeals",
            duration:1200,
            offset:-100
        },
        {
            id:4,
            title:"Contact",
            path:"contact",
            duration:500,
            offset:-100
            
        },
    ];
  return (
    <div className=' bg-green-600 pt-2 '>
    <div>
    <div className="flex items-center justify-center text-3xl gap-2 mt-3 ">
        
        <div className='p-2 bg-white rounded-full'><FaFacebookSquare className="cursor-pointer rounded-full" /></div>
        <div className='p-2 bg-white rounded-full'><FaSquareInstagram className="cursor-pointer rounded-full" /></div>
        <div className='p-2 bg-white rounded-full'><FaLinkedin className="cursor-pointer rounded-full" /></div>
        <div className='p-2 bg-white rounded-full'><FaSquareXTwitter className="cursor-pointer rounded-full" /></div>
        <div className='p-2 bg-white rounded-full'><FaSquareYoutube className="cursor-pointer rounded-full" /></div> 

    </div>
    
    <ul className="flex justify-center font-bold sm:text-xl p-2 gap-6">
    {
        navMenu.map((item)=>{
            return(
                <li key={item.id} className='gap-5 '>
                   <Link
                                    to={item.path}
                                    smooth={true}
                                    duration={item.duration}
                                    offset={item.offset}
                                    className=" hover:cursor-pointer">
                                    {item.title}
                                </Link>
                </li>
            )
        })
    }
    </ul>

    </div>

    <div className='flex justify-center bg-green-700'>
    <p className='font-bold'>&copy; 2024 ChefMook. All rights reserved.</p>
    </div>
    
    </div>
  )
}

export default Footer