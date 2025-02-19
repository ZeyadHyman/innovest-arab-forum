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
    <div className="px-4 lg:mx-20 mt-14 lg:mt-24" >
      <div data-aos="fade-left" className="lg:mb-14 text-3xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-tight text-center">
        {t("previousConferences.title")}
      </div>

      {/* Desktop Navigation */}
      <div data-aos="fade-right" className="hidden md:flex justify-center items-center text-lg text-gray-500 font-bold">
        <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
        {conferences.map((conference, i) => (
          <div key={i} className="flex items-center">
            <button
              onClick={() => setIndex(i)}
              className={`border-2 rounded border-gold px-6 py-3 cursor-pointer transition-all duration-300 text-lg font-semibold
              ${
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
        {conferences.map((conference, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`whitespace-nowrap px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300
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
      <div data-aos="fade-up" className="mt-1 lg:mt-10 py-12">
        {/* Title */}
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
          <div className="flex-1">
            {/* Conference Title */}
            <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              {conferences[index].title}
            </h1>

            {/* Location and Date */}
            <div className="flex items-center text-xs lg:text-lg text-gray-600 space-x-2 lg:space-x-6 mb-4">
              <h1 className="flex items-center space-x-1 lg:space-x-2">
                <FaMapMarkerAlt className="lg:text-xl text-gold" />
                <p>{conferences[index].location}</p>
              </h1>

              <h1 className="flex items-center space-x-1 lg:space-x-2">
                <FaCalendarAlt className="lg:text-xl text-gold" />
                <p>{conferences[index].date}</p>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base leading-tight text-gray-700 mb-6">
              {conferences[index].description}
            </p>

            {/* Objectives */}
            {conferences[index].objectives && (
              <div className="text-lg text-gray-700">
                <h2 className="font-bold flex items-center space-x-2">
                  <FaBullhorn className="text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Objectives"
                      : "أهداف المؤتمر"}
                  </span>
                </h2>
                <ul>
                  {conferences[index].objectives.map((objective, i) => (
                    <li key={i} className="text-sm lg:text-base">
                      - {objective}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Topics */}
            {conferences[index].topics && (
              <div className="text-lg text-gray-700 mt-6">
                <h2 className="font-bold flex items-center space-x-2">
                  <FaRocket className="text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Topics"
                      : "مواضيع المؤتمر"}
                  </span>
                </h2>
                <ul>
                  {conferences[index].topics.map((topic, i) => (
                    <li key={i} className="text-sm lg:text-base">
                      - {topic}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Highlights and Outcomes ON MOBILE  */}
            {/* Highlights */}
            {conferences[index].highlights && (
              <div className="text-lg text-gray-700 mt-6 block lg:hidden">
                <h2 className="font-bold flex items-center space-x-2">
                  <FaHandshake className="text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Highlights"
                      : "أبرز أحداث المؤتمر"}
                  </span>
                </h2>
                <ul>
                  {conferences[index].highlights.map((highlight, i) => (
                    <li key={i} className="text-sm lg:text-base">
                      - {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            {conferences[index].outcomes && (
              <div className="text-lg text-gray-700 mt-6 block lg:hidden">
                <h2 className="font-bold flex items-center space-x-2">
                  <FaBullhorn className="text-gold" />
                  <span>
                    {i18next.language === "en"
                      ? "Conference Outcomes"
                      : "نتائج المؤتمر"}
                  </span>
                </h2>
                <ul>
                  {conferences[index].outcomes.map((outcome, i) => (
                    <li key={i} className="text-sm lg:text-base">
                      - {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Image */}
          <div className="hidden lg:block md:w-80 lg:w-[600px]">
            <img
              className="w-full h-full object-cover rounded"
              src={`/Conferences/${index}/0.webp`}
              alt="Conference Image"
            />
          </div>
        </div>

        {/* Highlights and Outcomes ON DESKTOP  */}
        <div className="hidden lg:flex justify-between">
          {/* Highlights */}
          {conferences[index].highlights && (
            <div className="text-lg text-gray-700 mt-6">
              <h2 className="font-bold flex items-center space-x-2">
                <FaHandshake className="text-gold" />
                <span>
                  {i18next.language === "en"
                    ? "Conference Highlights"
                    : "أبرز أحداث المؤتمر"}
                </span>
              </h2>
              <ul>
                {conferences[index].highlights.map((highlight, i) => (
                  <li key={i} className="text-sm lg:text-base">
                    - {highlight}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Outcomes */}
          {conferences[index].outcomes && (
            <div  className="text-lg text-gray-700 mt-6 mx-32">
              <h2 className="font-bold flex items-center space-x-2">
                <FaBullhorn className="text-gold" />
                <span>
                  {i18next.language === "en"
                    ? "Conference Outcomes"
                    : "نتائج المؤتمر"}
                </span>
              </h2>
              <ul>
                {conferences[index].outcomes.map((outcome, i) => (
                  <li key={i} className="text-sm lg:text-base">
                    - {outcome}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Swiper Carousel for Images */}
        <div data-aos="fade-down" className="mt-10 lg:mt-20">
          <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
            {i18next.language === "en"
              ? "Photos from the Conference"
              : "صور من المؤتمر"}
          </h1>

          <Swiper
            dir="ltr"
            slidesPerView={window.innerWidth > 768 ? 3.1 : 1.1}
            spaceBetween={10}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Navigation]}
            className="lg:mt-10"
          >
            {[...Array(17).keys()].map((number) => (
              <SwiperSlide key={number}>
                <img
                  className="w-full h-full object-contain rounded-lg"
                  src={`/Conferences/${index}/${number}.webp`}
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
