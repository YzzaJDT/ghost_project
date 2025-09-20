import React from 'react'
import banner1 from '../assets/icons/background1.jpg'
import { useEffect } from 'react';


const Home = () => {
  const imageUrl = "https://i.ibb.co/L519V1D/image_c91f8e.png";

  return (
    <div
      className="min-h-screen flex items-center justify-start p-4 sm:p-6 lg:p-8 bg-cover bg-center bg-no-repeat" id='home'
      style={{ backgroundImage: `url(${banner1})` }}
    >
      {/* Parent container with vertical stacking */}
      <div className="flex flex-col space-y-6">
        
        {/* Service section */}
        <div className="flex items-center">
          <svg
            className="h-10 w-10 text-yellow-300 mr-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div className="flex flex-col text-left">
            <div className="text-xl text-white font-bold">24/7 Service</div>
            <div className="text-sm text-white opacity-80">Available Anytime</div>
          </div>
        </div>

        {/* Location section */}
        <div className="flex items-center" data-aos="fade-up">
          <svg
            className="h-10 w-10 text-yellow-300  mr-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2a9 9 0 00-9 9c0 7 9 13 9 13s9-6 9-13a9 9 0 00-9-9zm0 12a3 3 0 110-6 3 3 0 010 6z"
            />
          </svg>
          <div className="flex flex-col text-left">
            <div className="text-xl text-white font-bold">Quick Response</div>
            <div className="text-sm text-white opacity-80">Average arrival: 30 mins</div>
          </div>
        </div>

            {/* Location section */}
        <div className="flex items-center">
          <svg
            className="h-10 w-10 text-yellow-300  mr-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.517 4.55a1 1 0 01-.272 1.057l-2.2 2.2a16 16 0 006.586 6.586l2.2-2.2a1 1 0 011.057-.272l4.55 1.517a1 1 0 01.684.95V19a2 2 0 01-2 2h-1c-9.94 0-18-8.06-18-18V5z"
            />
          </svg>
          <div className="flex flex-col text-left">
           <div className="text-xl text-white font-bold">Certified and Insured</div>
            <div className="text-sm text-white opacity-80">Fully Certified Team</div>
          </div>
        </div>

      </div>
     
    </div>
  );
};

export default Home;
