import { useState } from 'react';
import './speakers.css';
import { IoShareSocial } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const speakersData = t('speakers.speakersList', { returnObjects: true });

  const openModal = (speaker) => setSelectedSpeaker(speaker);
  const closeModal = () => setSelectedSpeaker(null);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-tight">
            {t('speakers.title')}
          </h2>
          <p className="text-gray-600 text-xl lg:text-2xl pt-4 pb-6 max-w-3xl mx-auto">
            {t('speakers.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(speakersData).map(([key, value]) => (
            <div
              className="card group overflow-hidden cursor-pointer rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => openModal(value)}
              key={key}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="card-info">
                <img
                  src={value.image}
                  alt={value.name}
                  className="card-avatar select-none"
                />
                <div className="card-title">{value.name}</div>
                <div className="card-subtitle mt-2 text-gray-600">
                  {value.role}
                </div>
              </div>
              <div className="card-social">
                <button
                  className="hover-button hover:text-gray-800 text-gold/90 focus:text-gold/90 after:bg-gray-800/90"
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(value);
                  }}
                >
                  {value.button_text}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/30 backdrop-blur-sm transition-all duration-300 cursor-auto"
          onClick={closeModal}
        >
          <div
            className="relative m-4 p-6 w-11/12 md:w-3/5 min-w-[90%] md:min-w-[60%] max-w-[90%] md:max-w-[60%] rounded-xl bg-white shadow-2xl flex flex-col md:flex-row transform transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="300"
          >
            <button
              className={`absolute top-4 p-2 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer transition-colors duration-200 ${
                isArabic ? 'left-4' : 'right-4'
              }`}
              onClick={closeModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <a
              href={selectedSpeaker.social_media_link}
              target="_blank"
              rel="noopener noreferrer"
              className={`absolute top-16 p-2 text-gray-600 hover:text-gray-800 focus:outline-none cursor-pointer transition-colors duration-200 ${
                isArabic ? 'left-4' : 'right-4'
              }`}
            >
              <IoShareSocial className="h-6 w-6" />
            </a>

            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={selectedSpeaker.image}
                alt={selectedSpeaker.name}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md select-none"
              />
            </div>

            <div className="w-full md:w-2/3 md:px-8 flex flex-col mt-6 md:mt-0">
              <div className="text-2xl font-bold text-gray-800">
                {selectedSpeaker.name}
              </div>
              <div className="text-lg text-gray-600 mt-2 ar-font">
                {selectedSpeaker.role}
              </div>
              <div className="mt-6 text-gray-600 leading-relaxed overflow-y-auto max-h-64 md:max-h-72 pr-4">
                {selectedSpeaker.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Speakers;
