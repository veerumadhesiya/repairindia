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
   <section className="bg-[#D1E3FF] min-h-screen ">
     {/* ================= Hero Section ============ */}
     <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12 "> 
       <div className="flex-1 text-center md:text-left pt-40 relative "> 
         <h1 className=" homeh text-[#0355CC] text-4xl font-medium mb-4 slide-in-right"> India’s Leading Multibrand <br />Home Appliance Repair & Services </h1>
         <p className=" homep text-base text-gray-700 mb-6 font-semibold slide-in-left"> Repair India provides a platform that allows experienced professionals cum associate <br /> service partner to connect with user looking for specific doorstep services. Repair <br /> India we know that today customer deserve the best comfortable home sevices <br /> overall. And our selected trusted and verified service technicians are among the best <br /> in the industry. </p>
         <div className="flex justify-center md:justify-start gap-4 "> <button className="homeb bg-[#FF8A1D] text-white px-6 py-2 rounded hover:bg-amber-500 transition"> CONTACT US </button> </div> </div> {/* Image */} <div className="home-image flex-1 "> <img src="home.png" alt="Repair Service" className="homeimg 
relative 

left-0 md:left-20 lg:left-40
bottom-0 md:bottom-5 lg:bottom-10

w-52 sm:w-72 md:w-[500px] lg:w-[800px]
h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px]

object-contain
float-img
" </div> </div>
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

