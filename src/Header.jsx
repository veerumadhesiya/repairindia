import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <div className="bg-gray-800 text-white text-sm">
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+91 98765 43210</span>
        </div>

      
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>info@example.com</span>
        </div>
      </div>
    </div>
  );
}
