import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiHtml5, SiCss3, SiTailwindcss, SiJavascript, SiCplusplus } from 'react-icons/si';

export default function Skills() {
  // Updated skills array including HTML, CSS, Tailwind CSS, JavaScript, and C++
  const skills = [
    { icon: <SiHtml5 className="text-6xl" />, name: 'HTML', level: '90%' },
    { icon: <SiCss3 className="text-6xl" />, name: 'CSS', level: '85%' },
    { icon: <SiTailwindcss className="text-6xl" />, name: 'Tailwind CSS', level: '75%' },
    { icon: <SiJavascript className="text-6xl" />, name: 'JavaScript', level: '80%' },
    { icon: <FaReact className="text-6xl" />, name: 'ReactJS', level: '80%' },
    { icon: <FaNodeJs className="text-6xl" />, name: 'Node.js', level: '70%' },
    { icon: <FaPython className="text-6xl" />, name: 'Python', level: '85%' },
    { icon: <SiCplusplus className="text-6xl" />, name: 'C++', level: '65%' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-800 to-purple-700 text-white flex items-center justify-center">
      <div className="absolute inset-0 opacity-20 bg-gray-900"></div>
      
      <div className="relative z-10 p-8 max-w-screen-xl w-full text-center">
        <h2 className="text-5xl font-bold mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 hover:rotate-3 transition-all duration-300 ease-in-out shadow-lg"
            >
              <div className="icon mb-4">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold">{skill.name}</h3>
              <div className="progress mt-4">
                <div className="progress-bar bg-green-500 h-2 rounded-lg" style={{ width: skill.level }}></div>
              </div>
              <p className="text-lg mt-2">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
