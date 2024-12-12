import React from "react";
import Menu from "./landingpage.jsx/Menu.jsx"; // Importing the Menu component
import Owner from "./landingpage.jsx/Owner.jsx"; // Importing the Owner component
import Skills from "./landingpage.jsx/Skills.jsx"; // Importing the Skills component
import Projects from "./landingpage.jsx/Projects.jsx"; // Importing the Projects component
import Contact from "./landingpage.jsx/Contact.jsx"; // Importing the Contact component
import ScrollToTopButton from "./landingpage.jsx/ScrollToTopButton.jsx"; // Importing the ScrollToTopButton component

function App() {
  return (
    <div>
      {/* Menu Navigation */}
      <Menu />

      {/* Sections of the page */}
      <section id="about" className="pt-16">
        <Owner /> {/* This is the About section */}
      </section>

      <section id="skills" className="pt-16">
        <Skills /> {/* This is the Skills section */}
      </section>

      <section id="projects" className="pt-16">
        <Projects /> {/* This is the Projects section */}
      </section>

      <section id="contact" className="pt-16">
        <Contact /> {/* This is the Contact section */}
      </section>

      {/* Scroll to Top button */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
