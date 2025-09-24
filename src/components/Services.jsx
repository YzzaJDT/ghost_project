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
      { id: 1, title: "Fuel/Gas Delivery", image: gas },
      { id: 2, title: "Jump Starts", image: jumpstart },
      { id: 3, title: "Tire Changes", image: tire },
      { id: 4, title: "Auto Transport", image: autoTrans },
      { id: 5, title: "Junk Car Removal", image: junkcar },
      { id: 6, title: "Flatbed Towing", image: flatbed },
        ];

  return (
    <div className="min-h-screen items-center w-full p-4 mt-11 sm:p-6 lg:p-6 bg-cover bg-center bg-no-repeat bg-white" id="service">
      
      <div className="text-center mt-4" data-aos="fade-up">
        <h1 className="text-5xl font-roboto font-semibold mb-2 ">
          We offer a variety of towing services
        </h1>
        <p className="text-neutralGrey font-roboto text-lg">
          Stuck on the road? We're here to help 24/7. Professional towing and roadside assistance when you need it most.
        </p>
      </div>

      {/* cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-6 text-center rounded-lg shadow cursor-pointer 
                       hover:-translate-y-3 hover:border-b-4 hover:border-indigo-700 
                       transition-all duration-300 flex flex-col items-center bg-white h-full"
          >
            <div className="flex justify-center items-center h-20 w-20 mb-4">
              <img src={service.image} alt={service.title} className="h-full w-full object-contain font-extrabold " />
            </div>
            <h4 className="text-lg font-bold text-neutralDGray mb-2">{service.title}</h4>
            <p className="text-sm text-neutralGrey">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
