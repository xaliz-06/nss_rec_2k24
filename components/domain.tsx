import React from "react";

const Domain = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-[#1B1A55]/90 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-white underline underline-offset-8 decoration-6 decoration-[#9290C3] text-3xl tracking-tight leading-10 md:text-4xl">
            OUR RECRUITMENT DOMAINS
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-2">
          <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
            <span className="font-bold text-white">
              NSS SoEE Project Lakshya
            </span>{" "}
            offers a variety of opportunities for students to contribute to
            these initiatives. Recruitment is open exclusively to students of
            the School of Electronics, with opportunities in the following
            areas:
          </p>
          <ol className="flex flex-col gap-2">
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  🖥️ Computer Literacy
                </span>
                : Volunteers will teach basic computer skills to underprivileged
                students, helping them become proficient in essential digital
                tools.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  🌿 Rural Development
                </span>
                : This domain involves working directly in rural areas,
                organizing and implementing development projects that improve
                infrastructure, education, and living standards.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">📃 Content Writing</span>
                : Content creators are responsible for documenting the
                activities of NSS SoEE, writing reports, and creating
                promotional materials that help raise awareness about the
                unit&apos;s efforts.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  🎨 Graphic Designing
                </span>
                : Volunteers in this domain will design posters, banners, and
                digital content that visually communicate the unit&apos;s
                message and events to a broader audience.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  📸 Photography & Video Editing
                </span>
                : This domain involves capturing the essence of NSS SoEE&apos;s
                activities through photography and videography, as well as
                editing these materials for presentations and social media.
              </p>
            </li>
            <li>
              <p className="text-sm font-normal tracking-tighter text-slate-300 md:text-base">
                <span className="font-bold text-white">
                  📑 Digital Marketing
                </span>
                : Volunteers will manage NSS SoEE&apos;s online presence,
                creating and executing social media campaigns that promote
                events and recruit new members.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Domain;
