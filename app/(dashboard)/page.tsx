import { Separator } from "@/components/ui/separator";

import Domain from "@/components/domain";
import Intro from "@/components/intro";
import Landing from "@/components/landing";
import Testimonials from "@/components/testimonials";
import Gallery from "@/components/gallery";
import Personnel from "@/components/personnel";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 gap-8">
      <Landing />
      <Separator className="mb-4" />
      <Intro />
      <Separator className="mb-4" />
      <Personnel />
      <Separator className="mb-4" />
      <Gallery />
      <Separator className="mb-4" />
      <Domain />
      <Separator className="mb-4" />
      <Testimonials />
    </div>
  );
}
