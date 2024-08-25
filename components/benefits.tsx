import React from "react";

const Benefits = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            BENEFITS OF BEING A NSS VOLUNTEER
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <ol className="p-2 flex flex-col gap-3">
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  1. Skill Development:
                </span>{" "}
                NSS volunteers gain a wide array of skills, including
                leadership, teamwork, communication, and problem-solving.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  2. Networking Opportunities:
                </span>{" "}
                Being part of NSS allows students to connect with like-minded
                peers, faculty members, and professionals, creating valuable
                networks for future endeavors.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  3. Character Building:
                </span>{" "}
                Participation in NSS activities builds a strong sense of
                discipline, responsibility, and empathy, contributing to overall
                personality development also societal development.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">4. Career Boost:</span>{" "}
                Employers and educational institutions often recognize the NSS
                certificate as proof of a candidate’s leadership qualities,
                commitment, and community service experience. It can give
                students an edge in job applications or higher education
                pursuits.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
