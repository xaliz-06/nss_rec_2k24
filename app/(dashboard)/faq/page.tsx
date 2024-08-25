import FAQ from "@/components/faq";
import FAQGallery from "@/components/faq-gallery";
import Questions from "@/components/questions";
import { Separator } from "@/components/ui/separator";
import React from "react";

const FAQPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 gap-8 mt-12">
      <FAQGallery />
      <FAQ />
      <Separator className="mb-4" />
      <Questions />
    </div>
  );
};

export default FAQPage;
