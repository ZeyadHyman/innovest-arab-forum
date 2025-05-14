import { useTranslation } from 'react-i18next';
import { FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const categories = t('registration.Categories', { returnObjects: true });
  const isRTL = i18n.language.startsWith('ar');
  const modalRef = useRef(null);
  const firstFocusableRef = useRef(null);
  const lastFocusableRef = useRef(null);

  // Prevent body scroll and manage focus when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';

      // Focus trapping
      const focusableElements = modalRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements?.length) {
        firstFocusableRef.current = focusableElements[0];
        lastFocusableRef.current = focusableElements[focusableElements.length - 1];
        firstFocusableRef.current.focus();

        const handleKeyDown = (e) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstFocusableRef.current) {
              e.preventDefault();
              lastFocusableRef.current.focus();
            } else if (!e.shiftKey && document.activeElement === lastFocusableRef.current) {
              e.preventDefault();
              firstFocusableRef.current.focus();
            }
          }
          if (e.key === 'Escape') {
            onClose();
          }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/70 backdrop-blur-md transition-opacity duration-300 overflow-y-auto"
      onClick={handleModalClick}
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div
        ref={modalRef}
        className={`relative my-4 w-full max-w-[95%] sm:max-w-3xl lg:max-w-7xl min-h-[50vh] max-h-[90vh] rounded-3xl bg-gradient-to-br from-white to-gray-50 overflow-y-auto transition-all duration-300 animate-[scaleIn_0.3s_ease-out] ${isRTL ? 'text-right' : 'text-left'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm p-3 sm:p-4">
          {/* Close Button */}
          <button
            className={`absolute top-3 ${isRTL ? 'left-3' : 'right-3'} flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 transition-all duration-200`}
            onClick={onClose}
            aria-label={t('registration.closeModal')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-3 sm:p-4 lg:p-6">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6">
            <h2
              id="modal-title"
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 tracking-tight bg-clip-text bg-gradient-to-r from-gold to-gold"
            >
              {t('registration.title')}
            </h2>
            <p className="mt-2 text-xs sm:text-sm lg:text-base text-gray-600 max-w-2xl mx-auto">
              {t('registration.subtitle')}
            </p>
          </div>

          {/* Registration Options */}
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`relative flex flex-col rounded-2xl p-3 sm:p-4 border-2 transition-all duration-300 ${index === 1
                  ? 'border-gold bg-white scale-[1.02]'
                  : 'border-gray-200 bg-white'
                  }`}
              >
                {/* Category Header */}
                <div className="mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 flex items-center gap-2">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-base font-extrabold text-gold">
                    {category.price}
                    {category.duration && (
                      <span className="text-xs font-medium text-gray-500 ml-1">
                        /{category.duration}
                      </span>
                    )}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Benefits */}
                <ul className="mb-3 sm:mb-4 space-y-2 text-xs sm:text-sm text-gray-700 flex-grow">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className={`inline-flex items-center justify-center ${isRTL ? 'ml-2' : 'mr-2'} ${index === 1 ? 'text-gold' : 'text-gray-400'}`}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Register Button */}
                <div className="mt-auto">
                  {/* Register Button */}
                  {/* 
                  <Link
                    to={category.route ? `/RegistrationPage/${category.route}` : '/RegistrationPage'}
                    onClick={onClose}
                  >
                    <button
                      className={`w-full flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 
                        ${index === 1
                          ? 'bg-gradient-to-r from-gold to-gold hover:from-gold hover:to-gold focus:ring-gold'
                          : 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-500'
                        }`}
                    >
                      {t('navbar.register')}
                      <FaTicketAlt className="text-xs sm:text-sm" />
                    </button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
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