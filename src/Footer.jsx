import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import React from 'react'
import "./footer.css";


export default function Footer() {
  return (
    <footer className="footerS bg-[#0d1b3e] h-100 text-white    ">
    
            <div className="text-center mb-10">
              <h2 className="text-4xl font-semibold">GET IN TOUCH</h2>
            </div>
    
        
            <div className="footerF flex flex-col md:flex-row justify-center items-center text-center ">
            
              <span className='spam border border-white w-200 absolute '></span>
              <div className="falo flex flex-col items-center px-6 max-w-xs relative top-8 right-50">
                <div className=" transition-colors duration-300 bg-blue-600 rounded-full p-4 mb-3 hover:bg-yellow-400 h-20 w-20">
                  <FaMapMarkerAlt className="local text-white text-2xl h-10 w-10 absolute left-35 top-5" />
                </div>
                <p className='fap'>
                  6th, GF, Saket Commercial Complex,<br />
                  New Railway Road, Gurugram, 122001
                </p>
              
                <div className="hidden md:block absolute right-0 top-8 h-24 "></div>
              </div>
    
              {/*========= Phone============== */}
              <div className="faph flex flex-col items-center px-6 max-w-xs relative top-5 right-15">
                <div className="transition-colors duration-300 bg-blue-600 rounded-full p-4 mb-3 hover:bg-yellow-400 h-20 w-20">
                  <FaPhoneAlt className="text-white text-2xl absolute left-18 top-5 h-10 w-8" />
                </div>
                <p>+91 9212 322 322</p>
               
                <div className="hidden md:block absolute right-0 top-4 h-24 "></div>
              </div>
    
              {/* ==========Email============= */}
              <div className="faem flex flex-col items-center px-6 max-w-xs relative top-5 left-45">
                <div className="transition-colors duration-300 bg-blue-600 rounded-full p-4 mb-3 hover:bg-yellow-400 h-20 w-20">
                  <FaEnvelope className="text-white text-2xl absolute left-19 top-5 h-10 w-8 " />
                </div>
                <p>info@repairindia.in</p>
              </div>
            </div>
    
           
            <hr className=" divide my-10 border-white w-4/5  mx-auto mt-20" />
    
            <div className="text-center text-sm text-white">
              © 2025 All Rights Reserved By Repair India
            </div>
          </footer>
  )
}
