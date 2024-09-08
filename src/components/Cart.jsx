import React, { useContext } from 'react';
import Soup from '../assets/soup.jpg'
import { ShopContext } from './ShopContext/ShopContext';

const Cart = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}= useContext(ShopContext);

  return (
    <div className='sm:my-20 lg:my-14 my-2 container lg:py-0 py-16 min-h-[600px]'>
         <div className="flex items-center justify-center">
            <div className="max-w-7xl w-full p-5 ">
                <div className="grid grid-cols-7 gap-5 px-5 md:text-xl text-[12px] font-bold ">
                    <p className="col-span-1 md:block hidden" >Product</p>
                    <p className="col-span-2 flex items-center justify-center">Title</p>
                    <p className="col-span-1 flex items-center justify-center" >Price</p>
                    <p className="col-span-1 flex items-center justify-center">Quantity</p>
                    <p className="col-span-1 flex items-center justify-center" >Total</p>
                    <p className="col-span-1 flex items-center justify-center" >Remove</p>
                </div>
                <hr className="mt-5" />
                {all_product.map((e)=>{
                    if(cartItems[e.id]>0){
                         return (
                            <div key={e.id} className="w-full">
                                <div className="grid grid-cols-7 gap-5 px-5 font-semibold items-center justify-center md:text-xl text-[12px]">
                                    <img src={e.image} alt={e.name} className="col-span-1 w-48 p-2 md:block hidden" />
                                    <p className="col-span-2 flex items-center justify-center">{e.name}</p>
                                    <p className="col-span-1 flex items-center justify-center">${e.new_price}</p>
                                    <p className="col-span-1 flex items-center justify-center">{cartItems[e.id]}</p>
                                    <p className="col-span-1 flex items-center justify-center">${e.new_price * cartItems[e.id]}</p>
                                    <button  onClick={() => removeFromCart(e.id)}
                                        className="cursor-pointer border-2 bg-red-500 hover:bg-red-700 duration-300 hover:cursor-pointer text-white py-2 rounded-md">
                                            <span className="hidden sm:inline">Remove</span>
                                            <span className="inline sm:hidden">X</span>
                                    </button>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                })

                }

                <div className="grid lg:grid-cols-2 grid-cols-1 justify-between my-24 ">
                    <div className=" p-5 text-gray-500 lg:order-1 order-2">
                        <h2 className="md:text-3xl text-xl font-bold">Cart Total</h2>
                        <div className="text-xl">
                            <div className="flex justify-between m-3">
                                <p>Sub Total</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                            <hr/>

                            <div className="flex justify-between m-3">
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>
                            <hr/>
                            <div className="flex justify-between m-3 text-black font-bold">
                                <p>Total</p>
                                <p>${getTotalCartAmount()}</p>
                            </div>
                        </div>
                        <div className="flex items-center sm:justify-end justify-center">
                            <button className="px-4 py-2 border-2 bg-red-500 text-white font-bold hover:bg-red-700 duration-300 rounded-md">PROCEED TO CHECKOUT</button>
                        </div>

                    </div>
                    <div className="p-5 lg:order-2 order-1">
                        <p className="text-xl font-bold mb-3">If you have a promo code, Enter it here.</p>
                        <div className="flex md:flex-row flex-col  items-center justify-center gap-5 bg-gray-200 p-10">
                            <input type="text" placeholder="Promo Code"
                                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            <button className="border-2 py-2 px-6 bg-blue-500 hover:cursor-pointer hover:bg-blue-700 font-bold text-xl text-white duration-300 rounded-md">Submit</button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>
  )
}

export default Cart