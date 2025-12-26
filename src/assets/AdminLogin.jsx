import React, { useState } from "react";
import "./service.css";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
      <div className="bg-gray-300 h-160 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md text-center ">
       
        <div className="flex flex-col items-center   h-80">
          <div className="w-60 h-60 flex items-center justify-center border-2 border-black rounded-full">
            <div className="text-center">
               <img
            src="logo.png"
            alt="Repair Service"
            className="homeimg relative  "
          />
          <p className="text-2xl font-semibold mt-5 
           ">
                📞 9212 322 322
              </p>
          
            </div>
          </div>
        </div>

        {success ? (
          <p className="text-green-600 font-semibold text-lg">
            Login Successful!
          </p>
        ) : (
          <form onSubmit={handleLogin} className="space-y-5">
           
            <div className="text-left relative bottom-15">
              <label className="block font-semibold text-black text-2xl mb-1 e">
                Username
              </label>
              <div className="flex items-center border rounded-md px-3 py-2 bg-white">
                <span className="text-gray-400  mr-2">👤</span>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-11 outline-none text-gray-700 text-sm sm:text-base"
                  required
                />
              </div>
            </div>

          
            <div className="text-left  relative bottom-10">
              <label className="block font-semibold text-black text-2xl mb-1  ">
                Password
              </label>
              <div className="flex items-center border rounded-md px-3 bg-white  py-2">
                <span className="text-gray-400 mr-2">🔒</span>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full h-11 outline-none text-gray-700  text-sm sm:text-base"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-500"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

          
            <button
              type="submit"
              className=" adminlog  borderb border-b-lime-300 w-94 relative bottom-5  bg-blue-600 text-white py-2 sm:py-2.5 rounded-md text-sm sm:text-base hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;