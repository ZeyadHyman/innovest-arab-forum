import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBullhorn,
  FaHandshake,
  FaRocket,
} from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import i18next from 'i18next';
import { motion, AnimatePresence } from 'framer-motion';

function PreviousConferences() {
  const { t } = useTranslation();
  const conferences = t('previousConferences.conferences', {
    returnObjects: true,
  });
  const [index, setIndex] = useState(0);

  // Animation Variants
  const pageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const navContainerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const contentSectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut', staggerChildren: 0.1 },
    },
  };

  const contentItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  const swiperSectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };


  return (
    <motion.div
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
      className="px-4 lg:mx-20 mt-14 lg:mt-24"
    >
      <motion.div
        variants={titleVariants}
        className="lg:mb-14 text-3xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-tight text-center"
      >
        {t('previousConferences.title')}
      </motion.div>

      {/* Desktop Navigation */}
      <motion.div
        variants={navContainerVariants}
        className="hidden md:flex justify-center items-center text-lg text-gray-500 font-bold"
      >
        <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
        {conferences.map((conference, i) => (
          <motion.div key={i} className="flex items-center" variants={navItemVariants}>
            <button
              onClick={() => setIndex(i)}
              className={`border-2 rounded border-gold px-4 sm:px-6 py-2 sm:py-3 cursor-pointer transition-all duration-300 text-sm sm:text-base font-semibold
              ${index === i
                  ? 'bg-gold text-white border-gold shadow-lg'
                  : 'hover:text-gold hover:bg-gray-100'
                }`}
              aria-label={`Select ${conference.title}`}
            >
              {conference.title}
            </button>
            <div className="h-[2px] w-6 sm:w-9 bg-gold rounded-full"></div>
          </motion.div>
        ))}
        <div className="h-[2px] w-full flex-1 bg-gold rounded-full"></div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        variants={navContainerVariants}
        className="md:hidden flex overflow-x-auto space-x-3 sm:space-x-4 mt-4 sm:mt-6 no-scrollbar px-2"
      >
        {conferences.map((conference, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            variants={navItemVariants}
            className={`whitespace-nowrap px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300
              ${index === i
                ? 'bg-gold text-white border-gold border-none shadow-lg'
                : 'border-gold text-gray-600 border-2 hover:bg-gray-100'
              }`}
            aria-label={`Select ${conference.title}`}
            aria-current={index === i ? 'true' : 'false'}
          >
            {conference.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Conference Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index} // Key for AnimatePresence to detect change
          variants={contentSectionVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="mt-6 sm:mt-8 lg:mt-10 py-8 sm:py-10 lg:py-12"
        >
          {/* Title and Image */}
          <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8">
            <motion.div className="flex-1" variants={contentItemVariants}>
              {/* Conference Title */}
              <motion.h1 variants={contentItemVariants} className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                {conferences[index].title}
              </motion.h1>

              {/* Location and Date */}
              <motion.div variants={contentItemVariants} className="flex items-center text-xs sm:text-sm lg:text-base text-gray-600 space-x-2 sm:space-x-4 lg:space-x-6 mb-4">
                <h1 className="flex items-center space-x-1 sm:space-x-2">
                  <FaMapMarkerAlt className="text-sm sm:text-base lg:text-lg text-gold" />
                  <p>{conferences[index].location}</p>
                </h1>
                <h1 className="flex items-center space-x-1 sm:space-x-2">
                  <FaCalendarAlt className="text-sm sm:text-base lg:text-lg text-gold" />
                  <p>{conferences[index].date}</p>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg leading-tight text-gray-700 mb-6">
                {conferences[index].description}
              </motion.p>

              {/* Objectives */}
              {conferences[index].objectives && (
                <motion.div variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg text-gray-700">
                  <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2 mb-2">
                    <FaBullhorn className="text-sm sm:text-base lg:text-lg text-gold" />
                    <span>
                      {i18next.language === 'en'
                        ? 'Conference Objectives'
                        : 'أهداف المؤتمر'}
                    </span>
                  </motion.h2>
                  <ul className="space-y-1">
                    {conferences[index].objectives.map((objective, i) => (
                      <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                        - {objective}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Topics */}
              {conferences[index].topics && (
                <motion.div variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6">
                  <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2 mb-2">
                    <FaRocket className="text-sm sm:text-base lg:text-lg text-gold" />
                    <span>
                      {i18next.language === 'en'
                        ? 'Conference Topics'
                        : 'مواضيع المؤتمر'}
                    </span>
                  </motion.h2>
                  <ul className="space-y-1">
                    {conferences[index].topics.map((topic, i) => (
                      <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                        - {topic}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Highlights and Outcomes ON MOBILE */}
              {conferences[index].highlights && (
                <motion.div variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 block lg:hidden">
                  <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2 mb-2">
                    <FaHandshake className="text-sm sm:text-base lg:text-lg text-gold" />
                    <span>
                      {i18next.language === 'en'
                        ? 'Conference Highlights'
                        : 'أبرز أحداث المؤتمر'}
                    </span>
                  </motion.h2>
                  <ul className="space-y-1">
                    {conferences[index].highlights.map((highlight, i) => (
                      <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                        - {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {conferences[index].outcomes && (
                <motion.div variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg text-gray-700 mt-4 sm:mt-6 block lg:hidden">
                  <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2 mb-2">
                    <FaBullhorn className="text-sm sm:text-base lg:text-lg text-gold" />
                    <span>
                      {i18next.language === 'en'
                        ? 'Conference Outcomes'
                        : 'نتائج المؤتمر'}
                    </span>
                  </motion.h2>
                  <ul className="space-y-1">
                    {conferences[index].outcomes.map((outcome, i) => (
                      <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                        - {outcome}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>

            {/* Image */}
            <motion.div variants={imageVariants} className="hidden lg:block md:w-64 lg:w-96 xl:w-[600px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index} // Re-trigger animation on image change
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full h-auto object-cover rounded-lg"
                  src={`images/Conferences/${index}/0.webp`}
                  alt="Conference Image"
                />
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Highlights and Outcomes ON DESKTOP */}
          <motion.div variants={contentSectionVariants} className="hidden lg:flex justify-between mt-6 sm:mt-8 lg:mt-10 gap-6">
            {conferences[index].highlights && (
              <motion.div variants={contentItemVariants} className="text-sm sm:text-base lg:text-lg text-gray-700 flex-1">
                <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2 mb-2">
                  <FaHandshake className="text-sm sm:text-base lg:text-lg text-gold" />
                  <span>
                    {i18next.language === 'en'
                      ? 'Conference Highlights'
                      : 'أبرز أحداث المؤتمر'}
                  </span>
                </motion.h2>
                <ul className="space-y-1">
                  {conferences[index].highlights.map((highlight, i) => (
                    <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                      - {highlight}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
            {conferences[index].outcomes && (
              <motion.div variants={contentItemVariants} className="text-lg text-gray-700 mt-6 mx-32">
                <motion.h2 variants={contentItemVariants} className="font-bold flex items-center space-x-2">
                  <FaBullhorn className="text-gold" />
                  <span>
                    {i18next.language === 'en'
                      ? 'Conference Outcomes'
                      : 'نتائج المؤتمر'}
                  </span>
                </motion.h2>
                <ul className="space-y-1">
                  {conferences[index].outcomes.map((outcome, i) => (
                    <motion.li variants={contentItemVariants} key={i} className="text-xs sm:text-sm lg:text-base">
                      - {outcome}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>

          {/* Swiper Carousel for Images */}
          <motion.div
            variants={swiperSectionVariants}
            className="mt-10 lg:mt-20"
          >
            <motion.h1 variants={contentItemVariants} className="text-2xl lg:text-4xl font-extrabold text-gray-800 mb-4 leading-tight">
              {i18next.language === 'en'
                ? 'Photos from the Conference'
                : 'صور من المؤتمر'}
            </motion.h1>
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
                  <motion.img
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full h-auto max-h-[400px] object-contain rounded-lg"
                    src={`images/Conferences/${index}/${number}.webp`}
                    alt={`Conference ${number}`}
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default PreviousConferences;