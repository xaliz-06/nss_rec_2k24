import React from "react";

const AboutUs = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-teal-500/40 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
            ABOUT US
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-black md:text-base">
            <span className="font-bold text-emerald-700">
              NSS SoEE at KIIT University
            </span>
            , is a dynamic student organization dedicated to community service
            and social development and is known for its impactful initiatives
            that contribute to the welfare of society. The unit focuses on
            creating awareness, providing education, and facilitating skill
            development in various sectors. NSS SoEE is comprised of three key
            units:{" "}
            <span className="font-bold text-emerald-700">
              NSS SoEE Parivartan, NSS SoEE Lakshya, and Target JEE.
            </span>{" "}
          </p>
          <p className="text-sm font-normal tracking-tighter text-black md:text-base">
            Each unit has its own specific focus, working collectively towards
            the larger goal of social betterment.
          </p>
          <ol className="p-2 flex flex-col gap-3">
            <li>
              <p className="text-sm font-normal tracking-tighter text-black md:text-base">
                <span className="font-bold text-green-600">
                  1. NSS SoEE Project Lakshya:
                </span>{" "}
                The cornerstone of NSS SoEE Project Lakshya is primarily focused
                on educational outreach and rural development. NSS Lakshya is
                deeply involved in empowering underprivileged students by
                providing them with the necessary tools and knowledge to
                succeed. Events organized by NSS SoEE Project Lakshya at KIIT
                University, such as educational camps, plogging drive and
                village visits have had a profound impact on the lives of many.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-black md:text-base">
                <span className="font-bold text-teal-700">
                  2. NSS SoEE Parivartan:
                </span>{" "}
                This unit is dedicated to initiating changes in the community
                through various social campaigns.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-black md:text-base">
                <span className="font-bold text-teal-700">3. Target JEE:</span>{" "}
                This unit focuses on mentoring and guiding students who aspire
                to excel in competitive exams.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
