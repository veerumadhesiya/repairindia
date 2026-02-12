import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const reviews = [
  {
    id: 1,
    text: "Repair India provides a platform that allows experienced professionals cum associate service partners to connect with users looking for specific doorstep services.",
  },
  {
    id: 2,
    text: "Repair India knows that today’s customers deserve the most comfortable home services overall. Our selected, trusted, and verified service technicians are among the best in the industry.",
  },
  {
    id: 3,
    text: "Repair India provides a platform that allows experienced professionals cum associate service partners to connect with users looking for specific doorstep services.",
  },
  {
    id: 4,
    text: "Repair India knows that today’s customers deserve the most comfortable home services overall. Our selected, trusted, and verified service technicians are among the best in the industry.",
  },
];

const ClientReviews = () => {
  const [index, setIndex] = useState(0);
  const cardsPerSlide = 2;
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const nextReview = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  

  return (
    <> 
    
    
    <motion.div
      ref={sectionRef}
      className="bg-white py-2 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0355CC] mb-10">
        WHAT OUR CLIENTS SAY
      </h2>

      <div className="overflow-hidden max-w-5xl mx-auto">
        <motion.div
          className="flex space-x-6"
          animate={{ x: `-${index * (100 / cardsPerSlide)}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {reviews.concat(reviews.slice(0, cardsPerSlide)).map((review, i) => (
            <div
  key={review.id}
  className="w-125 p-4 flex-shrink-0 flex flex-col items-center space-y-2 
             border rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
>
  <img
    src="revie.png"
    alt="Repair India"
    className="w-100 h-50 "
  />
  <p className="text-center text-sm sm:text-base leading-relaxed text-gray-700">
    {review.text}
  </p>
</div>
          ))}
        </motion.div>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 justify-center mt-8">
        <button
          onClick={prevReview}
          className="bg-[#0355CC] h-12  w-15 text-white px-4 py-2 rounded"
        >
          ←
        </button>
        <button
          onClick={nextReview}
          className="bg-[#0355CC] h-12  w-15 text-white px-4 py-2 rounded"
        >
          →
        </button>
      </div>
    </motion.div>
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="contactH text-8xl sm:text-4xl font-bold text-[#0355CC] mb-8 text-center md:text-left">
          CONTACT US
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left: Separate Inputs */}
          <form className=" space-y-6 w-full">
            <input
              type="text"
              placeholder="Name"
              className="textN h-15 w-135 border border-gray-300 px-4 py-2 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 outline-none transition animate-slide-up"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="textN h-15 w-135 border border-gray-300 px-4 py-2 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 outline-none transition animate-slide-up delay-100"
            />
            <input
              type="email"
              placeholder="Email"
              className="textN h-15 w-135 border border-gray-300 px-4 py-2 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 outline-none transition animate-slide-up delay-200"
            />
            <textarea
              rows="4"
              placeholder="Message"
              className="textN h-15 w-135 border border-gray-300 px-4 py-2 rounded-md shadow-md focus:ring-2 focus:ring-blue-500 outline-none transition resize-none animate-slide-up delay-300"
            ></textarea>

            <div className="flex items-start gap-2 animate-slide-up delay-400">
              <input type="checkbox" id="agree" className="mt-1" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree to be contacted by Repair India for promotion and SMS
                alerts
              </label>
            </div>

            <button
              type="submit"
              className="textN h-15 w-135 bg-white border border-gray-300 text-black py-2 rounded-md  shadow-md font-medium hover:bg-green-600 transition animate-slide-up delay-500"
            >
              Contact Us
            </button>
          </form>

          {/* Right: Google Map */}
          <div className="flex justify-center md:justify-end animate-slide-right">
            <iframe
              title="Repair India Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.7051928662677!2d77.03470717549794!3d28.672208675655465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bbdb16b8a5%3A0xa173bd40b8f7bd0f!2sNew%20Railway%20Road%2C%20Gurugram!5e0!3m2!1sen!2sin!4v1706532455221!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
      </>
    
  );
};

export default ClientReviews;

