import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import About from './About'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  )
}

export default Home
