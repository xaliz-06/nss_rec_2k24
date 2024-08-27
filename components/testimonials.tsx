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
    name: "Sohan Samal",
    review:
      "In 2020, I joined the NSS Project Lakshya. It has significantly changed my personality on a greater level. This is part of my family ❤️. NSS Project Lakshya has helped me reach my full potential in every profession. Here, I learnt how to manage social duty, emotions, moral values, and so on from both seniors and juniors. At last only one thing must be there in your heart that's only Serve For Your Nation Till The Last Breathe. Jai Hind 🇮🇳 Jai Jagannath 🙏",
    imageUrl: "/person/sohan.jpeg",
    working: "Asst. Director @FAB-TECH ENGINEERING & CONSTRUCTION",
    additional:
      "Corporate Relt.Officer @Sattvic Soul Foundation, Ex Project Trainee @BOSCH",
  },
  {
    name: "Shanti Swaroop Maharana",
    review:
      "My journey with NSS has been unforgettable, marking the start of my volunteering life. From volunteering with NSS SoEE to becoming a Coordinator of NSS Project Lakshya, and later joining NSS KIIT Bureau, I've helped over 1000+ people. This experience gave me a sense of satisfaction, responsibility, and self-realization. NSS taught me that `An NSS Volunteer will forever be a volunteer,` making me a more responsible human being.",
    imageUrl: "/person/shanti.jpeg",
    working: "Ex Intern @HighRadius",
  },
  {
    name: "Amishrana Gautam",
    review:
      "Participating in the NSS Project Lakshya has deeply impacted me, providing a sense of fulfilment and joy from our social service efforts. Every smile from those we helped felt like recognition of the positive change we made. The friendships, bonds, lessons, and shared experiences have made this journey unforgettable and meaningful in ways I never imagined.",
    imageUrl: "/person/amishrana.jpeg",
    working: "TPSODL",
  },
  {
    name: "Utkarsh",
    review:
      "My NSS journey began in my 2nd year, during the pandemic, with an online interview where I met my supportive seniors. Joining NSS was transformative, equipping me with leadership skills, valuable contacts, and recognition within my department. I made friends across different departments, but the most rewarding experience was recruiting and mentoring my juniors. This completed my NSS journey, as I left the society in capable hands, ensuring its continued impact.",
    imageUrl: "/person/utkarsh.jpeg",
    working: "PwC",
  },
  {
    name: "Preetam Nayak",
    review:
      "Being part of NSS Project Lakshya has profoundly shaped my personality. Engaging in activities to help underprivileged people has enhanced my empathy, leadership, and communication skills. The challenges taught me resilience and problem-solving, while interacting with diverse groups broadened my perspective, making me more adaptable. Overall, it instilled in me a sense of purpose and confidence in my abilities.",
    imageUrl: "/person/preetam.jpg",
    working: "CloudThat",
  },
  {
    name: "Shruti Khasnavis",
    review:
      "When I first joined NSS Project Lakshya, I thought it would be just community service. But as and when time flew by it wasn't just community service it was an emotion. The family that I got here is amazing ❤️ The satisfaction that I got after doing a good work and bringing smiles on people's faces is just to good to be true. My experience here is filled with joys and sorrows. But the emotion stays the same ❤️",
    imageUrl: "/person/shruti.jpg",
    working: "Flipkart",
  },
  {
    name: "Sreelagna Basu",
    review:
      "My journey with NSS has been truly remarkable. I had the privilege of meeting amazing people who supported me, and together, we became the backbone of NSS. Our success was a result of the team's dedication and hard work. Beyond the work, we also created unforgettable moments that I'll cherish forever. Though I miss being part of NSS, these memories will always hold a special place in my heart as life moves forward.",
    imageUrl: "/person/sree.jpeg",
    working: "",
  },
  {
    name: "Utsav Anand",
    review:
      "I joined NSS in 2021, inspired by a senior during the pandemic. Opting for the Rural Development (RD) department, I overcame my fear of public speaking. We organized impactful events in villages, with support from seniors like Sohan Bhaiya. Our hard work paid off—we became the top NSS society in our university. To juniors: seize every opportunity; these skills will serve you well beyond college. Best wishes to all!",
    imageUrl: "/person/utsav.jpeg",
    working: "IFB",
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
                  <Card className="rounded-md bg-slate-100 outline-1 w-[80vw] min-h-[40vh] md:min-h-[35vh] lg:min-h-[45vh]">
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
