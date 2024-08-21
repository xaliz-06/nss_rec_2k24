import React from "react";

const FAQ = () => {
  return (
    <div className="border-outline rounded-md px-5 py-8 bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-teal-500/40 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
            FAQ
          </h3>
        </div>
        <div className="p-2 flex flex-col gap-3 md:pt-6">
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              1. What does NSS stand for ?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              National Service Scheme
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              2. How many units are there in NSS SoEE and what are they?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              There are 3 units - Project Lakshya, Parivartan and Target JEE
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              3. What is the motto of NSS?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              &apos;Not Me But You&apos;
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter">
              4. When does the recruitment process begin?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              By the end of August. Dates will be announced on our Social Media.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              5. How can one apply for NSS SoEE?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              By filling the form for any of the three units. You can join only
              one of the units.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              6. What kind of activities are involved in NSS?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              NSS activities include community service projects like health
              camps, environmental awareness drives , educational programmes ,
              blood donation camps, etc.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              7. What certificates or recognition do one gets from NSS?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              Active NSS volunteers receive a certificate from the Ministry of
              Youth Affairs and Sports, Government of India, upon completing
              their tenure.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              8. Will NSS participation affect studies?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              NSS encourages activities that can be managed alongside studies.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              9. What is the recruitment process?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              It starts by filling the form for registration. You can fill for
              multiple units as well. Each unit will conduct their own in-person
              interviews within a few days of registration closing. If you are
              selected, you will be able to choose which unit to join (in case
              of multiple selections).
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="text-sm font-bold text-emerald-700 tracking-tighter md:text-base">
              10. Can anyone apply for multiple domains?
            </p>
            <p className="text-sm px-2 font-normal tracking-tighter md:text-base">
              Yes! you can apply for multiple domains but you&apos;ll have to
              attend the interviews for each of them. If selected for multiple
              domains, you will be given a choice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
