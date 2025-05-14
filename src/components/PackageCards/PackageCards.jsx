import { useTranslation } from 'react-i18next';
import { Megaphone, CheckCircle } from 'lucide-react';
import { FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PackageCards() {
  const { t } = useTranslation();
  const lang = localStorage.getItem('language');
  const sponsorsData = t('conference_sponsors', { returnObjects: true });

  const sponsors = Object.entries(sponsorsData)
    .filter(([key]) => key !== 'title' && key !== 'description')
    .map(([key, value]) => ({ key, ...value }));

  const sponsorColors = {
    diamond_sponsor: 'bg-cyan-100 text-cyan-900 border-cyan-300',
    platinum_sponsor: 'bg-gray-100 text-gray-900 border-gray-300',
    gold_sponsor: 'bg-amber-200 text-amber-900 border-amber-400',
    silver_partner: 'bg-gray-200 text-gray-900 border-gray-400',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
      className="relative px-6 lg:px-20 mt-12 lg:mt-24 pb-16 lg:pb-28"
    >
      {/* Title */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
        className="text-xl lg:text-4xl font-extrabold text-center mb-2 lg:mb-4 text-gray-900"
      >
        {sponsorsData.title}
      </motion.h1>

      {/* Description */}
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
        }}
        className="text-xs lg:text-lg font-extrabold text-center mb-6 lg:mb-12 text-gray-600"
      >
        {sponsorsData.description}
      </motion.h1>

      {/* Sponsor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {sponsors.map((sponsor) => (
          <motion.div
            key={sponsor.key}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="group relative rounded-xl bg-white duration-300 overflow-hidden shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all h-full flex flex-col"
          >
            <div className="bg-white rounded-xl p-6 flex flex-col h-full">
              <h2
                className={`text-sm font-semibold text-center px-4 py-2 rounded-md border 
            ${sponsorColors[sponsor.key] || 'bg-gray-100 text-gray-800 border-gray-300'}`}
              >
                {sponsor.title}
              </h2>

              {/* Marketing Promotion Section */}
              <div className="mt-5">
                <h3 className="text-base font-medium flex items-center space-x-2 text-gray-800">
                  <Megaphone className="text-blue-500 w-5 h-5" />
                  <span>
                    {lang === 'en'
                      ? 'Marketing & Promotion'
                      : 'التسويق والترويج'}
                  </span>
                </h3>
                <ul className="text-sm space-y-2 text-gray-600 mt-2">
                  {sponsor.marketing_promotion?.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conference Benefits Section */}
              <div className="mt-5">
                <h3 className="text-base font-medium flex items-center space-x-2 text-gray-800">
                  <CheckCircle className="text-purple-500 w-5 h-5" />
                  <span>
                    {lang === 'en'
                      ? 'Conference Benefits'
                      : 'مزايا يوم المؤتمر'}
                  </span>
                </h3>
                <ul className="text-sm space-y-2 text-gray-600 mt-2">
                  {sponsor.conference_benefits?.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500 w-4 h-4 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register Button */}
              <div className="mt-auto mx-auto p-5">
                <Link to={'/RegistrationPage/sponsors'}>
                  <button className="select-none cursor-pointer bg-gradient-to-r from-gold to-gold text-white px-6 py-3 rounded-xl text-md font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 w-fit">
                    {t('navbar.register')}
                    <FaTicketAlt className="text-lg" />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
