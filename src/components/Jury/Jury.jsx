import { useTranslation } from "react-i18next";

function Jury() {
  const { t } = useTranslation();

  const juryMembers = t("jury.juryMembers", { returnObjects: true });

  return (
    <section className="pt-12 container mx-auto my-10 px-4 sm:px-6 md:my-22 lg:px-12">
      <div className="text-center">
        <h3 className="text-6xl text-primary p-4">{t("jury.title")}</h3>
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 text-center text-2xl p-4 mb-4">
        {t("jury.subtitle")}
        </p>
      </div>
      <div className="flex flex-wrap-reverse justify-center gap-x-20 gap-y-2">
        {juryMembers.map((member, index) => {
          const isHeadOfJury =
            member.name === "Eng. Magdy Wahba" || member.name === "م. مجدي وهبه";
          const isLastFour = index >= juryMembers.length - 4;

          return (
            <div
              key={index}
              className={`flex flex-col bg-white shadow-xl hover:shadow-xl transition-shadow duration-300 border border-slate-200 rounded-lg my-6 overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                isHeadOfJury
                  ? "w-96 outline-10 outline-gold relative "
                  : "w-80"
              }`}
            >
              {/* Add a badge for the head of the jury */}
              {isHeadOfJury && (
                <div className="absolute top-0 right-0 bg-gold text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                  Head of Jury
                </div>
              )}
              <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                <img
                  className={`w-full h-full select-none ${
                    isLastFour && !isHeadOfJury
                      ? "object-contain"
                      : "object-cover"
                  } `}
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-6 text-center py-12">
                <h4 className="mb-1 text-xl font-semibold">{member.name}</h4>
                <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Jury;