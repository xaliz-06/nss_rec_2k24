"use client";

import React from "react";
import Image from "next/image";

import { useMedia } from "react-use";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

const GALLERY = ["/faq/22.jpg", "/faq/23.jpg", "/faq/24.jpg", "/faq/25.jpg"];

const FAQGallery = () => {
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
    <div className="min-w-screen-2xl w-[90vw] mb-4 flex flex-col gap-4 md:w-full">
      <div className="pt-2 md:pt-6">
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

export default FAQGallery;
