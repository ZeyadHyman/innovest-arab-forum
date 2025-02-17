import { useState } from "react";
import "./speakers.css";
import { IoShareSocial } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Speakers() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";
  const speakersData = t("speakers.speakersList", { returnObjects: true });

  const openModal = (speaker) => setSelectedSpeaker(speaker);
  const closeModal = () => setSelectedSpeaker(null);

  return (
    <>
      <div className="container mx-auto my-10 px-4 sm:px-6 md:my-22 lg:px-12 ">
        <h2 className="text-6xl p-10 text-center">{t("speakers.title", { returnObjects: true })}</h2>
        <div className="flex flex-wrap justify-center gap-12 ">
          {Object.entries(speakersData).map(([key, value]) => (
            <div className="card group overflow-hidden cursor-pointer" onClick={() => openModal(value)} key={key}>
              <div className="card-info">
                <img src={value.image} alt={value.name} className="card-avatar" />
                <div className="card-title">{value.name}</div>
                <div className="card-subtitle mt-2">{value.role}</div>
              </div>
              <div className="card-social">
                <button
                  className={isArabic ? "view-details-button-ar" : "view-details-button-en"}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(value);
                  }}
                >
                  <p
                    className={`${
                      isArabic ? "view-details-button__text-ar" : "view-details-button__text-en"
                    } text-gradient-to-r from-gray-900 to-gray-800 `}
                  >
                    {value.button_text}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${isArabic ? "view-details-button__icon-ar" : "view-details-button__icon-en"} h-6 w-6`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={4}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              {selectedSpeaker?.name === value.name && (
                <div
                  className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-0 backdrop-blur-none transition-all duration-300 cursor-auto"
                  style={{
                    pointerEvents: "auto",
                    backgroundColor: "rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                  onClick={closeModal}
                >
                  <div
                    className="relative m-4 p-4 w-11/12 md:w-3/5 min-w-[90%] md:min-w-[60%] max-w-[90%] md:max-w-[60%] rounded-lg bg-white shadow-sm flex flex-col md:flex-row"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className={`absolute top-2 p-2 text-slate-600 hover:text-slate-800 focus:outline-none cursor-pointer ${
                        isArabic ? "left-2" : "right-2"
                      }`}
                      onClick={closeModal}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    <a
                      href={value.social_media_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute top-12 p-2 text-slate-600 hover:text-slate-800 focus:outline-none cursor-pointer ${
                        isArabic ? " left-2" : "right-2"
                      }`}
                    >
                      <IoShareSocial className="h-6 w-6" />
                    </a>

                    <div className="w-full md:w-1/3 flex-shrink-0">
                      <img src={value.image} alt={value.name} className="w-full h-64 md:h-96 object-cover rounded-lg" />
                    </div>

                    <div className="w-full md:w-2/3 md:px-6 flex flex-col mt-4 md:mt-0">
                      <div className="text-2xl px-3 text-slate-800">{value.name}</div>
                      <div className="text-lg px-3 text-slate-600 mt-2 ar-font">{value.role}</div>
                      <div className="mt-4 text-slate-600 font-light overflow-y-auto max-h-64 md:max-h-72 p-3 py-6">{value.description}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Speakers;
