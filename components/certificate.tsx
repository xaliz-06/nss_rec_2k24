import React from "react";

const Certificate = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            BENEFITS OF NSS CERTIFICATE
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2 md:pt-6">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            The <span className="font-bold text-white">NSS certificate</span>,
            awarded to volunteers who complete the 240 hours of service in two
            years, is more than just a recognition of their efforts. It is a
            testament of their constant efforts.
          </p>
          <ol className="p-2 flex flex-col gap-3">
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  1. Higher Education:
                </span>{" "}
                Many universities and colleges, including foreign institutions,
                offer preference or additional points to NSS-certified students
                during admissions as a part of extra-cirriculars.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">2. Job Prospects:</span>{" "}
                The certificate highlights your social commitment and leadership
                abilities, making you stand out in job interviews.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  3. Government Opportunities:
                </span>{" "}
                In some states, the NSS certificate is considered during
                recruitment for government jobs, offering an advantage over
                other candidates.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
