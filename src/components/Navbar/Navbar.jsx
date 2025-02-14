import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";
import globe from "/icons/globe.svg";
import logo from "/logos/logo_trans.webp";
import { FaTicketAlt } from "react-icons/fa";

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);
  const { i18n, t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  const switchLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

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
      <nav
        className={`
    sticky top-0 w-full flex justify-between items-center 
    bg-gradient-to-l from-blue-950 to-gray-800 
    py-4 px-6 md:py-5 md:px-32  
    transition-transform duration-700 ease-out shadow-lg
    ${isLoaded ? "translate-y-0 opacity-100" : "-translate-y-40 opacity-0"}
  `}
      >
        {/* Logo Section */}
        <div className="flex flex-col items-center text-center transition-all duration-300 ease-out">
          <img
            src={logo}
            alt="INNOVEST Logo"
            className={`transition-all duration-300 ease-out
               ${isScrolled ? "w-14" : "w-24"}`}
          />
          <h1
            className={`org-font text-gold tracking-wide transition-all duration-300 ease-out
              ${isScrolled ? "text-lg md:text-2xl" : "text-2xl md:text-4xl"}
          `}
          >
            INNOVEST
          </h1>

          {/* Forum Name - English */}
          <p
            className={`text-white transition-all duration-300 ease-out
             ${isScrolled ? "hidden" : "text-[4px] md:text-[5px]"}
          `}
          >
            {t("navbar.forum_name", { lng: "en" })}
          </p>

          {/* Forum Name - Arabic */}
          <p
            className={`text-white transition-all duration-300 ease-out
            ${isScrolled ? "hidden" : "text-[7px] md:text-[8.5px]"}
          `}
          >
            {t("navbar.forum_name", { lng: "ar" })}
          </p>
        </div>

        {/* Language Switcher Button */}
        <button
          onClick={switchLanguage}
          className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
        >
          <img
            src={globe}
            alt="Globe Icon"
            className={`transition-all duration-500 ease-out transform hover:rotate-180
           ${isScrolled ? "w-8 md:w-8" : "w-10 md:w-12"}
          `}
          />
        </button>
      </nav>

      <div
        className={`w-full fixed hidden bg-[#c3aa6a]/90 backdrop-blur-xl md:flex justify-between items-center py-4 px-32 transition-all duration-500 
          ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          ${isScrolled ? "rounded-b-xl" : "rounded-none"}
          `}
      >
        <div className="flex gap-1">
          {timeLeft &&
            Object.entries(timeLeft).map(([key, value], index, arr) => (
              <div
                key={key}
                className={`text-white flex flex-col items-center text-center text-base 
                  ${
                    index !== arr.length - 1
                      ? i18n.language === "ar"
                        ? "border-l border-white px-2"
                        : "border-r border-white px-4"
                      : "px-4"
                  }`}
              >
                <span className="text-xl">
                  {value} {getFormattedKey(key, value)}
                </span>
              </div>
            ))}
        </div>

        {/* Ticket Button */}
        <button className="cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 active:bg-[#444] active:scale-95">
          {t("navbar.ticket")}
          <FaTicketAlt className="text-lg" />
        </button>
      </div>

      {/* Mobile Count Down Timer */}
      <div
        className={`bottom-0 fixed w-full md:hidden bg-[#c3aa6a]/90 backdrop-blur-xl  flex justify-between items-center px-2 py-5 transition-all duration-500 
          ${
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
        <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all duration-300 active:bg-[#444] active:scale-95">
          <FaTicketAlt className="text-lg" />
          {t("navbar.ticket")}
        </button>
      </div>
    </>
  );
}

export default Home;
