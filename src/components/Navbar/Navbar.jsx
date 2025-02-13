import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`bottom-0 fixed w-full md:hidden bg-[#c3aa6a]/90 backdrop-blur-xl shadow-md flex justify-between items-center px-6 py-4 transition-all duration-500 ${
        isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="flex gap-2">
        {Object.entries(timeLeft).map(([key, value], index, arr) => (
          <div
            key={key}
            className={`text-white flex flex-col items-center text-center text-base ${
              index !== arr.length - 1 ? "border-r border-white/40 pr-3" : ""
            }`}
          >
            <span className="text-sm font-bold">{value}</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-100">
              {key}
            </span>
          </div>
        ))}
      </div>

      <button className="bg-[#2E2E2E] text-white px-3 py-3 rounded-xl text-xs font-semibold shadow-md transition-all duration-300 active:bg-[#444] active:scale-95">
        Get a Ticket
      </button>
    </div>
  );
}

export default Home;
