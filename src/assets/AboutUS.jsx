import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Footer from '../Footer';
import "./service.css";

export default function AboutUS() {
  return (
    <section className="bg-[#D1E3FF] min-h-screen ">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

       
        <div className="aboutdiv flex-1 text-center md:text-left pt-8 pb-6">
          <h2 className="text-[#0355CC] text-4xl md:text-4xl font-medium mb-2 pl-30 slide-in-right">
            ABOUT US
          </h2 >
          <h4 className="text-[#0355CC] text-3xl font-semibold  mb-4 pl-30 slide-in-right">Repair and Maintenance Services</h4>
          <p className="text-base text-gray-700 mb-6 font-semibold pl-30 slide-in-left">
          Repair India is a platform offering home appliance repair services 
at your home. Whether you need Washing Machine repair, AC 
service, TV installation and many more, Our thousands of 
qualified service professionals based throughout the india. 
Customer use our platform to book doorstep repair services. 
These services are delivered in the comfort of their home and at a
time of their choosing. We promise to provide a reliable
guaranteed super fast home service with quality and
workmanship. To fulfill this promise, We work closely with service
partners, enabling them with technology, training, products, tools
and brand helping them succeed and deliver on this promise. We
repair all major brands, makes and models. There is no matter
where you bought it, we can fix it.
          </p>
          
          <p className="text-base text-gray-700 mb-6 font-semibold pl-30 slide-in-left">At Repair India we know that today’s customers deserve the best <br />
comfortable home services overall. And our selected trusted and
verified service technicians are among the best in the industry. All
are well educated, experienced, real professional and factory
trained service engineers deliver services at home like never
experienced before. Today more than thousand user use Repair
India’s service on regular basis to get home appliance repair
services easier across India.</p>
        
        </div>

        <div className="">
          <img
            src="about.png"
            alt="About Repair India"
            className=" aboutimg  h-100 w-130 relative right-10"
          />
        </div>
      </div>
      <div className='mb-5'>
        <div  className="aboutdetail flex justify-around items-center pl-10 font-medium">
          <div>
            <h2>48</h2>
            <h2>Cities</h2>
          </div>
          <div>
            <h2>50,000</h2>
            <h2>Happy Customers</h2>
          </div>
          <div>
            <h2>12,000</h2>
            <h2>Service Partner</h2>
          </div>
        </div>
        <div className=" mt-8 flex  items-center gap-3 justify-center font-medium">
          <h2>AC Services – AC Repai </h2>
          <span>|</span>
          <h2> AC Installatio </h2>
          <span>|</span>
          <h2> AC Servicing </h2>
          <span>|</span>
          <h2> AC Gas Charging </h2>
        </div>
        <div className="mt-15">
          <h1 className="text-[#0355CC] text-center font-bold text-2xl">GETTING SOMETHING REPAIRED WAS NEVER THIS EASY! CHECK ….HOW IT POSSIBLE WITH</h1>
          <h2 className="text-[#0355CC] text-center text-2xl font-bold">REPAIR INDIA?</h2>
        </div>
        <div className=" aboutde mt-10 pl-60  text-left">
          <h2> <span className="text-[#0355CC] font-bold  "> How We Deal:</span>  Repair India provides a platform that allows experienced professionals cum associate service partner to connect with users looking for specific <br />
          doorstep services. <span className='abouth'>We employ factory-trained Sales & Service personnel along with a fleet of service vehicles available 24/7/365! Our repair facility offers doorstep <br />
          repair services with metalizing capabilities for all your repair, installation, and service needs. <br /><br /></span>
          <strong className='abouth font-bold'>Our Mission:</strong>

          "Since 2007, we aim to provide our customers with superior repair & services that ensure we are always their first choice."
          </h2>
          <br />
         
          <h2 className='abouth '>
            <span className="text-[#0355CC] font-bold">Services in</span>
            : Ahmedabad, Amritsar, Allhabad, Bengaluru, Bhubaneswar, Bhopal, Chandigarh, Tricity, Chennai, Coimbatore, Delhi NCR, Dehradun, Goa, Hisar, <br />
          Hyderabad, Indore, Jaipur, Jalandhar, Kanpur, Karnal, Kurukshetra, Kochi, Kolkata, Lucknow, Ludhiana, Madurai, Mumbai, Mysore, Nagpur, Panchkula, Patna, Pune, <br />
          Ranchi, Surat, Thiruvananthapuram, Vadodra, Vijaywada, Visakhapatnam...
          </h2>
        </div>
      </div>
      <Footer />
     </section>
  );
}
