import React from 'react'
import Navbar from '../components/landingComponents/Navbar'
import Hero from '../components/landingComponents/Hero'
import Features from '../components/landingComponents/Features'
import Contact from '../components/landingComponents/Contact'
import Footer from '../components/landingComponents/Footer'
import Reviews from '../components/landingComponents/Reviews'


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Contact />
            <Footer/>
            <Reviews/>
        </>
    )
}

export default LandingPage