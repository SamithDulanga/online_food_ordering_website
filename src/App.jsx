import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Order from './components/Order';
import HotDeals from './components/HotDeals';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2">
      <div className='relative overflow-hidden'>
      <Navbar/>
      <Hero/>
      <About/>
      <HotDeals/>
      <Order/>
      <Contact/>
      <Footer/>
      
      
      
  
     
     
      </div>
      
    </div>
  )
}

export default App;