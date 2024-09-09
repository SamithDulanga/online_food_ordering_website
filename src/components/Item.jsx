import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import {ShopContext} from "../components/ShopContext/ShopContext";
import { FaArrowLeft } from "react-icons/fa";

const Item = () => {

    const {all_product} = useContext(ShopContext);
    const {productName}=useParams();
    const filteredProducts = all_product.filter(product => product.category === productName);
    console.log(filteredProducts);
  return (
  
    <div className='container my-28 lg:my-7 min-h-[650px]'>
       
        <div className='grid grid-cols-2 px-3'>
          <div >
          <NavLink to="/chefmook/hotdeals" className="flex justify-center items-center  text-gray-600 cursor-pointer hover:text-orange-600 ">
                    <FaArrowLeft 
                        className="sm:text-2xl text-xl" 
                    />
                    <h2 className='sm:text-2xl text-xl font-bold'>Go Back</h2>
                </NavLink>
          </div>
                
               
                <div>
                <h2 className='sm:text-3xl  text-2xl font-black text-orange-600 text-center '>
                    {productName.toUpperCase()}
                </h2>
                </div> 
            </div>

<div className='grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-3 m-10'>
          {
            filteredProducts.map((item)=>{
              return(
                <NavLink to={`/chefmook/hotdeals/${item.category}/${item.path}`} key={item.id}>
                <div   className='flex justify-center items-center'>
                <div
                
                
                className="border  w-[350px] rounded-2xl shadow-lg p-4 mb-10 hover:cursor-pointer hover:scale-105 duration-500 flex flex-col items-center justify-center">
                  <img src={item.image} className='p-3 w-[300px] h-[200px]'/>
                  <h2 className='text-green-700 text-2xl font-black text-center'>{item.name}</h2>
                  <h2 className='text-gray-600 text-xl font-black text-center'>New Price: ${item.new_price}</h2>
                  <h2 className='text-gray-600  font-black text-center line-through mb-5'>Old Price: ${item.old_price}</h2>

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

export default Item