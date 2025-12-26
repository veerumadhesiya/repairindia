import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const baseClass =
    "font-sans font-medium px-3 py-2 rounded text-lg transition";
  const inactiveClass = "text-black hover:bg-blue-700 hover:text-white";
  const activeClass = "bg-blue-700 text-white shadow-md";

  return (
    <>
   
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#FF8A1D]" />
            <span>Call: +91 98765 43210</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-[#FF8A1D]" />
            <span>Email: veerumadhesiya.com</span>
          </div>
        </div>
      </div>

      {/* ===== Navbar ===== */}
      <nav className="bg-[#D1E3FF]  top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <NavLink to="/">
            <img
              src="logo.png"
              alt="MySite Logo"
              className="h-16 w-auto hover:scale-105 transition duration-200"
            />
          </NavLink>

       
          <div className="sm:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

        
          <ul
            className={`flex-col sm:flex-row sm:flex sm:items-center gap-4 sm:gap-6 w-full sm:w-auto bg-[#D1E3FF] sm:bg-transparent transition-all duration-300 ${
              menuOpen ? "flex" : "hidden"
            }`}
          >
       
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

     
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </NavLink>
            </li>

    
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                Services
              </NavLink>
            </li>

      
            <li className="relative">
              <button
                onClick={() => setTermsOpen(!termsOpen)}
                className={`${baseClass} ${inactiveClass} flex items-center gap-1`}
              >
                Terms ▾
              </button>

              {termsOpen && (
                <ul className="sm:absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 flex flex-col">
                  <li>
                    <a
                      href="Privacy Policy.pdf"
                      download
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                      onClick={() => {
                        setTermsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="REFUND POLICY.pdf"
                      download
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                      onClick={() => {
                        setTermsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="TERMS AND CONDITIONS.pdf"
                      download
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-700 hover:text-white"
                      onClick={() => {
                        setTermsOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              )}
            </li>

         
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </NavLink>
            </li>

      
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            </li>

    
            <li>
              <NavLink
                to="/adminlogin"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : inactiveClass}`
                }
                onClick={() => setMenuOpen(false)}
              >
                Admin Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
