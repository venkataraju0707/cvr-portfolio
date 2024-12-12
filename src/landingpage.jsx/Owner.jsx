import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Hero from "./Hero";

const Owner = () => {
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    if (Owner.current) return;

    const timeline = gsap.timeline();
    gsap.set([nameRef.current, titleRef.current, taglineRef.current], {
      opacity: 0,
      y: -50,
    });
    timeline
      .to(nameRef.current, { opacity: 1, y: 0, duration: 1 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5")
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

    Owner.current = true;
  }, []);

  return (
    <div className="flex flex-row h-screen">
      {/* First Section */}
      <div className="flex-1 flex flex-col justify-center items-center bg-gray-100">
        <h1 ref={nameRef} className="text-5xl font-bold mb-4 text-red-600">
          VENKATARAJU CHERUKURI
        </h1>
        <h2 ref={titleRef} className="text-2xl font-semibold mb-4 text-green-500">
          Full-Stack Developer
        </h2>
        <p ref={taglineRef} className="text-lg italic text-gray-700">
          Passionate Full-Stack Developer Open for Opportunities.
        </p>
        <p className="text-lg italic text-gray-700 p-20">My name is Venkataraju, and I am a passionate Full-Stack Developer with expertise in ReactJS, Node.js, and MongoDB. I have a strong foundation in both front-end and back-end technologies, creating scalable and dynamic web applications. With experience in building responsive UIs, optimizing performance, and integrating APIs, I’m committed to delivering high-quality solutions. I’m eager to contribute my skills to innovative projects and grow in a dynamic team environment. I’m open to new opportunities and excited to take on challenging projects.</p>
      </div>

      {/* Second Section */}
      <div className="flex-1 flex justify-center items-center bg-gray-100">
        <Hero />
      </div>
    </div>
  );
};

export default Owner;
