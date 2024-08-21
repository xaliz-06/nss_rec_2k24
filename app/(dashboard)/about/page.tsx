import AboutNSS from "@/components/about-nss";
import AboutUs from "@/components/about-us";
import Benefits from "@/components/benefits";
import Certificate from "@/components/certificate";
import Conclusion from "@/components/conclusion";
import Events from "@/components/events";
import Facts from "@/components/facts";

import { Separator } from "@/components/ui/separator";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 gap-8">
      <AboutUs />
      <Separator className="mb-4" />
      <Events />
      <Separator className="mb-4" />
      <AboutNSS />
      <Separator className="mb-4" />
      <Benefits />
      <Separator className="mb-4" />
      <Certificate />
      <Separator className="mb-4" />
      <Facts />
      <Separator className="mb-4" />
      <Conclusion />
    </div>
  );
};

export default AboutPage;
