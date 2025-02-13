import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Loader({ onComplete }) {
  const { t } = useTranslation();

  const [animation, setAnimation] = useState(
    "translate-x-full opacity-0 scale-95"
  );
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const fadeIn = setTimeout(
      () => setAnimation("translate-x-0 opacity-100 scale-100"),
      400
    );
    const fadeOut = setTimeout(() => {
      setAnimation("-translate-x-full opacity-0 scale-95");
      setIsFadingOut(true);
    }, 3000);

    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3500);

    return () => {
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#13212E] transition-opacity duration-700 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className={`absolute transition-all duration-1000 ease-out ${animation} text-center`}
      >
        <img
          src="./logo-name.png"
          alt="logo"
          className="w-1/2 md:w-1/4 mx-auto mb-4 animate-spin-slow"
        />
        <h1 className="px-1 text-4xl md:text-6xl font-extrabold tracking-wide leading-relaxed text-[#c3aa6a]">
          {t("loader.welcome")}
        </h1>
      </div>
    </div>
  );
}

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};
