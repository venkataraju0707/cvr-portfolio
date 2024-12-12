import React from "react";

const SpaceTheme = () => {
  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden">
      {/* Stars Layer */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-blue-900 to-black opacity-30"></div>
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Matter */}
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="text-white space-y-4 animate-float">
          <h1 className="text-4xl font-bold">Welcome to the Universe</h1>
          <p className="text-lg">Explore the beauty of space through this animated theme.</p>
        </div>
      </div>
    </div>
  );
};

export default SpaceTheme;
