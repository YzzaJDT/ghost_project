import React from 'react'
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsMicrosoftTeams, BsTwitter } from 'react-icons/bs';
import logo from '../assets/icons/logo.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  return (
    <div className="lg:px-14 max-w-screen-4xl mx-auto bg-neutralSilver py-16" id="contact">
      <div className="w-full" data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left section */}
          <div>
            <div className="space-y-4 mb-8 px-4">
              <a href="" className="items-center">
                <span className="text-lg font-bold text-blue-900">Rolling Hills Towing </span> <br />
                <span className="text-sm font-semibold text-blue-950">
                  Prepared to provide you with top-quality towing services
                </span>
              </a>
            </div>

            <div className="  gap-8 px-4">
              <div>
                <Footer.Title title="Contact Info" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Address: <span>123 Towing Street, Sample, NS</span></Footer.Link>
                  <Footer.Link href="#">Phone:<span> (555) 123-4567</span></Footer.Link>
                  <Footer.Link href="#">Email:<span> info@example.com</span></Footer.Link>
                </Footer.LinkGroup>
              </div>

            </div>
          </div>

          {/* Right section - Map */}
          <div className="w-full h-96 md:h-[400px]">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701348.4813930871!2d-82.70201912345678!3d28.538336999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77af8f11b6f7f%3A0x9d13e8b9d59a3f07!2sOrlando%2C%20FL!5e0!3m2!1sen!2sus!4v1691111111111!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact




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