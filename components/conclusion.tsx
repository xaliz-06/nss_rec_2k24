import React from "react";

const Conclusion = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            END NOTE
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            NSS volunteers participate in a range of activities, from organizing
            blood donation camps and health awareness programs to leading
            environmental conservation efforts and literacy campaigns.
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            Lastly joining NSS is not just about fulfilling a requirement or
            earning a certificate. It&apos;s about growing as an individual,
            making a tangible difference in society, and gaining experiences
            that will shape your future , if you&apos;re looking for an
            opportunity to step out of your comfort zone, develop new skills,
            and make lasting contributions to society, NSS is the perfect place
            for you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
