import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

function Jury() {
  const { t } = useTranslation();

  const juryMembers = t('jury.juryMembers', { returnObjects: true });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.1 }}
      className="py-12 mx-auto px-4 sm:px-6 lg:px-60 w-full bg-gray-100"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-center space-y-2 mb-8 md:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-secondary tracking-wide leading-tight text-center">
          {t('jury.title')}
        </h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 text-center text-base sm:text-lg md:text-2xl">
          {t('jury.subtitle')}
        </p>
      </motion.div>

      {/* Desktop Grid Layout */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {juryMembers.reverse().map((member, index) => {
          const isHeadOfJury =
            member.name === 'Eng. Magdy Wahba' ||
            member.name === 'م. مجدي وهبه';

          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className={`flex flex-col bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 ${isHeadOfJury ? 'relative' : ''
                }`}
            >
              {isHeadOfJury && (
                <div className="absolute top-0 right-0 bg-gold/70 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                  {t('jury.headOfJury')}
                </div>
              )}
              <div className="aspect-square overflow-hidden flex justify-center items-center">
                <img
                  className="w-full h-full object-cover"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-sm text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Tablet/Mobile Swiper Layout */}
      <motion.div
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="lg:hidden px-2"
      >
        <Swiper
          dir="ltr"
          slidesPerView="auto"
          spaceBetween={16}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            400: {
              slidesPerView: 1.4,
              spaceBetween: 14,
            },
            480: {
              slidesPerView: 1.6,
              spaceBetween: 16,
            },
            600: {
              slidesPerView: 1.8,
              spaceBetween: 18,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2.5,
              spaceBetween: 22,
            },
          }}
          modules={[Autoplay]}
          className='mt-6 pb-4'
        >
          {juryMembers.map((member, index) => {
            const isHeadOfJury =
              member.name === 'Eng. Magdy Wahba' ||
              member.name === 'م. مجدي وهبه';

            return (
              <SwiperSlide key={index} className="!h-auto">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className={`flex flex-col h-full bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg overflow-hidden transition-all duration-300 ${isHeadOfJury ? 'relative' : ''
                    }`}
                >
                  {isHeadOfJury && (
                    <div className="absolute top-0 right-0 bg-gold/70 text-white px-3 py-1 rounded-bl-lg text-xs font-semibold">
                      {t('jury.headOfJury')}
                    </div>
                  )}
                  <div className="aspect-square overflow-hidden flex justify-center items-center">
                    <img
                      className="w-full h-full object-cover"
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h4 className="text-base font-semibold mb-1">
                      {member.name}
                    </h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
}

export default Jury;