// import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const aboutData = t("about", { returnObjects: true });

  return (
    <section className="py-12 lg:py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center lg:gap-12 gap-4 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex" data-aos="fade-left">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gold/90 text-2xl lg:text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                  {aboutData.slogan}
                </h2>
                <p className="text-transparent text-sm lg:text-base  bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 leading-relaxed  ">
                  {aboutData.desc}
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gold/90 text-3xl lg:text-4xl font-bold font-manrope leading-normal">
                    {aboutData.stat1Num} +
                  </h3>
                  <h6 className="text-transparent text-sm lg:text-base bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 leading-relaxed">
                    {aboutData.stat1}

                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gold/90 text-3xl lg:text-4xl font-bold font-manrope leading-normal text-center">
                    {aboutData.stat2Num} +

                  </h4>
                  <h6 className="text-transparent text-sm lg:text-base bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800 font-normal leading-relaxed">
                    {aboutData.stat2}

                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gold/90 text-3xl lg:text-4xl font-bold font-manrope leading-normal text-center">
                    {aboutData.stat3Num} +
                  </h4>
                  <h6 className="text-transparent text-sm lg:text-base bg-clip-text bg-gradient-to-l from-blue-950 to-gray-800  font-normal leading-relaxed">
                    {aboutData.stat3}
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full justify-center items-start gap-6 lg:grid sm:grid-cols-2 grid-cols-1 hidden">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className=" rounded-xl object-cover"
                src="/images/aboutImage1.jpeg"
                alt="about Us image"
                data-aos="fade-up"
              />
            </div>
            <img
              className="hidden md:block ml-auto rounded-xl object-cover"
              src="/images/aboutimage2.jpeg"
              alt="about Us image"
              data-aos="fade-down"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
