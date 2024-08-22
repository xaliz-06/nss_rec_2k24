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
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
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
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="p-1 flex items-center justify-center">
                  <Card className="rounded-md bg-blue-500/10 border-none outline-none w-[80vw]">
                    <CardContent className="flex items-center justify-center flex-col md:flex-row p-3 gap-4">
                      {isMobile ? (
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={100}
                          height={100}
                          className="rounded-full aspect-square  object-cover"
                        />
                      ) : (
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={200}
                          height={100}
                          className="rounded-full aspect-square  object-cover"
                        />
                      )}
                      <div className="flex flex-col p-2">
                        <div className="text-lg font-bold text-blue-600 md:text-xl">
                          {person.name}
                        </div>
                        <div className="font-semibold text-xs md:text-base">
                          <p className="no-ligatures text-blue-500/80">
                            {person.designation}
                          </p>
                        </div>
                        <div className="text-xs font-semibold text-emerald-700/70 md:text-base">
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
