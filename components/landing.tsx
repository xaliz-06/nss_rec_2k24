"use client";

import React from "react";

import { Button } from "./ui/button";

import Link from "next/link";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useMedia } from "react-use";

const IMAGES = [
  "/lakshya_hero.png",
  "/bg/21.JPG",
  "/bg/14.png",
  "/bg/10.jpg",
  "/bg/11.jpg",
  "/bg/12.png",
  "/bg/13.png",
  "/bg/15.png",
];

const Landing = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <div className="border-outline rounded-md px-4 py-8 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-teal-500/30 min-w-screen-2xl w-[90vw] md:w-full">
      <div className="flex flex-col items-center text-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <h1 className="font-bold text-3xl tracking-tighter md:text-5xl">
            NSS School of Electronics Engineering
          </h1>
          <h2 className="font-bold text-3xl tracking-tight text-blue-600 md:text-4xl">
            Project Lakshya
          </h2>
        </div>
        <h3 className="font-semibold text-xl tracking-tighter text-teal-600 md:text-2xl">
          Recruitment begins soon! 🥳🎉
        </h3>
        <div className="flex flex-col items-center gap-4">
          <div>
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {IMAGES.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex items-center justify-center">
                      {isMobile ? (
                        <Image
                          src={image}
                          alt={image}
                          width={400}
                          height={200}
                          className="rounded-sm"
                        />
                      ) : (
                        <Image
                          src={image}
                          alt={image}
                          width={600}
                          height={200}
                          className="rounded-md"
                        />
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
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
