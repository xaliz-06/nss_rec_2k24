import React from "react";

const AboutNSS = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            ABOUT NSS
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">
              The National Service Scheme (NSS)
            </span>{" "}
            is a vibrant initiative in India aimed at involving students in
            community service. Established in 1969, NSS has grown to become a
            platform for students to engage with society, understand its needs,
            and contribute towards its development while enhancing their own
            skills and personality NSS aims to instill a sense of social
            responsibility in student through community service, NSS volunteers
            develop leadership qualities, confidence, and other essential life
            skills it also encourages students to engage with local communities,
            understand their issues, and work towards sustainable solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutNSS;
