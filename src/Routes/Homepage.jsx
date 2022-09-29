import React from 'react'
import Footer from '../components/Footer';
import HomePageLayout from '../components/HomePageLayout';
import Navbar from '../components/Navbar';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <HomePageLayout/>
        <Footer/>
    </div>
  )
}

export default Homepage;