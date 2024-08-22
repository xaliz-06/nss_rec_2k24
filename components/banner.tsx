"use client";
import React from "react";

import Image from "next/image";
import { useMedia } from "react-use";

const Banner = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <div className="border-outline rounded-md min-w-screen-2xl w-[90vw] md:w-full">
      <div className="relative h-[20vh] md:h-[60vh]">
        <Image
          src={isMobile ? `/banner_mobile.jpg` : `/banner_hero.jpg`}
          fill={true}
          alt="banner"
          loading="lazy"
          className="object-cover md:object-top object-left rounded-md"
        />
      </div>
    </div>
  );
};

export default Banner;
