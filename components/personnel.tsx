"use client";
import React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import { useMedia } from "react-use";

const PERSONNEL = [
  {
    name: "Sruti S. Singh",
    designation: "Assistant Professor",
    school: "School of Electronics Engineering",
    image: "/person/sruti.jpeg",
  },
  {
    name: "Prashanta Kumar Patra",
    designation: "Assitant Professor",
    school: "School of Electronics Engineering",
    image: "/person/patra.jpeg",
  },
  {
    name: "Pravin Kumar Samanta",
    designation: "Assistant Professor",
    school: "School of Electronics Engineering",
    image: "/person/pk.jpeg",
  },
  {
    name: "Sraddhanjali Mohapatra",
    designation: "Assistant Professor",
    school: "School of Electronics Engineering",
    image: "/person/mohapatra.jpeg",
  },
];

const Personnel = () => {
  const isMobile = useMedia("(max-width: 576px)", false);
  const isTablet = useMedia(
    "(min-width: 577px) and (max-width: 1023px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1024px)", false);

  let height = 40;
  let width = 40;

  if (isMobile) {
    height = 100;
    width = 100;
  } else if (isTablet) {
    height = 120;
    width = 120;
  } else if (isDesktop) {
    height = 150;
    width = 150;
  }

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[#070F2B] underline underline-offset-8 decoration-6 decoration-blue-900 text-3xl tracking-tight leading-10 md:text-4xl">
            OUR PROGRAMME OFFICERS
          </h3>
        </div>
      </div>
      <div className="p-2 md:mt-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {PERSONNEL.map((person, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 flex items-center justify-center">
                  <Card className="rounded-md bg-slate-100 outline-1 w-[80vw] h-[30vh] md:h-[15vh] lg:h-[30vh] flex justify-center items-center">
                    <CardContent className="flex items-center justify-center flex-col md:flex-row p-3 gap-4">
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={width}
                        height={height}
                        className="rounded-full aspect-square  object-cover"
                      />
                      <div className="flex flex-col p-2">
                        <div className="text-lg font-bold text-[#1B1A55] md:text-xl lg:text-xl leading-5">
                          {person.name}
                        </div>
                        <div className="font-semibold text-sm md:text-sm lg:text-base">
                          <p className="no-ligatures text-blue-900/70">
                            {person.designation}
                          </p>
                        </div>
                        <div className="text-sm font-semibold text-blue-900/40 md:text-sm lg:text-base">
                          {person.school}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-6 md:ml-4" />
          <CarouselNext className="mr-6 md:mr-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default Personnel;
