import React from "react";

const Events = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            EVENTS AND IMPACT
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">NSS SoEE</span> is highly
            active at KIIT University, organizing numerous events throughout the
            academic year that are designed to serve the community and provide
            students with hands-on volunteer experience. Key events include:
          </p>
          <ol className="p-2 flex flex-col gap-3">
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">Plogging Drives:</span>{" "}
                These events combine environmental cleanup with physical
                exercise, where volunteers jog through designated areas while
                collecting litter, promoting both fitness and sustainability.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">Plantation Drives:</span>{" "}
                Aimed at increasing green cover, these drives involve planting
                trees within the campus and in surrounding areas, contributing
                to environmental conservation efforts.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">Village Visits:</span>{" "}
                Volunteers visit nearby villages to conduct educational
                workshops directly impacting the quality of life in rural areas.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Events;
