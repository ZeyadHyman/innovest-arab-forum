import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getTimeLeft } from '../../utils/countdownTimer';
import { useTranslation } from 'react-i18next';
import { FaTicketAlt } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { TbSchoolBell } from 'react-icons/tb';
import './landing.css';
import RegistrationModal from '../RegistrationModal/RegistrationModal';

const Landing = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative pt-24 lg:pt-30 h-screen"
    >
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(22, 37, 86, 0.95), rgba(31, 41, 56, 0.95)), url(\'/images/landing-cover.webp\')',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto text-center">
            {/* Welcome Text */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className={`text-3xl md:text-4xl font-bold text-white/90 mb-3 ${isArabic ? 'ar-font' : ''
              }`}
            >
              {t('hero.welcome')}
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold text-gold mb-4 ${isArabic ? 'ar-font' : 'org-font tracking-widest'
              }`}
            >
              {t('hero.title')}
            </motion.h1>

            {/* Edition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center justify-center gap-2 text-gold mb-8"
            >
              <TbSchoolBell className="text-xl" />
              <span className="text-lg font-medium tracking-wider">
                {t('hero.edition')}
              </span>
            </motion.div>

            {/* Countdown Timer */}
            <div className="flex justify-center gap-3 md:gap-4 mb-8">
              {Object.entries(timeLeft).map(
                ([unit, { value, unit: formattedUnit }], index) => (
                  <motion.div
                    key={unit}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[80px] md:min-w-[100px] border border-white/20"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-white">
                      {value}
                    </span>
                    <span className="text-sm md:text-base text-white/80">
                      {formattedUnit}
                    </span>
                  </motion.div>
                )
              )}
            </div>

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              {/* Opening Day */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-white/20 flex flex-col justify-center items-center transform transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 group"
              >
                <div className="flex items-center gap-2 text-gold mb-4 group-hover:text-gold/90 transition-colors duration-300">
                  <IoMdTime className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs lg:text-lg font-medium">
                    {t('hero.openingDate')}
                  </span>
                </div>
                <a
                  href="https://maps.app.goo.gl/FRzpbjABGg37PZzj8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <FaMapMarkerAlt  className="text-gold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm lg:text-base text-center">
                    {t('hero.openingVenue')}
                  </span>
                </a>
              </motion.div>

              {/* Closing Day */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-5 lg:p-6 border border-white/20 flex flex-col justify-center items-center transform transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/10 group"
              >
                <div className="flex items-center gap-2 text-gold mb-4 group-hover:text-gold/90 transition-colors duration-300">
                  <IoMdTime className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs lg:text-lg font-medium">
                    {t('hero.closingDate')}
                  </span>
                </div>
                <a
                  href="https://maps.google.com/?q=Arab+League+Headquarters,+26VM%2BV8R,+Ismailia,+Qasr+El+Nil,+Cairo+Governorate+4272081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/90 hover:text-blue-400 transition-colors duration-300 group"
                >
                  <FaMapMarkerAlt className="text-gold group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm lg:text-base text-center">
                    {t('hero.closingVenue')}
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Register Button */}
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-gold to-gold/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gold/20 active:scale-95"
              >
                {t('navbar.register')}
                <FaTicketAlt className="text-xl transform group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.div>
  );
};

export default Landing;