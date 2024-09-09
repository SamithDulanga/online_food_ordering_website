import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import {ShopContext} from "../components/ShopContext/ShopContext";
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import arrow_icon from '../assets/breadcrum_arrow.png'


const ProductDisplay = () => {
    const {addToCart} = useContext(ShopContext);
    const {all_product} = useContext(ShopContext);
    const {productName}=useParams();
    const {name}=useParams();
    const [isClicked, setIsClicked] = useState(false);
    const Product = all_product.find(product => product.path === name);

    const handleAddToCart = () => {
        setIsClicked(true);
        addToCart(Product.id);
        setTimeout(() => setIsClicked(false), 1000); 
    };
  return (
    <div className='container my-28 lg:my-7 min-h-[650px]  '>

            <div className="m-5 md:flex justify-center items-center hidden ">

            <h2 className="text-xl font-semibold flex gap-3 text-gray-500">  HOTDEALS <img src={arrow_icon}/> {Product.category.toUpperCase()} <img src={arrow_icon}/> {Product.name.toUpperCase()} </h2>

            </div>
        


        <div className="grid lg:grid-cols-2 grid-cols-1 mb-36 gap-5 p-5 max-w-7xl border-2  " >
                <div className=" flex justify-center items-center gap-5 ">

                    <div>
                        <img src={Product.image} className="w-[670px]" />

                    </div>


                </div>
                <div className="flex flex-col ">
                    <h2 className="text-3xl font-bold">{Product.name}</h2>
                    <div className="flex items-start justify-start gap-1">
                        <img src={star_icon}/>
                        <img src={star_icon}/>
                        <img src={star_icon}/>
                        <img src={star_icon}/>
                        <img src={star_dull_icon}/>
                        <p>(122/150)</p>

                    </div>

                    <div className="mt-5 text-xl font-bold">
                        <h2>Price : ${Product.old_price}</h2>
                        <h2>Discounted Price : ${Product.new_price}</h2>
                        
                    </div>
                    <div className="mt-5">
                        <h2>Details about the Food Ingredients:</h2>
                        {
                            Product.ingredients.map((detail,index)=>{
                                return(
                                    <li key={index}>{detail}</li>
                                )
                            })
                        }
                        

                    </div>

                    <div className="mt-5">
                    <h2 className='font-normal'>Description : {Product.description}</h2>
                    </div>
                    <div className="mt-5">
                    <button
                            onClick={handleAddToCart}
                            className={`border-2 px-4 py-2 ${isClicked ? 'bg-green-500  hover:bg-green-700' : 'bg-red-500  hover:bg-red-700'} duration-300 text-xl text-white font-bold`}
                        >
                            ADD TO CART
                        </button>
                    </div>
                    <div className="font-bold mt-5 text-gray-500">
                        <h2>Category : {Product.category.toUpperCase()}</h2>
                        <h2>Tags : MODERN,LATEST</h2>
                    </div>


                </div> 


            </div> 
    </div>
  )
}

export default ProductDisplay