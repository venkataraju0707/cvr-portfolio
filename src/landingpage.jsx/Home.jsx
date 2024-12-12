import React from "react";
import { gsap } from "gsap";

const Home = () => {
  const handleClick = (e) => {
    gsap
      .timeline()
      .to(e.target, { scale: 0.9, duration: 0.1 })
      .to(e.target, { scale: 1, duration: 0.1 });
  };

  return (
    <button
      className="bg-orange-500 text-white px-5 py-2 rounded-md"
      onClick={handleClick}
    >
      HOME
    </button>
  );
};

export default Home;