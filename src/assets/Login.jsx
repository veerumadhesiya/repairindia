import React, { useState } from "react";

const Login = () => {
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#005C97] px-4">
      <div className="bg-white p-8 sm:p-12 rounded-lg shadow-lg w-full max-w-lg min-h-[500px]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/logo.png" alt="Repair India Logo" className="h-25" />
        </div>

        {!success ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
            />
            <p
              className="text-sm text-blue-600 cursor-pointer hover:underline text-left"
              onClick={() => alert("Redirect to Forgot Password page")}
            >
              Forgot Password?
            </p>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <p className="text-center text-green-600 font-semibold text-lg">
            ✅ Login Successfully
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
