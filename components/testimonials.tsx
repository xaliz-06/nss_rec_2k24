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
    name: "Amishrana Gautam",
    review:
      "Engaging in the NSS Project Lakshya has had a profound impact on my life. It was more than simply a project; it was an experience that changed me deeply and gave me memories I will always treasure. I cannot express how much my sense of fulfilment from our social service efforts has increased. Every grin we saw on the faces of the people we assisted felt like a compliment to our work and a reminder of the difference we were making in their lives. I experienced a profound sense of purpose and delight from these moments of community service and connection that I had never experienced before. This voyage has been unforgettable because of the friendships and ties that have been built, the lessons that have been learnt, and the experiences that have been shared.",
    imageUrl: "/person/amishrana.jpeg",
    working: "TPSODL",
  },
  {
    name: "Preetam Nayak",
    review:
      "Being a part of the NSS Project Lakshya Society has significantly shaped my personality. Engaging in activities aimed at helping underprivileged people in villages has enhanced my empathy and social responsibility. Through organizing awareness campaigns and participating in community service, I have developed strong leadership and communication skills. The challenges I faced while working on various projects taught me resilience and problem-solving abilities. Moreover, interacting with diverse groups has broadened my perspective, making me more adaptable and open-minded. Overall, NSS Project Lakshya has not only allowed me to contribute positively to society but also instilled in me a sense of purpose and confidence in my abilities.",
    imageUrl: "/person/preetam.jpg",
    working: "CloudThat",
  },
  {
    name: "Shruti Khasnavis",
    review:
      "When I first joined NSS Project Lakshya, I thought it would be just community service. But as and when time flew by it wasn't just community service it was an emotion. The family that I got here is amazing ❤️ The satisfaction that I got after doing a good work and bringing smiles on people's faces is just to good to be true. My experience here is filled with joys and sorrows. But the emotion stays the same❤️",
    imageUrl: "/person/shruti.jpg",
    working: "Intern @Panasonic",
  },
  {
    name: "Sreelagna Basu",
    review:
      "My journey with NSS has been truly remarkable. I had the privilege of meeting some amazing people who constantly supported me, and together, we became the backbone of NSS. The success we've achieved wouldn't have been possible without the dedication and hard work of the entire team. Beyond the work, we also had a lot of fun, creating unforgettable moments that I will cherish for the rest of my life. Although I miss being a part of NSS, I will always hold these memories close to my heart as life moves forward.",
    imageUrl: "/person/sree.jpeg",
    working: "",
  },
];

const Testimonials = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <div className="min-w-screen-2xl w-[90vw] mb-8 flex flex-col gap-4 min-h-[80vh] md:w-full">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-start">
          <h3 className="font-bold text-blue-600 underline underline-offset-8 decoration-6 decoration-teal-500 text-3xl tracking-tight leading-10 md:text-4xl">
            OUR ALUMNI
          </h3>
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
                  <Card className="rounded-md bg-blue-500/10 border-none outline-none w-[80vw]">
                    <CardContent className="flex items-center justify-center flex-col md:flex-row p-3 gap-4">
                      {isMobile ? (
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={100}
                          height={100}
                          className="rounded-full aspect-square  object-cover"
                        />
                      ) : (
                        <Image
                          src={testimonial.imageUrl}
                          alt={testimonial.name}
                          width={200}
                          height={200}
                          className="rounded-full aspect-square  object-cover"
                        />
                      )}
                      <div className="flex flex-col gap-2 p-2">
                        <div className="font-normal text-xs md:text-sm">
                          <p className="italic no-ligatures">
                            {testimonial.review}
                          </p>
                        </div>
                        <div className="text-lg font-bold text-blue-600 md:text-xl">
                          {testimonial.name}
                        </div>
                        <div className="text-sm font-bold text-emerald-500/70 md:text-base">
                          {testimonial.working}
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
