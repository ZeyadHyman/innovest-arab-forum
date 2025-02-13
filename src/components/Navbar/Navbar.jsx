import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";

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
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button
        onClick={switchLanguage}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg transition-all hover:bg-blue-700"
      >
        {t("navbar.langSwitcher")}
      </button>

      <div
        className={`bottom-0 fixed w-full md:hidden bg-[#c3aa6a]/90 backdrop-blur-xl shadow-md flex justify-between items-center px-2 py-5 transition-all duration-500 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex gap-1">
          {Object.entries(timeLeft).map(([key, value], index, arr) => (
            <div
              key={key}
              className={`text-white flex flex-col items-center text-center text-base ${
                index !== arr.length - 1
                  ? i18n.language === "ar"
                    ? "border-l border-white/40 pl-3"
                    : "border-r border-white/40 pr-3"
                  : ""
              }`}
            >
              <span
                className={`${
                  i18n.language === "ar" ? "text-base" : "text-sm"
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <button className="bg-[#2E2E2E] text-white px-3 py-3 rounded-xl text-xs font-semibold shadow-md transition-all duration-300 active:bg-[#444] active:scale-95">
          {t("navbar.ticket")}
        </button>
      </div>
    </>
  );
}

export default Home;
