import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Order from './components/Order';
import HotDeals from './components/HotDeals';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import Cart from './components/Cart';
import { RouterProvider } from 'react-router-dom';
import { router } from './AppRoutes';

const App = () => {
  return (
//     <div className="overflow-x-hidden bg-white2">
//     <Navbar />
//     <div id="home">
//         <Hero />
//     </div>
//     <div id="about">
//         <About />
//     </div>
//     <div id="hotdeals">
//         <HotDeals />
//     </div>
//     <div id="order">
//         <Order />
//     </div>
//     <div id="testimonial">
//         <Testimonial />
//     </div>
//     <div id="contact">
//         <Contact />
//     </div>
//     <Footer />
// </div>

   <div>
   <RouterProvider router={router}/>
   </div>
   
  )
}

export default App;