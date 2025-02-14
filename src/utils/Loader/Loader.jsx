import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logo from "/logos/logo_trans.webp";

export default function Loader({ onComplete }) {
  const { t } = useTranslation();
  const [animation, setAnimation] = useState("opacity-0 scale-90");
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    let timeoutIds = [];

    timeoutIds.push(
      setTimeout(() => setAnimation("opacity-100 scale-100 md:scale-120"), 500)
    );

    timeoutIds.push(
      setTimeout(() => {
        setAnimation("opacity-0 scale-90");
        setIsFadingOut(true);
      }, 3000)
    );

    timeoutIds.push(
      setTimeout(() => {
        if (typeof onComplete === "function") onComplete();
      }, 3500)
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`select-none fixed inset-0 z-50 flex items-center justify-center bg-[#13212E] transition-opacity duration-700 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`absolute transition-all duration-1000 ease-out ${animation} text-center`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-1/2 md:w-1/4 mx-auto mb-4 animate-pulse"
        />
        <h1
          className={`px-1 text-4xl md:text-6xl font-extrabold tracking-wide leading-relaxed text-[#c3aa6a] ${
            isFadingOut ? "opacity-0" : "opacity-100"
          } transition-opacity duration-700`}
        >
          {t("loader.welcome")}
        </h1>
      </div>
    </div>
  );
}

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
