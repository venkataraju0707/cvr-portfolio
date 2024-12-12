import React, { useState, useEffect } from "react";
import Title from "./Title";
import Csetheme from "./Csetheme";

const Menu = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 py-6 shadow-lg transition-all duration-300 ${
          scrolled ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="container mx-auto flex items-center justify-center px-4">
          {/* Title Section - Centered */}
          <div className="text-center">
            <Title />
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="pt-20">
        <Csetheme />
      </div>
    </div>
  );
};

export default Menu;
