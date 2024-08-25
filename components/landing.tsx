"use client";

import React from "react";

import { Button } from "./ui/button";

import Link from "next/link";
import Image from "next/image";

import { useMedia } from "react-use";

const IMAGES = [
  "/lakshya_banner.png",
  "/bg/21.JPG",
  "/bg/14.png",
  "/bg/10.jpg",
  "/bg/11.jpg",
  "/bg/12.png",
  "/bg/13.png",
  "/bg/15.png",
];

const Landing = () => {
  const isMobile = useMedia("(max-width: 576px)", false);
  const isTablet = useMedia(
    "(min-width: 577px) and (max-width: 1023px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1024px)", false);

  let height = 40;
  let width = 40;

  if (isMobile) {
    height = 20;
    width = 200;
  } else if (isTablet) {
    height = 300;
    width = 300;
  } else if (isDesktop) {
    height = 300;
    width = 300;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="infinite-scrolling absolute overflow-hidden"></div>
      <div className="flex flex-col items-center text-center gap-8 glassy border-outline rounded-lg py-8 px-6 w-[90vw] sm:w-full z-40">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-3xl tracking-tighter md:text-5xl">
            NSS School of Electronics Engineering
          </h1>
          <h2 className="font-bold text-3xl tracking-tight text-blue-600 md:text-4xl">
            Project Lakshya
          </h2>
        </div>
        <h3 className="font-semibold text-xl tracking-tighter text-rose-600 md:text-3xl">
          Recruitment Is Live! 🥳🎉
        </h3>
        <div className="w-full flex justify-center items-center">
          <Image
            src="/lakshya_banner.png"
            alt="lakshya"
            width={width}
            height={height}
          />
        </div>

        <div>
          <div className="p-2">
            <Link href="https://forms.gle/NNoTQN9FgqAE5DeUA" target="_blank">
              <Button
                variant="default"
                size="lg"
                className="font-bold bg-blue-600 hover:bg-blue-600/20 hover:text-white text-white border-none outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent focus:bg-blue-600/30 w-72 rounded-sm transition px-8 py-6"
              >
                <p className="font-bold text-white tracking-tight text-2xl">
                  Register Now!
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
