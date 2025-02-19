import { useEffect, useState } from "react";
import { getTimeLeft } from "../../utils/countdownTimer";
import { useTranslation } from "react-i18next";
import { FaTicketAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { TbSchoolBell } from "react-icons/tb";
const Landing = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div
        className="w-full h-screen md:pt-[152.28px] bg-center bg-cover bg-no-repeat lg:pb-30"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 37, 86, 0.9), rgba(31, 41, 56, 0.9)), url('/images/landing-cover.jpg')`,
        }}
      >
        <div className="w-full h-full container m-auto py-4 px-6 md:py-5 md:px-10 lg:px-22 mty">
          <div className="flex flex-col justify-center h-full w-full text-white mt-10">
            <p
              className={`font-bold ${
                isArabic ? "text-5xl ar-font" : "text-6xl"
              }`}
            >
              {t("hero.welcome")}
            </p>
            <p
              className={`text-[var(--color-gold)] ${
                isArabic
                  ? "ar-font font-bold mt-8"
                  : "org-font tracking-widest mt-6"
              } text-7xl`}
            >
              {t("hero.title")}
            </p>
            <div>
              <p className="text-lg lg:text-3xl font-bold mt-8">
                {Object.entries(timeLeft).map(
                  ([unit, { value, unit: formattedUnit }]) => (
                    <span
                      key={unit}
                      className="relative inline-block text-center rounded border border-white/15 w-[80px] lg:w-[150px] text-white py-2 px-4 lg:py-4 lg:px-8 font-bold mr-3 z-10 "
                    >
                      {value}{" "}
                      <p className="text-xs lg:text-lg font-normal">
                        {formattedUnit}
                      </p>
                    </span>
                  )
                )}
              </p>
            </div>
            <div className="flex md:gap-5 my-10 item-center md:flex-row flex-col gap-2 item">
              <a
                href="https://maps.app.goo.gl/kkq8XyM2jmRctFVz7"
                target="_blank"
                className="flex gap-2 "
              >
                <span className="">
                  <FaMapMarkerAlt />
                </span>
                {t("hero.location")}
              </a>

              <div className="sep"></div>

              <div className="flex gap-2 ">
                <IoMdTime className=" font-bold text-xl" />
                {t("hero.date")}
              </div>

              <div className="sep"></div>

              <div className="flex gap-2 ">
                <TbSchoolBell className=" font-bold text-xl" />
                {t("hero.edition")}
              </div>
            </div>

            <button className="select-none cursor-pointer bg-gradient-to-r from-gold to-gold text-white px-6 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 w-fit">
              {t("navbar.ticket")}
              <FaTicketAlt className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
