import React from "react";

const Facts = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            SOME INTERESTING FACTS
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">NSS Logo:</span> The NSS logo
            is inspired by the giant Rath Wheel of the Konark Sun Temple in
            Odisha. The eight bars in the wheel represent the 24 hours of the
            day, emphasizing the importance of continuous community service in a
            volunteer&apos;s life.
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">NSS Day:</span> NSS was
            officially launched on 24th September 1969
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">NSS Slogan:</span> The motto
            of NSS is &quot;Not Me, But You&quot; reflecting the essence of
            selfless service and the need to prioritize others&apos; welfare
            over one&apos;s own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
