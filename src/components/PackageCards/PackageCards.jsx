import { useTranslation } from "react-i18next";
import { Megaphone, CheckCircle } from "lucide-react";

export default function PackageCards() {
  const { t } = useTranslation();
  const lang = localStorage.getItem("language");
  const sponsorsData = t("conference_sponsors", { returnObjects: true });

  const sponsors = Object.entries(sponsorsData)
    .filter(([key]) => key !== "title")
    .map(([key, value]) => ({ key, ...value }));

  return (
    <div className="relative px-4 lg:px-16 mt-10 lg:mt-20 pb-16 lg:pb-24">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-900">
        {sponsorsData.title}
      </h1>

      {/* Sponsor Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.key}
            className="group relative p-6 rounded-lg bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-2"
          >
            <div className="relative bg-white rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4 text-gray-900 text-center">
                {sponsor.title}
              </h2>

              {/* Marketing Promotion Section */}
              <div className="mt-4">
                <h3 className="text-base font-semibold mb-3 flex items-center space-x-2 text-gray-800">
                  <Megaphone className="text-blue-500 w-5 h-5" />
                  <span>{lang === 'en' ? "Marketing & Promotion" : "التسويق والترويج"}</span>
                </h3>
                <ul className="text-xs space-y-1.5 text-gray-600">
                  {sponsor.marketing_promotion?.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500 w-3.5 h-3.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conference Benefits Section */}
              <div className="mt-4">
                <h3 className="text-base font-semibold mb-3 flex items-center space-x-2 text-gray-800">
                  <CheckCircle className="text-purple-500 w-5 h-5" />
                  <span>{lang === "en" ? "Conference Benefits" : "مزايا يوم المؤتم"}</span>
                </h3>
                <ul className="text-xs space-y-1.5 text-gray-600">
                  {sponsor.conference_benefits?.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="text-green-500 w-3.5 h-3.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
