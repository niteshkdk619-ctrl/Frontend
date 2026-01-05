import React from 'react'
import CustomButton from '../common/CustomButton'
import {Button} from '../ui/Button'

const Hero = () => {
  return (
   <section className=' h-150 flex items-center justify-center px-40 relative overflow-hidden'>

        {/* content */}
     <div className='flex flex-col items-center gap-10 text-white z-10'>
         <h1 className='text-5xl font-bold'> Plan your trip with Wanderwise</h1>
        <p>
            Discover personalized travel recommendations, itineraries, 
            and tips tailored just for you.
             Your adventure starts here!
            Start your journey with WanderWise today.

        </p>
        <CustomButton text="Get Started"/>
        <Button>Hello</Button>
      </div>

      {/* background image */}
      <div className='absolute -z-10 left-0 top-0 w-full  overflow-hidden'>
        <img className='w-full' src='https://imgs.search.brave.com/P5wOETSCJC8ZTAYjk5Qe-HR-6Yplv7b0HScwgF0vZEw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/am9lZ2FyemFwaG90/b2dyYXBoeS5jb20v/aW1hZ2VzL3hsL0Nh/bmFkaWFubWVtb3Jp/ZXMuanBn' alt='wanderwise'/>

        </div>

        {/* overlay */}
        <div className='absolute -z-5 left-0 top-0 w-full h-full bg-black opacity-0'></div>

   </section>
  )
}

export default Hero