import React, {useEffect, useState } from 'react'
import aboutImg from '../assets/icons/DUMMY.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
        {/* { about text} */}
        <div className=' lg:px-14 max-w-screen-2xl mx-auto py-10' id='about'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' data-aos="fade-up">
            <div className='md:w-2/5 mx-auto'>
              <img src={aboutImg} alt='' className='w-full max-w-sm h-auto rounded-lg'/>
              <h1 className='text-center'>CEO NAME</h1>
            </div>
            <div className='md:w-4/5 mx-auto'>
              <h2 className='text-4xl text-neutralDGray font-semibold md-4 md:w-4/5 text-center mb-8'>
              ROLLING HILLS TOWING</h2>
              <p className='md:w-4/4 text-sm text-neutralGrey mb-8 px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
           
            </div>
          </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' data-aos="fade-up">
          <div className='md:w-3/5 mx-auto' data-aos="fade-right">
              <h2 className='text-4xl text-neutralDGray text-center font-semibold md-4 md:w-4/5'>
             Vision</h2>
              <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 

          </div>

          <div className='md:w-3/5 mx-auto' data-aos="fade-left">
              <h2 className='text-4xl text-neutralDGray text-center font-semibold md-4 md:w-4/5'>
              Mission</h2>
              <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default About