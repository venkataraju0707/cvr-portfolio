import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Expense Tracker",
    description: "Track your expenses with ease and visualize data with charts.",
    techStack: ["ReactJS", "Tailwind CSS", "Chart.js"],
    liveDemo: "https://venkataraju0707.github.io/EXPENSETRACKER/",
    sourceCode: "https://github.com/venkataraju0707/EXPENSETRACKER",
  },
  {
    title: "Home Price Prediction Model",
    description: "Analyze social media sentiments to gain actionable insights.",
    techStack: ["Python","Google collab"],
     
    sourceCode: "https://github.com/venkataraju0707/HOME_PRICE_PREDICTION-IN-PYTHON--MACHINE-LEARNING",
  },
  {
    title: "E-commerce Platform",
    description: "Complete online shopping solution with payment integration.",
    techStack: ["Node.js", "MongoDB", "ReactJS"],
    
    sourceCode: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    title: "Group Chat Application",
    description: "Real-time group chat app for seamless communication.",
    techStack: ["ReactJS", "Tailwind CSS", "Node.js"],
     
    sourceCode: "https://github.com/venkataraju0707/my-chat-app",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white flex items-center justify-center p-10">
      {/* Section Container */}
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              {/* Project Title */}
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center gap-1"
                >
                  <FaGithub /> Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
