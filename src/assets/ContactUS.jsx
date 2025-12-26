import React from "react";
import "./service.css"; 


const ContactUS = () => {
  return (
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
                I agree to be contacted by Repair India for promotions and SMS
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
  );
};

export default ContactUS;
