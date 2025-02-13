import { useState, useEffect } from "react";

export default function Loader() {
  const [position, setPosition] = useState("translate-y-full opacity-0");

  useEffect(() => {
    const fadeIn = setTimeout(() => setPosition("translate-y-0 opacity-100"), 200);
    const fadeOut = setTimeout(() => setPosition("-translate-y-full opacity-0"), 2000);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, []);

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#13212E] flex items-center justify-center">
      <div
        className={`absolute transition-all duration-1000 ease-out ${position} text-center mb-32`}
      >
        <img src="./logo.png" alt="logo" className="w-1/4 mx-auto mb-4" />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide text-[#c3aa6a]">
          Welcome to Innovest Arab Forum
        </h1>
      </div>
    </div>
  );
}
