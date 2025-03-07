import { useTranslation } from "react-i18next";

function Jury() {
  const { t } = useTranslation();
  const lang = t("lang");

  const juryMembers = t("jury.juryMembers", { returnObjects: true });

  return (
    <section className="pt-12 continer mx-auto px-4 sm:px-6 lg:px-12 w-full">
      <div className="text-center" data-aos="fade-down">
        <h2 className=" text-3xl lg:text-5xl font-extrabold text-secondary tracking-wide leading-tight text-center">
          {t("jury.title")}
        </h2>
        <p className="text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 text-center text-2xl pt-4 pb-6">
          {t("jury.subtitle")}
        </p>
      </div>
      <div className="flex flex-wrap-reverse justify-center gap-x-20 gap-y-2">
        {juryMembers.map((member, index) => {
          const isHeadOfJury =
            member.name === "Eng. Magdy Wahba" || member.name === "م. مجدي وهبه";

          return (
            <div
              key={index}
              className={`flex flex-col bg-white shadow-none w-78 hover:shadow-md border border-slate-200 rounded-lg my-6 overflow-hidden transform transition-all duration-300 ${isHeadOfJury?"relative":""}`}
              data-aos={`${isHeadOfJury?"fade-down":"fade-up"}`}
            >
              {/* Add a badge for the head of the jury */}
              {isHeadOfJury && (
                <div className="absolute top-0 right-0 bg-gold/70 text-white px-4 py-2 rounded-bl-lg text-sm font-semibold">
                  {lang == "ar" ? "رئيس لجنة التحكيم" : "Head of Jury"}
                </div>
              )}
              <div className="overflow-hidden rounded-md h-80 flex justify-center items-center">
                <img
                  className={`w-full h-full select-none object-cover `}
                  src={member.image}
                  alt={member.name}
                />
              </div>
              <div className="p-6 text-center py-12">
                <h4 className="mb-1 text-base font-semibold">{member.name}</h4>
                <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 uppercase">
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