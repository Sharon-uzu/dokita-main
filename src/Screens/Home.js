import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Treatment from '../Components/Treatment'
import Service from '../Components/Service'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        {/* <Hero/> */}
        {/* <Treatment/> */}
        <Service/>
        <Footer/>
    </div>
  )
}

export default Home