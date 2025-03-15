
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SearchSection } from "@/components/home/SearchSection";
import { EventGrid } from "@/components/home/EventGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { PhotographerShowcase } from "@/components/home/PhotographerShowcase";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ContactModal } from "@/components/contact/ContactModal";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  return (
    <div className="bg-[rgba(250,252,254,1)] flex flex-col overflow-hidden items-stretch">
      <Navbar />

      <main className="flex flex-col items-center">
        <HeroSection />
        <SearchSection />
        <EventGrid />

        <div className="container max-w-7xl mx-auto px-4 flex justify-end mt-8">
          <Link to="/events">
            <Button 
              className="bg-[rgba(217,24,26,1)] text-[#F7F7F9] font-semibold px-8 py-3 h-[46px] rounded-lg hover:bg-[rgba(195,22,24,1)]"
            >
              Ver todos os eventos
            </Button>
          </Link>
        </div>

        <HowItWorks />
        <PhotographerShowcase />

        <div className="container max-w-7xl mx-auto px-4 flex justify-end mt-8">
          <Link to="/portfolios">
            <Button 
              className="bg-[rgba(217,24,26,1)] text-[#F7F7F9] font-semibold px-8 py-3 h-[46px] rounded-lg hover:bg-[rgba(195,22,24,1)]"
            >
              Ver todos os Portfólios
            </Button>
          </Link>
        </div>

        <div onClick={handleContactClick}>
          <ContactCTA />
        </div>
      </main>

      <Footer />
      
      <ContactModal 
        isOpen={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </div>
  );
};

export default Index;
