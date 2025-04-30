import { useTranslation } from "react-i18next";
import { FaTicketAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const RegistrationModal = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const categories = t("registration.Categories", { returnObjects: true });

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    // Close modal when clicking outside the content
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
        className="relative m-4 p-4 w-11/12 md:w-5/6 lg:w-4/5 max-w-6xl rounded-xl bg-white shadow-2xl transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 ltr:right-2 rtl:left-2 p-2 text-gray-400 hover:text-gray-600 focus:outline-none transition-colors duration-200"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">{t("registration.title")}</h2>

        {/* Registration Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 border border-gray-100 hover:border-gold/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-base font-semibold text-gray-800">{category.title}</h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-xs mb-3">{category.description}</p>

              {/* Benefits */}
              <div className="mb-4">
                <ul className="space-y-1 text-xs text-gray-600">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-gold mr-1">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Register Button */}
              <div className="mt-2">

                <Link
                  to={index === 0 ? "/RegistrationPage/members" : "/RegistrationPage/sponsors"}
                  onClick={onClose}
                >
                  <button className="w-full bg-gradient-to-r from-gold to-gold/90 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    {t("navbar.register")}
                    <FaTicketAlt className="text-sm" />
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