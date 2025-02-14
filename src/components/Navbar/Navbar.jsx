import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";
import globe from "/icons/globe.svg";
import logo from "/logos/logo_trans.webp";

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n, t } = useTranslation();

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    const interval = setInterval(() => {
      const updatedTimeLeft = getTimeLeft();
      if (updatedTimeLeft) {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getFormattedKey = (key, value) => {
    const isArabic = i18n.language === "ar";

    if (isArabic) {
      switch (key) {
        case "days":
          return value > 10 ? "يوم" : "أيام";
        case "hours":
          return value > 10 ? "ساعة" : "ساعات";
        case "minutes":
          return value > 10 ? "دقيقة" : "دقائق";
        case "seconds":
          return value > 10 ? "ثانية" : "ثواني";
        default:
          return key;
      }
    } else {
      switch (key) {
        case "days":
          return value > 10 ? "Day" : "Days";
        case "hours":
          return value > 10 ? "Hour" : "Hours";
        case "minutes":
          return value > 10 ? "Minute" : "Minutes";
        case "seconds":
          return value > 10 ? "Second" : "Seconds";
        default:
          return key;
      }
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-gradient-to-l from-blue-950 to-gray-800 py-4 px-6 md:py-5 md:px-32 shadow-lg rounded-b-2xl">
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="INNOVEST Logo" className="w-16 md:w-24" />
          <h1 className="org-font text-gold text-2xl md:text-4xl tracking-wide">
            INNOVEST
          </h1>
          <p className="text-white text-[4px] md:text-[5px]">
            {t("navbar.forum_name", { lng: "en" })}
          </p>
          <p className="text-white text-[7px] md:text-[8.5px]">
            {t("navbar.forum_name", { lng: "ar" })}
          </p>
        </div>

        {/* Language Switcher Button */}
        <button
          onClick={switchLanguage}
          className="relative p-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <img
            src={globe}
            alt="Globe Icon"
            className="w-10 md:w-12 transition-all duration-500 ease-in-out transform hover:rotate-180"
          />
        </button>
      </nav>

      {/* Mobile Count Down Timer */}
      <div
        className={`bottom-0 fixed w-full md:hidden bg-[#c3aa6a]/90 backdrop-blur-xl shadow-md flex justify-between items-center px-2 py-5 transition-all duration-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex gap-1">
          {timeLeft &&
            Object.entries(timeLeft).map(([key, value], index, arr) => (
              <div
                key={key}
                className={`text-white flex flex-col items-center text-center text-base ${
                  index !== arr.length - 1
                    ? i18n.language === "ar"
                      ? "border-l border-white/40 px-2"
                      : "border-r border-white/40 pr-2"
                    : "px-1"
                }`}
              >
                <span
                  className={`${
                    i18n.language === "ar" ? "text-base " : "text-sm"
                  } `}
                >
                  {value} {getFormattedKey(key, value)}
                </span>
              </div>
            ))}
        </div>

        {/* Ticket Button */}
        <button className="bg-[#2E2E2E] text-white px-3 py-3 rounded-xl text-xs font-semibold shadow-md transition-all duration-300 active:bg-[#444] active:scale-95">
          {t("navbar.ticket")}
        </button>
      </div>
    </>
  );
}

export default Home;
