import React from "react";

const Intro = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            WHO WE ARE
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            The <span className="font-bold text-white">NSS SOEE</span>, under
            the School of Electronics Engineering, is a government-controlled
            organization that aims to develop students&apos; personalities
            through voluntary community service. Taking inspiration from the
            ideology of Mahatma Gandhi, its motto is{" "}
            <span className="font-bold text-white">“NOT ME, BUT YOU.”</span>
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300  md:text-base">
            Under NSS SOEE comes the unit{" "}
            <span className="font-bold text-white">
              NSS SOEE PROJECT LAKSHYA
            </span>
            , with the slogan{" "}
            <span className="font-bold text-white">“LOVE GROW SERVE.”</span> NSS
            SOEE PROJECT LAKSHYA primarily focuses on ground-level work, such as
            going from home to home to inspire and make people aware of their
            rights, organizing various campaigns on women&apos;s health and
            public safety, and distributing items like food and sanitary pads.{" "}
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">
              NSS SOEE PROJECT LAKSHYA
            </span>{" "}
            has adopted three villages in Bhubaneswar:{" "}
            <span className="font-bold text-white">
              Injana, Tangibanta, and Padmakesarpur
            </span>{" "}
            Almost every month, different campaigns are organized in these
            villages by the volunteers of our society to raise awareness and
            promote public safety. Some recent events organized by the
            volunteers include Children&apos;s Day campaigns, Voter&apos;s Day
            awareness camps, the Balijatra cleanliness drive, and orphanage
            visits.{" "}
          </p>
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            In addition to these campaigns, our volunteers also provided their
            services during the Balasore train accident.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
