import banner1 from '../assets/icons/bg3.png'
import { Link } from 'react-scroll';
import Navbar from './Navbar'
import { FaPhoneAlt } from "react-icons/fa"; 
const Home = () => {
  return (
    <div className="flex flex-row min-h-screen pt-24 pb-4">
      <Navbar />

      <div
        className="relative rounded-3xl flex flex-1 items-center sm:p-6 lg:p-6 bg-cover bg-center"
        id="home"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 rounded-3xl bg-black opacity-60"></div>

        {/* Parent container with vertical stacking */}
        <div className="relative flex flex-col space-y-6 z-10 max-w-xl pl-2">
          {/* Service section */}
          <div className="flex items-center" data-aos="fade-up">
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
              className="h-10 w-10 text-yellow-300 mr-4 flex-shrink-0"
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
              <div className="text-sm text-white opacity-80">
                Average arrival: 30 mins
              </div>
            </div>
          </div>

          {/* Certified section */}
          <div className="flex items-center" data-aos="fade-up">
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.684l1.517 4.55a1 1 0 01-.272 1.057l-2.2 2.2a16 16 0 006.586 6.586l2.2-2.2a1 1 0 011.057-.272l4.55 1.517a1 1 0 01.684.95V19a2 2 0 01-2 2h-1c-9.94 0-18-8.06-18-18V5z"
              />
            </svg>
            <div className="flex flex-col text-left">
              <div className="text-xl text-white font-bold">
                Certified and Insured
              </div>
              <div className="text-sm text-white opacity-80">
                Fully Certified Team
              </div>
            </div>
          </div>

      <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100} // adjust if navbar is fixed
          duration={500}
          className="group mt-5 gap-3 flex items-center bg-yellow-400 text-white font-semibold px-4 py-3 rounded-full 
                    hover:bg-yellow-300 transition-all w-full max-w-xs md:max-w-[250px] justify-center cursor-pointer"
        >
          <FaPhoneAlt className="text-white group-hover:text-white transition-colors duration-300" />
          Call us now
        </Link>

          </div>
        </div>
      </div>
  
  )
}

export default Home
