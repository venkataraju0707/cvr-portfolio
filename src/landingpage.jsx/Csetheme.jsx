import { FaReact, FaNodeJs, FaPython, FaLaptopCode } from 'react-icons/fa';

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 relative">
      {/* Decorative binary grid */}
      <div className="absolute inset-0 grid grid-cols-10 gap-2 opacity-10">
        {Array.from({ length: 100 }, (_, i) => (
          <span
            key={i}
            className="text-green-400 font-mono text-sm animate-pulse"
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </span>
        ))}
      </div>

      {/* Heading */}
      <div className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden">
  {/* Animated Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-700 to-black animate-gradient-flow"></div>

  {/* Floating Particles */}
  <div className="absolute inset-0">
    {Array.from({ length: 30 }).map((_, index) => (
      <div
        key={index}
        className="w-2 h-2 bg-white rounded-full opacity-20 animate-float"
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 3}s`,
        }}
      ></div>
    ))}
  </div>

  {/* Main Heading */}
  <div className="relative z-10 text-center transform scale-75 md:scale-100">
    <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-text-glow">
      Welcome to <br />
      <span className="text-emerald-400">Venkataraju's Portfolio</span>
    </h1>
    {/* <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-lg mx-auto animate-fade-in">
      Dive into <span className="text-yellow-400 font-semibold">passion</span> and <span className="text-teal-400 font-semibold">creativity</span>.
    </p> */}
  </div>

  {/* Interactive Floating Button */}
  <div className="relative z-20 mt-8">
    <button className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-full shadow-lg hover:scale-110 hover:shadow-pink-500/50 transition transform duration-500 animate-bounce">
      Start Exploring
    </button>
  </div>
</div>


      {/* Icons */}
      <div className="flex justify-center space-x-4 mt-6 relative z-10">
        <FaReact className="text-blue-500 text-4xl animate-spin" />
        <FaNodeJs className="text-green-500 text-4xl " />
        <FaPython className="text-yellow-500 text-4xl" />
        <FaLaptopCode className="text-white text-4xl" />
      </div>

      {/* Code snippet */}
      <pre className="bg-gray-800 text-green-400 font-mono p-4 rounded-lg shadow-lg mt-10 mx-auto w-2/3 relative z-10">
        {`function compute() {
  return "Hello, welcome !";
}`}
      </pre>
    </div>
  );
}
