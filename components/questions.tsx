import React from "react";

const Questions = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-teal-500/40 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
            COMMONLY ASKED INTERVIEW QUESTIONS
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-3 md:pt-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              1. What&apos;s your goal of joining NSS?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              2. How do you seek to contribute in NSS?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              3. What do you know about NSS?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              4. How do you plan to balance your academic responsibilities with
              NSS Activities?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              5. What does the motto of NSS mean?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              6. Say there is a certain situation where an NSS activity and your
              class schedule collides. What would you do in that situation ?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              7. How would you conduct yourself in a hostile situation?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              8. How do you think you&apos;ll be able to relate with people from
              rural areas?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              9. Do you have any experience in the domain you are applying for?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              10. How would you react if a social injustice occurs in front of
              you?
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              Questions related to various situational reactions and case
              studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
