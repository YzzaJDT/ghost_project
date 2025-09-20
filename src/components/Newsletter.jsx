import React from 'react'

const Newsletter = () => {
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug '>
                Pellentesque suscipit fringilla libero eu.</h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary'>Get a Demo --{">"}</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Newsletter



// import React from 'react'
// import banner1 from '../assets/icons/background1.png'
// // import banner2 from '../assets/icons/Growth.png'
// // install flowbite react
// import { Carousel } from 'flowbite-react';

// const Home = () => {
//     const imageUrl = "https://i.ibb.co/L519V1D/image_c91f8e.png";
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       {/* Main banner container with a rounded-3xl shape and shadow */}
//       <div
//         className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ease-in-out"
//         style={{
//           // Set the background image using the URL
//           backgroundImage: `url(${imageUrl})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         {/* Semi-transparent yellow overlay for the banner background */}
//         <div className="absolute inset-0 bg-yellow-500 opacity-90 z-0"></div>

//         {/* Content container for the text and icons */}
//         <div className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-12 p-8 sm:p-12 lg:p-16 text-white text-center">

//           {/* Service Item: 24/7 Service */}
//           <div className="flex flex-col items-center">
//             {/* Clock Icon (SVG) */}
//             <svg className="h-14 w-14 text-white mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <div className="text-2xl font-bold mb-1">24/7 Service</div>
//             <div className="text-base opacity-90">Available Anytime</div>
//           </div>

//           {/* Service Item: Quick Response */}
//           <div className="flex flex-col items-center">
//             {/* Lightning Bolt Icon (SVG) */}
//             <svg className="h-14 w-14 text-white mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
//             </svg>
//             <div className="text-2xl font-bold mb-1">Quick Response</div>
//             <div className="text-base opacity-90">Average arrival: 30 min</div>
//           </div>

//           {/* Service Item: Certified and Insured */}
//           <div className="flex flex-col items-center">
//             {/* Shield/Certificate Icon (SVG) */}
//             <svg className="h-14 w-14 text-white mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 5.04M12 10.5h.01M16 21v-4a2 2 0 00-2-2H8a2 2 0 00-2 2v4a2 2 0 002 2h8a2 2 0 002-2zM4 12v6a2 2 0 002 2h4a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2zM12 12v6a2 2 0 002 2h4a2 2 0 002-2v-6a2 2 0 00-2-2h-4a2 2 0 00-2 2z" />
//             </svg>
//             <div className="text-2xl font-bold mb-1">Certified and Insured</div>
//             <div className="text-base opacity-90">Fully Certified Team</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   ) 
// }

// export default Home