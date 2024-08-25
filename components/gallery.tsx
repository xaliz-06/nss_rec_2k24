"use client";

import React from "react";
import Image from "next/image";

import { useMedia } from "react-use";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const GALLERY = [
  "/gallery/1.JPG",
  "/gallery/2.JPG",
  "/gallery/4.JPG",
  "/gallery/5.JPG",
  "/gallery/6.JPG",
  "/gallery/7.JPG",
  "/gallery/8.JPG",
  "/gallery/9.JPG",
  "/gallery/10.JPG",
  "/gallery/16.JPG",
  "/gallery/17.JPG",
  "/gallery/18.JPG",
  "/gallery/20.JPG",
];

const Gallery = () => {
  const isMobile = useMedia("(max-width: 576px)", false);
  const isTablet = useMedia(
    "(min-width: 577px) and (max-width: 1023px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1024px)", false);

  let height = 40;
  let width = 40;

  if (isMobile) {
    height = 350;
    width = 350;
  } else if (isTablet) {
    height = 400;
    width = 400;
  } else if (isDesktop) {
    height = 500;
    width = 500;
  }

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[#070F2B] underline underline-offset-8 decoration-6 decoration-blue-900 text-3xl tracking-tight leading-10 md:text-4xl">
            GALLERY
          </h3>
        </div>
      </div>
      <div className="pt-4 md:pt-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {GALLERY.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex items-center justify-center">
                  <Image
                    src={image}
                    alt={image}
                    width={width}
                    height={height}
                    className="rounded-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
