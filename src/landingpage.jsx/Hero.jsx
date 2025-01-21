import React, { useState, useEffect } from "react";
import { FaLinkedin, FaDownload } from "react-icons/fa";
import venkataraju from "../assets/venkataraju.png";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = venkataraju;
    img.onload = () => setLoading(false);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-50 px-4">
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-8 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-4xl">
        <div className="relative w-full flex justify-center mb-6">
          {loading ? (
            <div className="w-32 h-32 sm:w-64 sm:h-64 bg-gray-300 animate-pulse" />
          ) : (
            <img
              src={venkataraju}
              alt="Venkataraju"
              className="w-32 h-32 sm:w-64 sm:h-64 border-4 border-gray-400 shadow-lg object-cover rounded-full"
            />
          )}
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <a
            href="https://drive.google.com/file/d/1D32hTWn1iNx2ATT2HxCV2gJGHHeD3p2J/view?usp=sharing"
            download
            className="flex items-center justify-center w-full max-w-xs sm:max-w-sm px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white text-sm sm:text-lg font-semibold rounded shadow hover:bg-blue-600"
          >
            <FaDownload className="mr-2" />  Resume
          </a>

          <a
            href="https://linkedin.com/in/venkatarajuch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full max-w-xs sm:max-w-sm px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 text-white text-sm sm:text-lg font-semibold rounded shadow hover:bg-blue-600"
          >
            <FaLinkedin className="mr-2" /> LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
