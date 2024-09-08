import React from 'react'
import Contacts from '../assets/contact.png'

const Contact = () => {
  return (
    <div className='container my-28 lg:my-2'>
        <h2 className='text-5xl font-black text-orange-600 text-center'>Contact Us</h2>
       
        <h2 className='text-center text-3xl'>Get in touch</h2>
        <h2 className='text-center text-xl'>Don't hesitate to put your valuable suggestions, ideas, and complaints here.</h2>
        
      
       
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='m-10'>
               
            <form className="max-w-sm mx-auto " >
            <div className="mb-5">
                <label className="text-xl block mb-2  font-medium text-gray-900 ">
                    Name</label>
                <input type="text" id="user_name" name="user_name"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Name" required/>
            </div>
            <div className="mb-5">
                <label  className="text-xl block mb-2  font-medium text-gray-900 ">
                    Email</label>
                <input type="email" id="user_email" name="user_email"
                       className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                       placeholder="Enter Your Email Address" required/>
            </div>

            <div className="mb-5">

            <label htmlFor="message" className="block mb-2 text-xl font-medium text-gray-900 ">
                Message</label>
            <textarea id="message" rows={4} name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment...">

            </textarea>
            </div>

            <button type="submit" value="Send"  
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-300">
               Send
            </button>
            </form>
          
            </div>


            <div className='flex justify-center'>
             <img src={Contacts} className='lg:w-[500px] w-[300px] h-[300px] lg:h-[500px]'/>
            </div>
            
        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 '>

                <div className='flex justify-center items-center pt-5'>
                    <div className='text-center'>
                     <h2 className='text-3xl'>Address</h2>                
                     <h2 >No.124/15,Beliatta Road,Walasmulla</h2>
                    </div>
                </div>

                <div className='flex justify-center items-center pt-5'>
                    <div className='text-center '>
                    <h2 className='text-3xl'>Contact</h2>                
                    <h2 >047-1234567</h2> 
                    </div>
                </div>


                <div className='flex justify-center items-center pt-5'>
                    <div className='text-center'>
                    <h2 className='text-3xl '>Email</h2>                
                    <h2 >chefmook@gmail.com</h2> 
                    </div>
                </div>
                
             
                               

        </div>
        


    </div>
  )
}

export default Contact