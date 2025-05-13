import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const sponsorsData = {
  mainSponsors: [
    {
      src: '/Sponsors/493727546_122123926850767884_5697793916533181427_n.jpg',
      alt: 'Main Sponsor 1',
      url: '#',
    },
    {
      src: '/Sponsors/468215921_122141071826346875_4343080864178798598_n.jpg',
      alt: 'Main Sponsor 2',
      url: '#',
    },
    {
      src: '/Sponsors/494995183_122128064450785569_4686151198893537193_n.jpg',
      alt: 'Main Sponsor 3',
      url: '#',
    },
    {
      src: '/Sponsors/Qaderoon%20Logo.png',
      alt: 'Main Sponsor 4',
      url: '#',
    },
  ],
  strategicSponsor: {
    src: '/Sponsors/Emblem_of_the_Arab_League.svg.png',
    alt: 'Main Strategic Sponsor',
    url: '#',
  },
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const cn = (...classes) => classes.filter(Boolean).join(' ');

const SponsorCard = ({ sponsor, index, isStrategic = false }) => (
  <motion.div
    variants={itemVariants}
    className={cn(
      "relative group bg-white rounded-xl shadow-lg p-4 flex items-center justify-center",
      "transition-all duration-300 hover:shadow-xl overflow-hidden",
      isStrategic ? "w-[200px] h-[200px] md:w-[250px] md:h-[250px]" : "w-[140px] h-[140px] md:w-[180px] md:h-[180px]",
      "hover:scale-[1.03] transform-gpu"
    )}
    whileHover={{ y: -5 }}
  >
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full flex items-center justify-center p-2"
    >
      <img
        src={sponsor.src}
        alt={sponsor.alt}
        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </a>
    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gold transition-all duration-300 pointer-events-none" />
  </motion.div>
);

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
  index: PropTypes.number,
  isStrategic: PropTypes.bool,
};

const SponsorGroup = ({ title, subtitle, sponsors, isStrategic = false }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="my-12 md:my-20"
    >
      <motion.div variants={itemVariants} className="px-20 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {title}
          <span className="text-gray-600 text-sm mx-5">
            ({subtitle})
          </span>

        </h2>

      </motion.div>

      <motion.div
        variants={containerVariants}
        className={cn(
          'flex flex-wrap gap-6 md:gap-10 justify-center items-center',
          isStrategic ? 'px-4' : ''
        )}
      >
        {(Array.isArray(sponsors) ? sponsors : [sponsors]).map((sponsor, index) => (
          <SponsorCard
            key={index}
            sponsor={sponsor}
            index={index}
            isStrategic={isStrategic}
          />
        ))}
      </motion.div>
    </motion.section>
  );
};

SponsorGroup.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  sponsors: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        url: PropTypes.string,
      })
    ),
    PropTypes.object,
  ]).isRequired,
  isStrategic: PropTypes.bool,
};

const SponsorsPartners = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-20">
      <div className="  mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold">
              {t('sponsors_partners.title')}
            </span>
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('sponsors_partners.subtitle')}
          </motion.p>
        </motion.header>

        <div className="space-y-10">
          <SponsorGroup
            title={t('sponsors_partners.officialSponsorOrganizational')}
            subtitle={t('sponsors_partners.mainSponsorSubtitle')}
            sponsors={sponsorsData.mainSponsors}
          />

          <SponsorGroup
            title={t('sponsors_partners.officialSponsorStrategic')}
            subtitle={t('sponsors_partners.strategicSponsorSubtitle')}
            sponsors={sponsorsData.strategicSponsor}
            isStrategic={true}
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsPartners;