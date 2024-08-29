import React from 'react'
// import Slider from "react-slick";
import Person1 from "../assets/person1.jpg";
import Person2 from "../assets/person2.jpg";
import Person3 from "../assets/person3.jpg";
import Person4 from "../assets/person4.jpg";
import Person5 from "../assets/person5.jpg";
import Person6 from "../assets/person6.jpg";
import Slider from "react-slick";
import {FaStar} from "react-icons/fa";




const Testimonial = () => {
  const testimonialData= [
  
    {
        id:1,
        name:"Naoya Yamaguchi",
        position: "Entrepreneur",
        text:"I was very happy with my first experience ordering from ChefMook. I placed my order late on a Saturday and chose next-day delivery. My food was prepared fresh and delivered on Sunday, exactly as promised. The packaging was secure and eco-friendly, keeping everything in perfect condition. I'll definitely be ordering from ChefMook again!.",
        img:Person4,
        date:"19/12/2023"
    },
    {
      id:2,
      name:"Emily Fernando",
      position:"Human Resource Manager",
      text:"I was thoroughly impressed with ChefMook's service. All the dishes I wanted were available, and the ordering and payment process was smooth and efficient. My order was promptly prepared and delivered, with the food arriving securely packaged and in excellent condition. Overall, a highly professional and satisfying experience.",
      img:Person2,
      date:"29/12/2023"
  },
 
    {
        id:3,
        name:"Sam Curren",
        position: "Fashion Designer",
        text:"I never imagined I would find such exceptional service and delicious food in Sri Lanka. ChefMook has truly exceeded my expectations. From the seamless ordering process to the prompt delivery, everything was handled with professionalism. The food was not only fresh but also packed with incredible flavors. I highly recommend ChefMook to anyone looking for a top-tier dining experience.",
        img:Person6
    }

]


  return (
   
      <div className='container my-20'>
        <h2 className='text-5xl font-black text-orange-600 text-center '>Testimonial</h2>
        <h3 className='text-center text-3xl pb-10'>What they said.</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3'>

       
                  
                        {testimonialData.map((data)=>(
                            <div key={data.id}>
                                <div className="flex flex-col shadow-lg border-2 gap-4 py-8 px-6 m-10 rounded-xl ">
                                    <div className="flex items-center gap-5">
                                        <img src={data.img} className="rounded-full w-20 h-20 object-cover"/>
                                        <div>
                                            <h1 className="text-xl font-bold text-black/70">{data.name}</h1>
                                            <h1>{data.position}</h1>
                                            <div className="flex items-center text-yellow-400">

                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                                <FaStar />
                                            </div>
                                        </div>
                                        {/*<p className=" font-serif text-gray-300 text-9xl">,,</p>*/}

                                    </div>
                                    <div>


                                        <div>
                                            <p className="text-gray-500 sm:text-justify">{data.text}</p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        ))}
                         </div>

                </div>
            
  )
}

export default Testimonial