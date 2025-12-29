import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import React from "react";
import Footer from '../Footer';
import "./service.css";

const services = [
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

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold text-gray-800">OUR SERVICES</h2>
        <h2 className="text-2xl text-[#0355CC] mt-2">
          India’s Leading Multibrand Home Appliance Repair & Services
        </h2>
        <p className=" text-gray-600 mt-4 font-medium">
          Repair India provides a platform that allows experienced professionals cum associate service partner to connect with user looking for specific doorstep services.
          Repair India we know that today's customer deserve the best comfortable home sevices overall. And our selected trusted and verified service technicians are among
          the best in the industry.
        </p>

        {/*=========== Services Grid================ */}
        <div className="grid grid-cols-2sm:grid-cols-3 md:grid-cols-4 gap-6 mt-10 border-gray-400">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-gray-400 bg-white  rounded-lg  p-4 flex flex-col items-center shadow-2xl "
            >
              <img
                src={service.img}
                alt={service.name}
                className="w-40 h-40 object-cover rounded-md  "
              />
              <h3 className="mt-4 hover:text-[#0355CC] text-2xl font-semibold text-sky-600">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    <div className="parase h-100  bg-[#D1E3FF] text-left mt-10">
        <p className="  pt-20 pl-10 font-sans">We at Repair India have optimal solutions for all major brands of home and kitchen appliances. No matter whether your refrigerator needs repairing or you require <br />
          installation for your new air conditioner, we are there for you. We are the most preferred choice for appliance repair services in the pan India. Our repair 
          technicians are highly trained, knowledgeable and courteous, We service all brands household appliances & electronics including AC, TV, Refrigerator, Washing 
          Machine, Microwave, RO Water Purifier, Air Purifier, Geyser, Chimney, Hob, Air Cooler, Inverter and many more.</p><br />
        <p className="  pl-10 font-sans">Since 2007 Repair India company has delivered quality home appliance repair and services through innovative doorstep services. The spectacular service does not <br />
          stop after your repair is completed. Repair India is so confident in the quality, We guarantee our work for upto 30 days warranty at no extra cost. And our selected 
          trusted and verified service technicians are among the best in the industry. They all are well educated, experienced real professional and factory trained service 
          engineers. At present more than thousands users use Repair India’s services on a regular basis to get home appliance services easier across India. Currently we 
          offer doorstep services in metro cities in India including Delhi, Gurgaon, Noida, Faridabad, Ghaziabad, Ahmedabad, Bengaluru, Chandigarh, Hyderabad, Mumbai & 
          many more.</p>
      </div>

  <Footer />
    </section>
  );
};


export default Services;
