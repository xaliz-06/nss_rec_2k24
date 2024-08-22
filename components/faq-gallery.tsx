"use client";

import React from "react";
import Image from "next/image";

import { useMedia } from "react-use";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

import Autoplay from "embla-carousel-autoplay";

const GALLERY = ["/faq/22.jpg", "/faq/23.jpg", "/faq/24.jpg", "/faq/25.jpg"];

const FAQGallery = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

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
                  <Card className="rounded-md bg-blue-500/10 border-none outline-none w-[95vw]">
                    <CardContent className="flex items-center justify-center flex-col md:flex-row p-3 gap-4">
                      {isMobile ? (
                        <Image
                          src={image}
                          alt={image}
                          width={300}
                          height={300}
                          className="rounded-sm"
                        />
                      ) : (
                        <Image
                          src={image}
                          alt={image}
                          width={600}
                          height={600}
                          className="rounded-sm"
                        />
                      )}
                    </CardContent>
                  </Card>
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
