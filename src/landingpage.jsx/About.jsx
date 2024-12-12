import React from "react";
import { gsap } from "gsap";

const About = () => {
  const handleClick = () => {
    console.log("Button clicked");
};

return (
    <button
        className="bg-yellow-800 text-white px-5 py-2 rounded-md"
        onClick={handleClick}
    >
        ABOUT
    </button>
);

};

export default About;
