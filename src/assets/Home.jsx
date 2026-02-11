import { motion } from "framer-motion";
import { FaTools, FaHome, FaWrench } from "react-icons/fa"; 
import Detail from "../Detail";
import Footer from "../Footer";
import "./home.css";
import "./service.css"; 
import ClientReviews from "../ClientReviews";

export default function Home() {
  return (
    <>
    <section className="bg-[#D1E3FF] min-h-screen  ">
      {/* ================= Hero Section ============ */}
      <div className="container mx-auto  flex flex-col-reverse md:flex-row items-center gap-12 ">
      
        <div className="flex-1 text-center md:text-left pt-40 relative ">
          <h1 className=" homeh text-[#0355CC] text-4xl font-medium mb-4 slide-in-right">
            India’s Leading Multibrand <br />Home Appliance Repair & Services
          </h1>
          <p className=" homep text-base text-gray-700 mb-6 font-semibold slide-in-left">
            Repair India provides a platform that allows experienced professionals cum associate <br />
            service partner to connect with user looking for specific doorstep services. Repair <br />
            India we know that today customer deserve the best comfortable home sevices <br />
            overall. And our selected trusted and verified service technicians are among the best <br />
            in the industry.
          </p>
          <div className="flex justify-center md:justify-start gap-4 ">
            <button className="homeb bg-[#FF8A1D] text-white px-6  py-2 rounded hover:bg-amber-500 transition">
              CONTACT US
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="home-image flex-1 ">
          <img
            src="home.png"
            alt="Repair Service"
            className="homeimg relative left-40 bottom-10 h-120 w-100 float-img"
          />
        </div>
      </div>

    


      {/* ================= Other Sections ============ */}
    </section>
  <div className=" cardsec flex justify-center gap-6 mt-16 h-10 bottom-0 bg-white">
 
  <div className="cardd flex justify-center gap-6 z-100 relative  bottom-50  ">
    <div className="w-100 h-60 perspective">
    <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ease-in-out hover:rotate-y-180 cursor-pointer">

      <div className="absolute bottom-0 w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-white text-gray-700 backface-hidden">
        <FaTools className="text-5xl text-gray-400 mb-3 h-30 w-40" />
        <p className="text-2xl font-semibold">REPAIR</p>
      </div>
    
      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-sky-800 text-white rotate-y-180 backface-hidden">
        
        <p className="text-2xl items-center text-center  text-white">Quick,reliable repairs to get your devices rinning like new</p>
      </div>
    </div>
  </div>

  {/*=========== Service Card============= */}
  <div className="w-100 h-60 perspective">
    <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ease-in-out hover:rotate-y-180 cursor-pointer">
      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-orange-500 text-white backface-hidden">
        <FaHome className="text-5xl text-white mb-3 h-30 w-40" />
        <p className="text-2xl font-semibold">SERVICE</p>
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-sky-800 text-white rotate-y-180 backface-hidden">
       
        <p className="text-2xl items-center text-center  text-white">Expert Service you can trust,right at your doorstep</p>
      </div>
    </div>
  </div>

  {/* =========================Maintain Card================== */}
  <div className="w-100 h-60 perspective">
    <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-500 ease-in-out hover:rotate-y-180 cursor-pointer">
      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-white text-gray-700 backface-hidden">
        <FaWrench className="text-5xl text-gray-400 mb-3 h-30 w-40" />
        <p className="text-2xl font-semibold">MAINTAIN</p>
      </div>
      <div className="absolute w-full h-full flex flex-col items-center justify-center rounded-xl shadow-md border bg-sky-800  rotate-y-180 backface-hidden">
        <p className="text-2xl items-center text-center  text-white">Hassle-free maintenance to keep your appliance performing at their best</p>
      </div>
    </div>
  </div>
  </div>
  
</div>
      <Detail />
      <ClientReviews/>
      
      <Footer />
    
    </>
  );
}

