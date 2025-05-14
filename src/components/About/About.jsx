// import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();
  const aboutData = t('about', { returnObjects: true });

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.2 }}
      className="py-16 lg:py-28 relative bg-gradient-to-b from-white to-gray-50"
    >
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center lg:gap-16 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
            }}
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex"
          >
            <div
              className="w-full flex-col justify-center items-start gap-8 flex"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="w-full flex-col justify-start lg:items-start items-center gap-4 flex"
              >
                <h2 className="text-gold/90 text-3xl lg:text-5xl font-bold font-manrope leading-tight lg:text-start text-center">
                  {aboutData.slogan}
                </h2>
                <p className="text-gray-700 text-base lg:text-lg leading-relaxed max-w-2xl">
                  {aboutData.desc}
                </p>
              </motion.div>
              <motion.div
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="w-full lg:justify-start justify-center items-center sm:gap-12 gap-6 inline-flex"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex-col justify-start items-start inline-flex group hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-gold/90 text-4xl lg:text-5xl font-bold font-manrope leading-normal group-hover:text-gold transition-colors duration-300">
                    {aboutData.stat1Num} +
                  </h3>
                  <h6 className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed">
                    {aboutData.stat1}
                  </h6>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex-col justify-start items-start inline-flex group hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="text-gold/90 text-4xl lg:text-5xl font-bold font-manrope leading-normal text-center group-hover:text-gold transition-colors duration-300">
                    {aboutData.stat2Num} +
                  </h4>
                  <h6 className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed">
                    {aboutData.stat2}
                  </h6>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                  }}
                  className="flex-col justify-start items-start inline-flex group hover:scale-105 transition-transform duration-300"
                >
                  <h4 className="text-gold/90 text-4xl lg:text-5xl font-bold font-manrope leading-normal text-center group-hover:text-gold transition-colors duration-300">
                    {aboutData.stat3Num} +
                  </h4>
                  <h6 className="text-gray-600 text-base lg:text-lg font-medium leading-relaxed">
                    {aboutData.stat3}
                  </h6>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <div className="w-full justify-center items-start gap-6 lg:grid sm:grid-cols-2 grid-cols-1 hidden">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
              }}
              className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex"
            >
              <img
                className="rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                src="/images/aboutImage1.jpeg"
                alt="about Us image"
              />
            </motion.div>
            <motion.img
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
              }}
              className="hidden md:block ml-auto rounded-xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              src="/images/aboutimage2.jpeg"
              alt="about Us image"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
