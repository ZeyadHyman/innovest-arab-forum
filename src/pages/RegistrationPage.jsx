import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaBullhorn,
    FaHandshake,
    FaRocket,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import i18next from "i18next";

function RegistrationPage() {
    const { t } = useTranslation();
    const categories = t("registration.Categories", {
        returnObjects: true,
    });
    const [index, setIndex] = useState(0);

    return (
        <div className="px-4 lg:mx-20 mt-14 lg:mt-24">
            <div
                data-aos="fade-left"
                className="lg:mb-14 text-3xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-tight text-center"
            >
                {t("registration.title")}
            </div>

            {/* Desktop Navigation */}
            <div
                data-aos="fade-right"
                className="hidden md:flex justify-center items-center text-lg text-gray-500 font-bold"
            >
                <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
                {categories &&
                    categories.map((conference, i) => (
                        <div key={i} className="flex items-center">
                            <button
                                onClick={() => setIndex(i)}
                                className={`border-2 rounded border-gold px-6 py-3 cursor-pointer transition-all duration-300 text-lg font-semibold ${
                                    index === i
                                        ? "bg-gold text-white border-gold shadow-lg"
                                        : "hover:text-gold hover:bg-gray-100"
                                }`}
                                aria-label={`Select ${conference.title}`}
                            >
                                {conference.title}
                            </button>
                            <div className="h-[2px] w-9 bg-gold rounded-full"></div>
                        </div>
                    ))}
                <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex overflow-x-auto space-x-4 mt-6 no-scrollbar px-2">
                {categories.map((conference, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`whitespace-nowrap px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                            index === i
                                ? "bg-gold text-white border-gold border-none shadow-lg"
                                : "border-gold text-gray-600 border-2 hover:bg-gray-100"
                        }`}
                        aria-label={`Select ${conference.title}`}
                        aria-current={index === i ? "true" : "false"}
                    >
                        {conference.title}
                    </button>
                ))}
            </div>

            {/* Tally Form Embed */}
            <div className="mt-10 flex justify-center">
                {categories[index]?.formLink && (
                    <iframe
                        src={categories[index].formLink}
                        title={categories[index].title}
                        width="100%"
                        height="800"
                        frameBorder="0"
                        className="w-full max-w-4xl rounded-xl shadow-xl"
                        allow="fullscreen"
                    ></iframe>
                )}
            </div>
        </div>
    );
}

export default RegistrationPage;
