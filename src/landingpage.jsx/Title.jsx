import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const Title = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;
    gsap
      .timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 75%",
        },
      })
      .to(title, { opacity: 1, duration: 0.5 })
      .to(title, { text: "OPEN TO WORK", duration: 1.5, ease: "power2.out" });
  }, []);

  return (
    <div className="flex justify-center items-center text-blue-300 px-4 md:px-10">
      <h1
        ref={titleRef}
        className="text-2xl md:text-4xl font-bold opacity-0 tracking-widest uppercase"
      >
        OWT
      </h1>
    </div>
  );
};

export default Title;
