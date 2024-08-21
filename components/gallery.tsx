"use client";

import React from "react";
import Image from "next/image";

import { useMedia } from "react-use";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

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
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
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

export default Gallery;
