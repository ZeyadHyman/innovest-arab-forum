import { useTranslation } from "react-i18next";

function RegistrationPage({ index }) {
    const { t } = useTranslation();
    const categories = t("registration.Categories", {
        returnObjects: true,
    });

    return (
        <>
            {/* Tally Form Embed */}
            <div className="flex justify-center">
                {categories[index]?.formLink && (
                    <iframe
                        src={categories[index].formLink}
                        title={categories[index].title}
                        width="100%"
                        height={index === 0 ? "600" : "1300"}
                        frameBorder="0"
                        className="w-full rounded-xl"
                        allow="fullscreen"
                    ></iframe>
                )}
            </div>
        </>
    );
}

export default RegistrationPage;
