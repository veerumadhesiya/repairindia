import React from "react";
import { motion } from "framer-motion";
import "./detail.css";

 

const detail = [
  { name: "Air Conditioner", img: "/card1.png" },
  { name: "Washing Machine", img: "/card2.png" },
  { name: "Geyser", img: "/card3.png" },
  { name: "Hob, Gas Stove", img: "/card4.png" },
  { name: "Air Cooler", img: "/card5.png" },
  { name: "Television", img: "/card6.png" },
  { name: "Microwave", img: "/card7.png" },
  { name: "Chimney", img: "/card8.png" },
  { name: "Inverter Battery", img: "/card9.png" },
  { name: "Air Purifier", img: "/card10.png" },
];

const Detail = () => {
  return (
    <section className="serviceS bg-gray-50 mt-15 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-[#0355CC]">OUR SERVICES</h2>
        <div className="cardphoto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10">
          {detail.map((item, index) => (
            <div
              key={index}
              className="bg-white h-60 w-60 rounded-lg p-4 flex flex-col items-center shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-32 h-32 object-contain"
              />
              <h3 className="mt-4 text-lg font-semibold text-sky-600 hover:text-[#0355CC]">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
 

 
<div className="serviceA bg-[#D1E3FF] flex flex-col md:flex-row items-center h-230 justify-center px-6 md:px-16 py-12 mt-10 ">
      
      {/* Left Image */}
      <motion.div
        className="flex justify-center md:w-1/2 mb-10 md:mb-0  h-200 relative bottom-20 "
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <img
          src="cont.png"
          alt="Repair Service"
          className="absolute  h-250 w-250 bootom-80 object-contain"
        />
      </motion.div>

     
      <motion.div
        className="ServiceT md:w-1/2 text-center md:text-left pb-100 space-y-4 "
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <h1 className="serviceH text-4xl md:text-5xl font-bold mt-10 text-[#0355CC]  uppercase">
          We Provide Professional Home Services
        </h1>

        <p className="serviceP text-black font-medium  leading-relaxed pt-10">
          Repair India is a platform offering home appliance repair services at your home. Whether you need Washing Machine repair, AC service, TV installation, and many more, our thousands of qualified service professionals are based throughout India.
        </p>

        <p className="serviceP text-black font-medium leading-relaxed pt-5">
          Customers use our platform to book doorstep repair services. These services are delivered in the comfort of their home and at a time of their choosing. We promise to provide a reliable, guaranteed, super-fast home service with quality and workmanship.
        </p>

        <p className="serviceP text-black font-medium leading-relaxed pt-5">
          To fulfill this promise, we work closely with service partners, enabling them with technology, training, products, tools, and brand help. We repair all major brands, models, and products — no matter where you bought it, we can fix it.
        </p>
      </motion.div>

    </div>
    {/* ===============card ============*/}
    <div className="bg-[#2B6CA3] py-12 px-6 border border-amber-700 " >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center text-white">
        
      
        <motion.div
          className="flex flex-col items-center justify-center space-y-4"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Order Our Service Online <br /> Through Mobile
          </h2>
          <img
            src="android.png"
            alt="Android Logo"
            className="w-[80px] h-[80px] "
          />
          <h3 className="text-black text-2xl">Repair India</h3>
          <img
            src="ri.png"
            alt="Repair India App"
            className="w-24 h-auto"
          />
         <button className="mt-2 h-13 w-40 bg-black text-white px-5 py-2 rounded border border-transparent hover:bg-white hover:text-black hover:border-yellow-400 transition-colors duration-300">
  Download Here
</button>
        </motion.div>

    
        <motion.div
          className="flex flex-col items-center justify-center space-y-4"
          // initial={{ x: 200, opacity: 0 }}
          // whileInView={{ x: 0, opacity: 1 }}
          // viewport={{ once: true, amount: 0.3 }}
          // transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold">
            Partner With Us
          </h2>
          <img
            src="android.png"
            alt="Android Logo"
            className="w-[80px] h-[80px] relative top-4"
          />
          <h3 className="text-black text-2xl relative top-4">Repair India Partner</h3>
          <img
            src="ri.png"
            alt="Repair India Partner App"
            className="w-24 h-auto relative top-5"
          />
          <button className="mt-2 bg-black  h-13 w-40 text-white px-5 py-2 rounded relative top-6  border border-transparent hover:bg-white hover:text-black hover:border-yellow-400 transition-colors duration-300">
  Download Here
</button>

        </motion.div>

      </div>
    </div>
    {/* revie section */}
    </section>
    
  );
};

export default Detail;
