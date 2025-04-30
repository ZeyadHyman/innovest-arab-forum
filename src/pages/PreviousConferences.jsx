import { useState } from "react";
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

function PreviousConferences() {
  const { t } = useTranslation();
  const conferences = t("previousConferences.conferences", {
    returnObjects: true,
  });
  const [index, setIndex] = useState(0);

  return (
    <div className="px-4 sm:px-6 lg:px-12 mt-10 sm:mt-14 lg:mt-20">
      <div
        data-aos="fade-left"
        className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-secondary tracking-wide leading-tight text-center mb-6 sm:mb-10 lg:mb-14"
      >
        {t("previousConferences.title")}
      </div>

      {/* Desktop Navigation */}
      <div
        data-aos="fade-right"
        className="hidden md:flex justify-center items-center text-base sm:text-lg text-gray-500 font-bold mb-6 sm:mb-8"
      >
        <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
        {conferences.map((conference, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => setIndex(i)}
              className={`border-2 rounded border-gold px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition-all duration-300 text-sm sm:text-base font-semibold
              ${
                index === i
                  ? "bg-gold text-white border-gold shadow-lg"
                  : "hover:text-gold hover:bg-gray-100"
              }`}
              aria-label={`Select ${conference.title}`}
            >
              {conference.title}
            </button>
            <div className="h-[2px] w-6 sm:w-9 bg-gold rounded-full"></div>
          </div>
        ))}
        <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex overflow-x-auto space-x-3 sm:space-x-4 mt-4 sm:mt-6 no-scrollbar px-2">
        {conferences.map((conference, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300
              ${
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

      {/* Conference Details */}
      <div data-aos="fade-up" className="mt-6 sm:mt-8 lg:mt-10 py-8 sm:py-10 lg:py-12">
        {/* Title and Image */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex-1">
            {/* Conference Title */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
              {conferences[index].title}
            </h1>

            {/* Location and Date */}
            <div className="flex items-center text-xs sm:text-sm lg:text-base text-gray-600 space-x-2 sm:space-x-4 lg:space-x-6 mb-4">
              <h1 className="flex items-center space-x-1 sm:space-x-2">
                <FaMapMarkerAlt className="text-sm sm:text-base lg:text-lg text-gold" />
                <p>{conferences[index].location}</p>
              </h1>
              <h1 className="flex items-center space-x-1 sm:space-x-2">
                <FaCalendarAlt className="text-sm sm:text-base lg:text-lg text-gold" />
                <p>{conferences[index].date}</p>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg leading-tight text-gray-700 mb-6">
              {conferences[index].description}
            </p>

            {/* Objectives */}
            {conferences[index].objectives && (
              <div className="text-sm sm:text-base lg:text-lg text-gray-700">
                <h2 className="font-bold flex items-center space-x-2 mb-2">
                  <FaBullhorn className="text-sm sm:text-base lg:text-lg text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Objectives"
                      : "أهداف المؤتمر"}
                  </span>
                </h2>
                <ul className="space-y-1">
                  {conferences[index].objectives.map((objective, i) => (
                    
                    <li key={i} className="text-xs sm:text-sm lg:text-base">
                      - {objective}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Topics */}
            {conferences[index].topics && (
              <div className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6">
                <h2 className="font-bold flex items-center space-x-2 mb-2">
                  <FaRocket className="text-sm sm:text-base lg:text-lg text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Topics"
                      : "مواضيع المؤتمر"}
                  </span>
                </h2>
                <ul className="space-y-1">
                  {conferences[index].topics.map((topic, i) => (
                    <li key={i} className="text-xs sm:text-sm lg:text-base">
                      - {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights and Outcomes ON MOBILE */}
            {conferences[index].highlights && (
              <div className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 block lg:hidden">
                <h2 className="font-bold flex items-center space-x-2 mb-2">
                  <FaHandshake className="text-sm sm:text-base lg:text-lg text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Highlights"
                      : "أبرز أحداث المؤتمر"}
                  </span>
                </h2>
                <ul className="space-y-1">
                  {conferences[index].highlights.map((highlight, i) => (
                    <li key={i} className="text-xs sm:text-sm lg:text-base">
                      - {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {conferences[index].outcomes && (
              <div className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 block lg:hidden">
                <h2 className="font-bold flex items-center space-x-2 mb-2">
                  <FaBullhorn className="text-sm sm:text-base lg:text-lg text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Outcomes"
                      : "نتائج المؤتمر"}
                  </span>
                </h2>
                <ul className="space-y-1">
                  {conferences[index].outcomes.map((outcome, i) => (
                    <li key={i} className="text-xs sm:text-sm lg:text-base">
                      - {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="hidden lg:block md:w-64 lg:w-96 xl:w-[600px]">
            <img
              className="w-full h-auto object-cover rounded-lg"
              src={`images/Conferences/${index}/0.webp`}
              alt="Conference Image"
            />
          </div>
        </div>

        {/* Highlights and Outcomes ON DESKTOP */}
        <div className="hidden lg:flex justify-between mt-6 sm:mt-8 lg:mt-10 gap-6">
          {conferences[index].highlights && (
            <div className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">
              <h2 className="font-bold flex items-center space-x-2 mb-2">
                <FaHandshake className="text-sm sm:text-base lg:text-lg text-gold" />
                <span>
                  {i18next.language === "en"
                    ? "Conference Highlights"
                    : "أبرز أحداث المؤتمر"}
                </span>
              </h2>
              <ul className="space-y-1">
                {conferences[index].highlights.map((highlight, i) => (
                  <li key={i} className="text-xs sm:text-sm lg:text-base">
                    - {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {conferences[index].outcomes && (
            <div className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">
              <h2 className="font-bold flex items-center space-x-2 mb-2">
                <FaBullhorn className="text-sm sm:text-base lg:text-lg text-gold" />
                <span>
                  {i18next.language === "en"
                    ? "Conference Outcomes"
                    : "نتائج المؤتمر"}
                </span>
              </h2>
              <ul className="space-y-1">
                {conferences[index].outcomes.map((outcome, i) => (
                  <li key={i} className="text-xs sm:text-sm lg:text-base">
                    - {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Swiper Carousel for Images */}
        <div data-aos="fade-down" className="mt-8 sm:mt-10 lg:mt-16">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4 sm:mb-6 leading-tight">
            {i18next.language === "en"
              ? "Photos from the Conference"
              : "صور من المؤتمر"}
          </h1>
          <Swiper
            dir="ltr"
            slidesPerView={1.1}
            spaceBetween={8}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2.1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3.1,
                spaceBetween: 12,
              },
            }}
            modules={[Autoplay, Navigation]}
            className="mt-6 sm:mt-8 lg:mt-10 pb-4 sm:pb-6"
          >
            {[...Array(17).keys()].map((number) => (
              <SwiperSlide key={number}>
                <img
                  className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                  src={`images/Conferences/${index}/${number}.webp`}
                  alt={`Conference ${number}`}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PreviousConferences;