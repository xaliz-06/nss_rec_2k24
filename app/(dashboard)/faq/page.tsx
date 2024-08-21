import FAQ from "@/components/faq";
import Questions from "@/components/questions";
import { Separator } from "@/components/ui/separator";
import React from "react";

const FAQPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-8 gap-8">
      <FAQ />
      <Separator className="mb-4" />
      <Questions />
    </div>
  );
};

export default FAQPage;
