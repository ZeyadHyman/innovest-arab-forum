import { useTranslation } from "react-i18next";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RegistrationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const categories = t("registration.Categories", { returnObjects: true });

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black/50 backdrop-blur-sm transition-all duration-300"
      onClick={handleModalClick}
    >
      <div
        className="relative m-4 p-4 w-full max-w-[95%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-5xl rounded-xl bg-white shadow-2xl transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-3 ltr:right-3 rtl:left-3 p-2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
          onClick={onClose}
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

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">{t("registration.title")}</h2>

        {/* Registration Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-h-[70vh] overflow-y-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-gold/30 transition-all duration-300 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">{category.description}</p>

              {/* Benefits */}
              <div className="mb-6">
                <ul className="space-y-2 text-sm text-gray-600">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register Button */}
              <div className="mt-auto flex justify-center">
                <Link 
                  to={index === 0 ? "/RegistrationPage/members" : "/RegistrationPage/sponsors"}
                  onClick={onClose}
                >
                  <button className="bg-gradient-to-r from-gold to-gold/90 text-white px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    {t("navbar.register")}
                    <FaTicketAlt className="text-base" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

RegistrationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default RegistrationModal;