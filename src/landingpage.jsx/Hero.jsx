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
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gray-50">
      <div className="flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-200 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="relative w-full flex justify-center mb-6">
          {loading ? (
            <div className="w-64 h-64 bg-gray-300 animate-pulse" />
          ) : (
            <img
              src={venkataraju}
              alt="Venkataraju"
              className="w-64 h-64 border-4 border-gray-400 shadow-lg object-cover"
            />
          )}
        </div>

        <div className="flex flex-col items-center space-y-4 w-full">
          <a
            href="https://drive.google.com/file/d/1D32hTWn1iNx2ATT2HxCV2gJGHHeD3p2J/view?usp=sharing"
            download
            className="flex items-center justify-center w-full max-w-sm px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow hover:bg-blue-600"
          >
            <FaDownload className="mr-2" /> Download Resume
          </a>

          <a
            href="https://linkedin.com/in/venkatarajuch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full max-w-sm px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded shadow hover:bg-blue-600"
          >
            <FaLinkedin className="mr-2" /> LinkedIn Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
