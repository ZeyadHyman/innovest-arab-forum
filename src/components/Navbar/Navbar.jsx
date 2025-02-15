import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";
import globe from "/icons/globe.svg";
import logo from "/logos/logo_trans.webp";
import { FaTicketAlt } from "react-icons/fa";
import Loader from "../../utils/Loader/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangSwitched, setIsLangSwitched] = useState(false);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const menuLinks = t("navbar.menu", { returnObjects: true });

  // Handle language switch
  const switchLanguage = () => {
    setIsLangSwitched(true);
    setTimeout(() => setIsLangSwitched(false), 2500);
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Handle scroll events
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 1);
      setIsHidden(currentScrollY > (lastScrollY || 0));
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update countdown timer and load state
  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoaded(true), 100);
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => {
      clearTimeout(loadTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {isLangSwitched && <Loader />}
      <nav
        className={`fixed top-0 w-full bg-gradient-to-l from-blue-950 to-gray-800 transition-transform duration-500 ease-in-out shadow-lg
          ${isHidden ? "md:-translate-y-full" : "md:translate-y-0"}
          `}
      >
        <div
          className={`flex justify-between items-center py-4 px-6 md:py-5 md:px-32 `}
        >
          {/* Logo Section */}
          <div className="flex flex-col items-center text-center select-none">
            <Link to={"/"} className="flex flex-col items-center text-center">
              <img
                src={logo}
                alt="INNOVEST Logo"
                width="96"
                height="96"
                className={`transition-all duration-300 ease-out hover:scale-105 active:scale-95 ${
                  isScrolled ? "w-14" : "w-24"
                }`}
              />
              <h1
                className={`org-font text-gold tracking-wide transition-all duration-300 ease-out ${
                  isScrolled ? "text-lg md:text-2xl" : "text-2xl md:text-4xl"
                }`}
              >
                INNOVEST
              </h1>
            </Link>

            <p
              className={`text-white transition-all duration-300 ease-out ${
                isScrolled ? "hidden" : "text-[4px] md:text-[5.4px]"
              }`}
            >
              {t("navbar.forum_name", { lng: "en" })}
            </p>
            <p
              className={`text-[7px] md:text-[9px] text-white transition-all duration-300 ease-out ${
                isScrolled ? "hidden" : ""
              }`}
            >
              {t("navbar.forum_name", { lng: "ar" })}
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center items-center text-lg space-x-5">
            {Object.entries(menuLinks).map(([key, value]) => (
              <Link
                to={`/${key == "home" ? "" : key}`}
                key={key}
                className="text-zinc-200 hover:text-zinc-50 active:text-zinc-50 font-normal hover:font-bold cursor-pointer transition-all duration-100"
              >
                {value}
              </Link>
            ))}
          </div>

          {/* Language Switcher Button */}
          <button
            onClick={switchLanguage}
            className="select-none p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
          >
            <img
              src={globe}
              alt="Globe Icon"
              width="48"
              height="48"
              className={`transition-all duration-500 ease-out transform hover:rotate-180 ${
                isScrolled ? "w-8 md:w-8" : "w-10 md:w-12"
              }`}
            />
          </button>
        </div>

        {/* Desktop Countdown Timer */}
        <div
          className={`w-full fixed hidden bg-gold/90 backdrop-blur-xl md:flex justify-between items-center py-4 px-32 transition-all duration-500 
              ${isLoaded ? "" : "opacity-0 translate-y-10"}
              ${isScrolled ? "rounded-b-4xl" : "rounded-none"}`}
        >
          <div className="flex gap-1">
            {timeLeft &&
              Object.entries(timeLeft).map(([key, value], index, arr) => (
                <div
                  key={key}
                  className={`text-white flex flex-col items-center text-center text-base ${
                    index !== arr.length - 1
                      ? isArabic
                        ? "border-l border-white px-2"
                        : "border-r border-white px-4"
                      : "px-4"
                  }`}
                >
                  <span className="text-xl">{value}</span>
                </div>
              ))}
          </div>
          <button className=" select-none cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
            {t("navbar.ticket")}
            <FaTicketAlt className="text-lg" />
          </button>
        </div>
      </nav>

      {/* Mobile Countdown Timer */}
      <div
        className={`bottom-0 fixed w-full md:hidden bg-gold/90 backdrop-blur-xl flex justify-between items-center px-2 py-5 transition-all duration-500 ${
          isLoaded ? "" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex">
          {Object.entries(timeLeft).map(([key, value], index, arr) => (
            <div
              key={key}
              className={`text-white px-2 flex flex-col items-center text-center text-base ${
                index !== arr.length - 1
                  ? isArabic
                    ? "border-l border-white/40"
                    : "border-r border-white/40"
                  : ""
              }`}
            >
              <span className={`${isArabic ? "text-sm" : "text-xs"}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-xs font-semibold flex items-center gap-1 transition-all duration-300 hover:scale-105 active:scale-95">
          <FaTicketAlt className="text-lg" />
          {t("navbar.ticket")}
        </button>
      </div>
    </>
  );
}

export default Home;
