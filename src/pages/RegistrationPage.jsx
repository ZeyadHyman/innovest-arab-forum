import { useTranslation } from "react-i18next";
import { useState } from "react";

function RegistrationPage({ index }) {
    const { t } = useTranslation();
    const [isLoading, setIsLoading] = useState(true);
    const categories = t("registration.Categories", {
        returnObjects: true,
    });

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <>
            {/* Loading State */}
            {isLoading && (
                <div className="flex justify-center items-center h-[600px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            )}

            {/* Tally Form Embed */}
            <div className={`flex justify-center ${isLoading ? 'hidden' : ''}`}>
                {categories[index]?.formLink && (
                    <iframe
                        src={categories[index].formLink}
                        title={categories[index].title}
                        width="100%"
                        height={index === 0 ? "600" : "1100"}
                        frameBorder="0"
                        className="w-full rounded-xl"
                        allow="fullscreen"
                        onLoad={handleIframeLoad}
                    ></iframe>
                )}
            </div>
        </>
    );
}

export default RegistrationPage;
