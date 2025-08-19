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
    name: "Barun Mishra",
    review:
      "My journey with NSS since 2nd year has been a truly enriching experience. It gave me immense knowledge, exposure, and real-world learning beyond classrooms. From connecting with people and building strong networks to organizing both small and large events, I developed valuable leadership and management skills. As a coordinator, I had the privilege of guiding volunteers and meeting influential personalities. NSS has shaped my confidence, teamwork, and ability to lead with responsibility.",
    imageUrl: "/person/Barun.jpeg",
    working: "",
    additional: "2021-2025",
  },
  {
    name: "Sai Sritam Sarangi",
    review:
      "Being a part of NSS Project Lakshya has been one of the most meaningful experiences of my college life. As a coordinator, I got the chance to work on initiatives like menstrual health awareness, blood donation camps, and cleanliness drives, which gave me a deeper understanding of real-life challenges and the impact of small efforts. These experiences improved my leadership, communication, and teamwork skills, while also teaching me responsibility and empathy. I now carry with me stronger interpersonal skills, practical project experience, a sense of social responsibility, and the satisfaction of knowing my contributions made a difference.",
    imageUrl: "/person/SAI.jpg",
    working: "Placed-Antino, HCL Tech and Systango",
    additional: "2021-2025",
  },
  {
    name: "Soumen Das",
    review:
      "A great experience and lot of learnings in the journey from a volunteer to co-ordinator.",
    imageUrl: "/person/Soumen.png",
    working: "Placed",
    additional: "2021-2025",
  },
  {
    name: "Shubham Nayak",
    review:
      "Being an NSS volunteer has been a truly inspiring journey that taught me the values of discipline, empathy, and social responsibility. Through different activities, I realized how even small acts of service can bring a big change in people’s lives. The experience not only gave me a sense of purpose but also helped me grow as an individual. To my juniors, I would say—make the most of this opportunity. NSS is more than just volunteering; it is a journey of self-discovery, learning, and making a real difference in society.",
    imageUrl: "/person/SHUBHAM.jpg",
    working: "Placed- Wipro, Indegene & TCS",
    additional: "2021-2025",
  },
  {
    name: "Priyanshi Chouhan",
    review:
      "My NSS journey has been one of the most enriching chapters of my college life. What began as a step toward community service soon became a life-changing experience. Through various initiatives, I not only had the opportunity to contribute to society but also discovered my own strengths in leadership, teamwork, and empathy. NSS gave me a sense of belonging and purpose, and though my active journey has ended, the values and memories will always stay with me.",
    imageUrl: "/person/Priyanshi.jpeg",
    working: "",
    additional: "2021-2025",
  },
  {
    name: "Sounak Saha",
    review:
      "First of all thanks to NSS for giving me the chance to be a part of this prestigious society.During my time as the Coordinator of NSS Lakshya, I got the chance to lead with purpose and work closely with a passionate team. Organizing and managing successful events not only taught me the value of planning and teamwork, but also helped me grow as a leader who can adapt, motivate, and bring people together. More than just managing tasks, the experience gave me confidence, stronger communication skills, and the joy of seeing our collective efforts make a real impact in the community. NSS wasn’t just about service—it was about learning, leading, and growing alongside like-minded individuals.",
    imageUrl: "/person/Sounak.jpeg",
    working: "Placed- Infinity learn, Startek and PSP Inc",
    additional: "2021-2025",
  },
  {
    name: "Boibhav Chakraborty",
    review:
      "NSS SoEE Project Lakshya gave me the opportunity to develop as a person. I learned social skills, developed emotional intelligence and got a chance to make a little difference. The events, activities and discussion among peers, fun sessions and insightful senior-junior interactions are some of the happiest memories I made.",
    imageUrl: "/person/BOIBHAV.jpg",
    working: "Placed at GlobalLogic-Hitachi",
    additional: "2021-2025",
  },
  {
    name: "Srija Ghosh",
    review:
      "Being in NSS taught me a lot about teamwork and giving back. It really helped me grow and gave me memories I’ll cherish forever.",
    imageUrl: "/person/SRIJA.jpeg",
    working: "Placed at TCS",
    additional: "2021-2025",
  },
  {
    name: "Ankit Swaraj",
    review:
      "NSS was more than volunteering; it was discovering myself through service. These three years taught me empathy, teamwork, and how small actions can create big change.",
    imageUrl: "/person/ankit.jpg",
    working: "",
    additional: "2021-2025",
  },
  {
    name: "Vaashkar Paul",
    review:
      "Say yes to every plan or trip that your friends are gonna make. Make enough memories so you'll have something to cherish when life hits you hard and take a lot of pictures or videos and make sure you store them in the cloud cause it will hurt more when you can't post the good pictures that you kept to post for some other day. And talk to a lot of people, connect with them. Life's probably too short to just be.",
    imageUrl: "/person/Vaashkar.jpg",
    working: "Placed- Coforge",
    additional: "2021-2025",
  },
  {
    name: "Swadhin Kumar Chakra",
    review:
      "My NSS experience gave me the opportunity to serve society through activities like cleanliness drives, awareness campaigns, and community service. It enhanced my teamwork, leadership, and communication skills while instilling empathy and social responsibility. NSS taught me discipline and the value of contributing towards the betterment of society.",
    imageUrl: "/person/Swadhin.jpg",
    working: "",
    additional: "2021-2025",
  },
  {
    name: "Riya Tiwari",
    review:
      "Had a wonderful time while being a volunteer in NSS Lakshaya.",
    imageUrl: "/person/RIYA.jpg",
    working: "",
    additional: "2021-2025",
  },
  {
    name: "Subhasish Sahoo",
    review:
      "Even though I come from a media domain, being part of NSS Project Lakshya has been one of the most memorable parts of my journey at KIIT. I’ve had the chance to participate in many events, conduct bootcamps, spread awareness on social issues, and even donate blood. More than just volunteering, it has been about enjoying the moments, learning, and having fun with friends in the society. In short, this experience has been like being part of a small family that works together for a bigger cause.",
    imageUrl: "/person/Subhasish.JPG",
    working: "",
    additional: "2021-2025",
  },
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
    working: "Codeyoung",
  },
  {
    name: "Utsav Anand",
    review:
      "I joined NSS in 2021, inspired by a senior during the pandemic. Opting for the Rural Development (RD) department, I overcame my fear of public speaking. We organized impactful events in villages, with support from seniors like Sohan Bhaiya. Our hard work paid off—we became the top NSS society in our university. To juniors: seize every opportunity; these skills will serve you well beyond college. Best wishes to all!",
    imageUrl: "/person/utsav.jpeg",
    working: "IFB",
  },
  {
    name: "Durga Madhab Panda",
    review:
      "Being part of the NSS was a transformative experience. It offered me unique lessons in professionalism, teamwork, and balancing work with friendships. While many see NSS as just community service, my involvement provided deeper insights into these aspects and personal growth. Despite the ups and downs, the opportunity to contribute to the community remains one of my proudest moments.",
    imageUrl: "/person/durga.jpeg",
    working: "Tata Steel",
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
                  <Card className="rounded-md bg-slate-100 outline-1 w-[80vw] min-h-[40vh] md:min-h-[40vh] lg:min-h-[50vh]">
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
