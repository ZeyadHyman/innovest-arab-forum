import { useEffect, useState, useMemo, useCallback } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";
import globe from "/icons/globe.svg";
import logo from "/logos/logo_trans.webp";
import { FaTicketAlt } from "react-icons/fa";

function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n, t } = useTranslation();

  const isArabic = useMemo(() => i18n.language === "ar", [i18n.language]);

  const switchLanguage = useCallback(() => {
    const newLang = isArabic ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
  }, [i18n, isArabic]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 1);
      setIsHidden(currentScrollY > (lastScrollY || 0));
      lastScrollY = currentScrollY;
    };

    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadTimeout = setTimeout(() => setIsLoaded(true), 100);
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const updatedTimeLeft = getTimeLeft();
        return JSON.stringify(prev) !== JSON.stringify(updatedTimeLeft)
          ? updatedTimeLeft
          : prev;
      });
    }, 1000);

    return () => {
      clearTimeout(loadTimeout);
      clearInterval(interval);
    };
  }, []);

  const getFormattedKey = useCallback(
    (key, value) => {
      const units = {
        days: isArabic
          ? value > 10
            ? "يوم"
            : "أيام"
          : value > 10
          ? "Day"
          : "Days",
        hours: isArabic
          ? value > 10
            ? "ساعة"
            : "ساعات"
          : value > 10
          ? "Hour"
          : "Hours",
        minutes: isArabic
          ? value > 10
            ? "دقيقة"
            : "دقائق"
          : value > 10
          ? "Minute"
          : "Minutes",
        seconds: isArabic
          ? value > 10
            ? "ثانية"
            : "ثواني"
          : value > 10
          ? "Second"
          : "Seconds",
      };
      return units[key] || key;
    },
    [isArabic]
  );

  const navClasses = `fixed top-0 w-full bg-gradient-to-l from-blue-950 to-gray-800
    transition-transform duration-500 ease-in-out shadow-lg
    ${isHidden ? "md:-translate-y-full" : "md:translate-y-0"}`;

  const logoClasses = `transition-all duration-300 ease-out ${
    isScrolled ? "w-14" : "w-24"
  }`;

  const titleClasses = `org-font text-gold tracking-wide transition-all duration-300 ease-out ${
    isScrolled ? "text-lg md:text-2xl" : "text-2xl md:text-4xl"
  }`;

  const englishForumNameClasses = `text-white transition-all duration-300 ease-out ${
    isScrolled ? "hidden" : "text-[4px] md:text-[5px]"
  }`;

  const arabicForumNameClasses = `text-[7px] md:text-[8px] text-white transition-all duration-300 ease-out${
    isScrolled ? "hidden" : ""
  }`;

  const globeClasses = `transition-all duration-500 ease-out transform hover:rotate-180 ${
    isScrolled ? "w-8 md:w-8" : "w-10 md:w-12"
  }`;

  const desktopCountdownClasses = `w-full fixed hidden bg-[#c3aa6a]/90 backdrop-blur-xl md:flex justify-between items-center py-4 px-32 transition-all duration-500 
    ${isLoaded ? "animate-fadeInSlideUp" : "opacity-0 translate-y-10"}
    ${isScrolled ? "rounded-b-4xl" : "rounded-none"}`;

  const mobileCountdownClasses = `bottom-0 fixed w-full md:hidden bg-[#c3aa6a]/90 backdrop-blur-xl flex justify-between items-center px-2 py-5 transition-all duration-500 
    ${isLoaded ? "animate-fadeInSlideUp" : "opacity-0 translate-y-10"}`;

  return (
    <>
      <nav className={navClasses}>
        <div className="flex justify-between items-center  py-4 px-6 md:py-5 md:px-32  ">
          <div className="flex flex-col items-center text-center transition-all duration-300 ease-out">
            <img
              src={logo}
              alt="INNOVEST Logo"
              className={`${logoClasses} hover:scale-105 active:scale-95`}
            />
            <h1 className={`${titleClasses} hover:scale-105 active:scale-95`}>
              INNOVEST
            </h1>
            <p className={englishForumNameClasses}>
              {t("navbar.forum_name", { lng: "en" })}
            </p>
            <p className={arabicForumNameClasses}>
              {t("navbar.forum_name", { lng: "ar" })}
            </p>
          </div>

          <div className="flex justify-center items-center text-base  space-x-5">
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
            <h1 className="text-white/90 hover:text-white font-normal hover:font-bold cursor-pointer transform-all duration-100">
              TEST
            </h1>
          </div>

          <button
            onClick={switchLanguage}
            className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
          >
            <img
              src={globe}
              alt="Globe Icon"
              className={`${globeClasses} hover:rotate-180`}
            />
          </button>
        </div>

        <div className={desktopCountdownClasses}>
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
                  <span className="text-xl hover:scale-105 active:scale-95">
                    {value} {getFormattedKey(key, value)}
                  </span>
                </div>
              ))}
          </div>
          <button className="cursor-pointer bg-gradient-to-r from-gray-900 to-gray-800 text-white px-3 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
            {t("navbar.ticket")}
            <FaTicketAlt className="text-lg" />
          </button>
        </div>
      </nav>

      <div className={mobileCountdownClasses}>
        <div className="flex">
          {timeLeft &&
            Object.entries(timeLeft).map(([key, value], index, arr) => (
              <div
                key={key}
                className={`text-white px-2 flex flex-col items-center text-center text-base ${
                  index !== arr.length - 1
                    ? isArabic
                      ? "border-l border-white/40"
                      : "border-r border-white/40 "
                    : ""
                }`}
              >
                <span
                  className={`${
                    isArabic ? "text-sm" : "text-xs"
                  } hover:scale-105 active:scale-95`}
                >
                  {value} {getFormattedKey(key, value)}
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
