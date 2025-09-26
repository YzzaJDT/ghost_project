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
        <div className=' lg:px-14 max-w-screen-2xl mx-auto py-16' id='about'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' data-aos="fade-up">
            <div className="md:w-2/5 mx-auto">
                <img
                  src={aboutImg}
                  alt=""
                  className="w-full max-w-sm h-auto rounded-lg mx-auto"
                />
                <div className="text-center mt-4">
                  <h2 className="text-xl text-gray-600 font-roboto font-semibold">
                    Ralph McKenzie
                  </h2>
                  <p className="text-md text-gray-600 font-roboto">CEO</p>
                </div>
              </div>
            <div className='md:w-4/5 mx-auto'>
              <h2 className='text-4xl text-neutralDGray font-roboto font-semibold md-4 md:w-4/5 text-center mb-8'>
              ROLLING HILLS TOWING</h2>
              <p className='md:w-4/4 text-sm text-gray-800 mb-8 px-4 font-roboto text-justify'>At <span className='text-[#F0B609] font-bold'>Rolling Hills Towing</span> , our <span className='text-[#F0B609]'>mission</span> is simple: to provide fast, reliable, and affordable towing services to people in need — and to never leave anyone stranded on the road.
                  For over <span className='text-[#F0B609]'>6 years </span>, we’ve been serving drivers across Central Florida with a commitment to safety, professionalism, and care. <br/> <br/> What started as a small local operation has grown into a trusted towing company that assists with both residential and commercial auto towing services, always putting people first.
                  Our <span className='text-[#F0B609]'>vision</span> is to become one of the most dependable towing providers throughout <span className='text-[#F0B609]'> Central Florida</span> and beyond, ensuring that every driver has someone they can call anytime, anywhere. <br/><br/>

                  At <span className='text-[#F0B609] font-bold'> Rolling Hills Towing</span>, we understand that breakdowns and accidents are stressful. That’s why our professional team responds quickly, treats every customer with respect, and makes sure your vehicle is handled with care.
                  When you call us, you’re not just getting a tow — you’re gaining a reliable partner who’s here to keep you moving. <br/><br/>
                  </p>
           
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default About
