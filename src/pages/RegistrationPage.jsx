import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function RegistrationPage({ index = 0 }) {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const categories = t('registration.Categories', {
    returnObjects: true,
  });

  useEffect(() => {
    // Reset loading state when index changes
    setIsLoading(true);
  }, [index]);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Get the current category based on index
  const currentCategory = categories[index];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-[600px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
      )}

      {/* Form Container */}
      <div className={`${isLoading ? 'hidden' : ''}`}>
        {currentCategory?.formLink ? (
          // External form (VIP registration)
          <iframe
            src={currentCategory.formLink}
            title={currentCategory.title}
            width="100%"
            height="1100"
            frameBorder="0"
            className="w-full rounded-xl"
            allow="fullscreen"
            onLoad={handleIframeLoad}
          ></iframe>
        ) : (
          // Internal form (Standard or Sponsor registration)
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              {currentCategory?.title}
            </h1>
            <p className="text-gray-600 mb-8">{currentCategory?.description}</p>

            {/* Add your internal form component here */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-center text-gray-600">
                Registration form will be available soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

RegistrationPage.propTypes = {
  index: PropTypes.number.isRequired,
};

export default RegistrationPage;
