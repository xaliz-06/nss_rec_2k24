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

const TESTIMONIALS = [
  {
    name: "Aaditya Aanand",
    imageUrl: "/person/Aaditya.jpg",
  },
  {
    name: "Anshu Kumar",
    imageUrl: "/person/ANSHU.jpeg",
  },
  {
    name: "Shreya Yadav",
    imageUrl: "/person/Shreya.jpg",
  },
  {
    name: "Avinash Kumar",
    imageUrl: "/person/Avinash1.jpg",
  },
  {
    name: "Raghav Khandelwal",
    imageUrl: "/person/Raghav.jpg",
  },
  {
    name: "Swadhin Sarangi",
    imageUrl: "/person/SwadhinSarangi.jpg",
  },
  {
    name: "Divya Jyoti Sarangi",
    imageUrl: "/person/DIVYA.jpg",
  },
  {
    name: "Shrutam Pradhan",
    imageUrl: "/person/SHRUTAM.jpg",
  },
  {
    name: "Owaish Jawed",
    imageUrl: "/person/OWAISH.jpg",
  },
  {
    name: "Rohanpreet Singh Kalsi",
    imageUrl: "/person/Rohanpreet.jpg",
  },
  {
    name: "Souritro Bali",
    imageUrl: "/person/SOURITRA.jpg",
  },
  {
    name: "Akankshya Mohapatra",
    imageUrl: "/person/AKANKSHYA.jpg",
  },
  {
    name: "Rajdeep Saha",
    imageUrl: "/person/Rajdeep.jpg",
  },
  {
    name: "Shilky",
    imageUrl: "/person/SHILKY.jpg",
  },
  {
    name: "Divya Shekhar",
    imageUrl: "/person/DIVYASHEKHAR.jpeg",
  },
];

const Testimonials = () => {
  const isMobile = useMedia("(max-width: 576px)", false);
  const isTablet = useMedia(
    "(min-width: 577px) and (max-width: 1023px)",
    false
  );
  const isDesktop = useMedia("(min-width: 1024px)", false);

  let height = 40;
  let width = 40;

  if (isMobile) {
    height = 80;
    width = 80;
  } else if (isTablet) {
    height = 100;
    width = 100;
  } else if (isDesktop) {
    height = 120;
    width = 120;
  }

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-[#070F2B] underline underline-offset-8 decoration-6 decoration-blue-900 text-3xl tracking-tight leading-10 md:text-4xl">
            OUR COORDINATORS (2025-2026)         </h3>
        </div>
      </div>
      <div className="p-2 md:pt-8">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 flex items-center justify-center">
                  <Card className="rounded-md bg-slate-100 outline-1 w-[80vw] min-h-[20vh] md:min-h-[20vh] lg:min-h-[25vh]">
                    <CardContent className="flex items-start justify-start flex-col md:flex-col p-3 gap-4">
                      <div className="flex flex-row justify-start items-center gap-3">
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={width}
                          height={height}
                          className="rounded-full aspect-square  object-cover"
                        />
                        <div className="flex flex-col p-2">
                          <div className="text-lg font-bold text-[#1B1A55] md:text-xl leading-5">
                            {testimonial.name}
                          </div>
                          <div className="text-sm font-bold text-blue-900/70 md:text-base">
                            {testimonial.working}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 p-2">
                        <div className="font-normal text-xs md:text-sm flex flex-col gap-2">
                          <p className="italic no-ligatures">
                            {testimonial.review}
                          </p>
                          <p className="italic no-ligatures text-xs text-blue-900/60">
                            {testimonial?.additional}
                          </p>
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

export default Testimonials;
