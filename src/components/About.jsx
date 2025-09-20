import React, {useEffect, useState } from 'react'
import aboutImg from '../assets/icons/MSSC.png'
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
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' data-aos="fade-up">
            <div className='md:w-3/3 mx-auto'>
              <img src={aboutImg} alt='' />
            </div>
            <div className='md:w-3/5 mx-auto'>
              <h2 className='text-4xl text-neutralDGray font-semibold md-4 md:w-4/5'>
              Mustard Seed Systems Corporation</h2>
              <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Mustard Seed Systems Corporation (MSSC) is a private 
              corporation that has grown to become a trusted business and technology solutions provider to thousands 
              of Small and Medium Enterprises (SMEs) in the Philippines. We are a one-stop shop of top of the line 
              global brands that help improve business processes and systems. Mustard Seed is highly recognized for
               its successful track record of fast implementation and business acumen. Our product line keeps on 
               progressing to support the needs of our growing clientele at 25,000 corporate customers.</p>
            <button className='btn-primary'>Learn More</button>
            </div>
          </div>
        </div>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
          <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12' data-aos="fade-up">
          <div className='md:w-3/5 mx-auto' data-aos="fade-right">
              <h2 className='text-4xl text-neutralDGray text-center font-semibold md-4 md:w-4/5'>
             Vision</h2>
              <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>To be recognized as a one-stop shop business solutions, 
              products and services provider for the small and medium enterprises, education sector and business partners 
              worldwide.</p> 
          </div>

          <div className='md:w-3/5 mx-auto' data-aos="fade-left">
              <h2 className='text-4xl text-neutralDGray text-center font-semibold md-4 md:w-4/5'>
              Mission</h2>
              <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>To provide and deliver world-class, affordable 
              and relevant business solutions, technologies, products and services that will drive strategic growth 
              and efficiency for small and medium enterprises, educational institutions and business partners through 
              accessible channels and dedicated qualified professionals.</p>
          </div>
          </div>
        </div>


        {/* Company stats */}
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16' >
          <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2' data-aos="fade-right">
            <h2 className='text-4xl text-neutralDGray font-semibold md-4 md:w-2/3'>
                Helping a local<br/> 
                <span className='text-blue-950' >business reinvent itself</span></h2>
              <p>Our awards, growing number of branches, partnerships with world-class brands 
                and our strong workforce serve as a testament of our unparalleled dedication to 
                helping businesses like yours.</p>
            </div>
        {/*   stats */}
              <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12' data-aos="fade-left" >
                <div className='space-y-8'>
                  <div className='flex items-center gap-4'>
                  {/* <img src='/src/assets/icons/member.png'/> */}
                  <span className="text-3xl text-blue-950">|</span>
                  <div>
                    <h4 className='text-2xl text-neutralGrey font-semibold'>44</h4>
                    <p >World-class Brands</p>
                  </div>
                   
                  </div>
                  <div className='flex items-center gap-4'>
                  <span className="text-3xl text-blue-950">|</span>
                    <div>
                      <h4 className='text-2xl text-neutralGrey font-semibold'>22</h4>
                      <p >Awards & Recognitions</p>
                    </div>
                    
                  </div>
                </div>
                <div className='space-y-8'>
                  <div className='flex items-center gap-4'>
                  <span className="text-3xl text-blue-950">|</span>
                    <div>
                      <h4 className='text-2xl text-neutralGrey font-semibold'>10</h4>
                      <p >Branches</p>
                    </div>
                    
                  </div>
                  <div className='flex items-center gap-4'>
                  <span className="text-3xl text-blue-950">|</span>
                    <div>
                       <h4 className='text-2xl text-neutralGrey font-semibold'>300+</h4>
                    <p>Workforce</p>
                    </div>
                   
                  </div>
                </div>
              </div>  
     

          </div>
        </div>
    </div>
  )
}

export default About