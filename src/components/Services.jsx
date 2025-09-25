import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import gas from "../assets/icons/gas.png";
import jumpstart from "../assets/icons/jumstart.png";
import tire from "../assets/icons/tirechanges.png";
import autoTrans from "../assets/icons/auto_trans.png";
import junkcar from "../assets/icons/junkcar.png";
import flatbed from "../assets/icons/flatbed.png";

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
    { id: 1, title: "Fuel/Gas Delivery", image: gas, description: "Out of gas? We provide fast and reliable fuel delivery straight to your location. Our team ensures you’re back on the road quickly without the stress or hassle." },
    { id: 2, title: "Jump Starts", image: jumpstart, description: "Dead battery? We provide quick and reliable jump start assistance wherever you are. Our team will get your vehicle running again so you can get back on the road without worry." },
    { id: 3, title: "Tire Changes", image: tire, description: "Flat tire? We offer fast and dependable tire change assistance at your location. Our team will get you back on the road safely and without the hassle." },
    { id: 4, title: "Auto Transport", image: autoTrans, description: "Need your vehicle moved? We provide safe and reliable auto transport for personal, business, or relocation needs. Our team ensures secure handling and timely delivery for your peace of mind." },
    { id: 5, title: "Junk Car Removal", image: junkcar, description: "Got an old or unwanted car? We offer fast and hassle-free junk car removal right from your location. Our team ensures quick pickup and proper disposal, giving you back your space." },
    { id: 6, title: "Flatbed Towing", image: flatbed, description: "Need a safe way to transport your vehicle? We provide secure and reliable flatbed towing for cars, SUVs, and more. Our team ensures your vehicle is handled with care from start to finish." },
  ];

  return (
    <div
      className="min-h-screen items-center w-full p-2 mt-11 sm:p-6 lg:p-4 
                 bg-cover bg-center bg-no-repeat bg-white"
      id="service"
    >
      <div className="text-center mt-4" data-aos="fade-up" data-aos-duration="350">
       <div className='flex justify-center mb-4'>
         <h1 className='bg-yellow-100 border-2 border-yellow-200 rounded-3xl p-2 px-4 font-medium'>Why Choose Us</h1>
       </div>
        <h1 className="text-5xl font-roboto font-bold mb-2 uppercase">
          We offer a variety of towing services
        </h1>
        <p className="text-neutralGrey font-roboto text-lg">
          Stuck on the road? We're here to help 24/7. Professional towing and roadside assistance when you need it most.
        </p>
      </div>

      {/* cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative px-6 py-10 text-center rounded-lg shadow cursor-pointer
                       hover:-translate-y-2 hover:border-b-4 hover:border-yellow-400
                       transition-all duration-300 flex flex-col items-center bg-white h-full group overflow-hidden"
          >
            {/* Default content (icon + title) */}
            <div className="z-10 flex flex-col items-center transition-all duration-500 group-hover:opacity-0">
              <div className="flex justify-center items-center h-20 w-20 mb-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="h-full w-full object-contain"
                />
              </div>
              <h4 className="text-lg font-bold text-neutralDGray mb-2">{service.title}</h4>
            </div>

            {/* Overlay (appears on hover) */}
            <div
                className="absolute inset-0 flex flex-col items-center justify-center text-center
                          bg-yellow-200 bg-opacity-70
                          opacity-0 group-hover:opacity-90 transition-opacity duration-500">
                <h4 className="text-black font-extrabold font-roboto tracking-wider mb-3">
                  {service.title}
                </h4>
                <h4 className="text-black text-sm px-6 font-normal">
                  {service.description}
                </h4>
              </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
