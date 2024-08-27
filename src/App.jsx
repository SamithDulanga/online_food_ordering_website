import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="overflow-x-hidden bg-colors-white2">
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App;