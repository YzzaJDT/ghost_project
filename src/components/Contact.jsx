import React from 'react'
import { Footer } from 'flowbite-react';
import qr from '../assets/icons/qrIcon.png'
import arrow from '../assets/icons/Vector.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

import { FaFacebook, FaInstagram, FaYelp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div className="lg:px-14 rounded-3xl max-w-screen-3xl mx-auto bg-[#F9DC5C] py-16" id="contact">
      <div className="w-full" data-aos="fade-up">
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left section */}
          <div>
            <div className="space-y-4 mb-8 px-4">
              <a href="" className="items-center">
                <span className="text-lg font-bold text-gray-800">Rolling Hills Towing </span> <br />
                <p className="text-sm font-semibold text-gray-800 text-justify">
                 Have questions or need immediate assistance?  Reach out anytime we’re ready to help get you back on the road, safely and affordably.
                </p>
              </a>
            </div>

            <div className="gap-8 px-4">
              <div>
                <Footer.Title title="Contact Info"  className='font-semibold text-gray-800'/>
                <Footer.LinkGroup col>
                  <Footer.Link href="#" className='text-gray-800'> <span className='font-bold '>Address:</span> <span>29317 CR 561 Tavares, Fl 32778</span></Footer.Link>
                  <Footer.Link href="#" className='text-gray-800'> <span className='font-bold '>Phone:</span><span> 352-456-8294</span></Footer.Link>
                  <Footer.Link href="#" className='text-gray-800'> <span className='font-bold '>Outlook:</span><span> rollinghillstowing@outlook.com</span></Footer.Link>
                </Footer.LinkGroup>
              </div>
              
            </div>
            
              {/* Social Icons */}
                  <div className="flex gap-6 mt-10 pl-4 text-2xl text-gray-800">
                         
                          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 ">
                            <FaFacebook />
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                          </a>
                          <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
                            <FaYelp />
                          </a>
                        </div>     

            {/* feedback */}
            <div className='grid md:grid-cols-2 mt-8 px-5'>
                    <div className='text-center'>
                   <img
                          src={qr}
                          alt="QR Code"
                          className="mx-auto w-full max-w-[200px] "
                        />
                        <h4 className='font-roboto mt-2'>SCAN ME</h4>
                    </div>
                 <div className="text-center">
                      <h4 className="font-bold font-roboto">Review Us on Google</h4>
                      <p className="font-roboto mt-3">
                        Your opinion and feedback matters. Do leave us a review and tell us about your experience!
                      </p>
                       <div className="text-left -ml-3 mt-2">
                          <img src={arrow} alt="Arrow" className="hidden sm:block w-14 " />
                        </div>
                    </div>

              </div> 
          </div>

          {/* Right section - Map */}
          <div className="w-full md:h-[550px]">
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

