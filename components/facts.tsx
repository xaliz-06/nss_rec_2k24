import React from "react";

const Facts = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-teal-500/40 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
            SOME INTERESTING FACTS
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-black md:text-base">
            <span className="font-bold text-emerald-700">NSS Logo:</span> The
            NSS logo is inspired by the giant Rath Wheel of the Konark Sun
            Temple in Odisha. The eight bars in the wheel represent the 24 hours
            of the day, emphasizing the importance of continuous community
            service in a volunteer&apos;s life.
          </p>
          <p className="text-sm font-normal tracking-tighter text-black md:text-base">
            <span className="font-bold text-emerald-700">NSS Day:</span> NSS was
            officially launched on 24th September 1969
          </p>
          <p className="text-sm font-normal tracking-tighter text-black md:text-base">
            <span className="font-bold text-emerald-700">NSS Slogan:</span> The
            motto of NSS is &quot;Not Me, But You&quot; reflecting the essence
            of selfless service and the need to prioritize others&apos; welfare
            over one&apos;s own.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facts;
