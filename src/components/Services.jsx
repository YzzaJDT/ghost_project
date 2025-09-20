import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  const services = [
    {
      id: 1, title: "Equipment Transport Towing",
      description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes",
      image: "/src/assets/icons/icon1.png" 
    },
    {
      id: 2, title: "Private Property Towing",
      description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes",
      image: "/src/assets/icons/icon2.png" 
    },
    {
      id: 3, title: "Emergency Towing",
      description: "Lorem ipsum dolor sit amet consectetur. Enim porta eget non nulla montes",
      image: "/src/assets/icons/icon3.png" 
    }
  ];

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto bg-white' id='service'>
     
        <div className='text-center my-8'  data-aos="fade-up">
            <h2 className='text-4xl text-yellow-300 font-semibold mb-2'> We offer a variety of towing services</h2>
            <p className='text-neutralGrey'>Stuck on the road? We're here to help 24/7. Professional towing and roadside assistance when you need it most. </p>
      
        </div>
        {/* cards */}
          <div className=' mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-22'>
             {
              services.map(service => <div key={service.id} className='px-4 py-0 text-center md:w-[300px] 
              mx-auto md:h-90 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
              hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full border-black'> 
                  <div> 
                    <div className=' h-30 w-20 mx-auto rounded-tl-3xl rounded-br-xl m-5'>
                      <img src={service.image} alt='' />
                    </div>
                    <h4 className='text-2xl font-bold text-neutralDGray mb-2 mx-2'>{service.title}</h4>
                    <p className='test-sm text-neutralGrey'>{service.description}</p>
                  </div>      

              </div>) 
             }
          </div>

    </div>
  )
}

export default Services