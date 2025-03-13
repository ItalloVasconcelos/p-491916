import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchSection } from "@/components/home/SearchSection";
import { EventGrid } from "@/components/home/EventGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PhotographerShowcase } from "@/components/home/PhotographerShowcase";
import { ContactCTA } from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <div className="bg-[rgba(250,252,254,1)] flex flex-col overflow-hidden items-stretch pb-[35px]">
      <Navbar />

      <main>
        <HeroSection />
        <SearchSection />
        <EventGrid />

        <button className="bg-[rgba(217,24,26,1)] min-h-[46px] gap-2 text-base text-[#F7F7F9] font-semibold text-center mr-[89px] mt-2.5 px-2.5 py-3.5 rounded-lg max-md:mr-2.5 hover:bg-[rgba(195,22,24,1)]">
          Ver todos os eventos
        </button>

        <HowItWorks />
        <PhotographerShowcase />

        <button className="bg-[rgba(217,24,26,1)] min-h-[46px] gap-2 text-base text-[#F7F7F9] font-semibold text-center mt-2.5 px-2.5 py-3.5 rounded-lg max-md:mr-0.5 hover:bg-[rgba(195,22,24,1)]">
          Ver todos os Portfólios
        </button>

        <ContactCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
