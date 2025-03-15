
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { EventCard } from "@/components/home/EventCard";
import { SearchSection } from "@/components/home/SearchSection";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Create a larger array of 16 sample events
const EXPANDED_EVENTS = Array(16).fill(null).map((_, index) => ({
  photographerHandle: `@${['vini', 'joao', 'marina', 'pedro'][index % 4]}.fotografia`,
  title: [
    "6° NIGHT BIKE CRASA MOTOS",
    "Festival de Música Eletrônica",
    "Exposição de Arte Contemporânea",
    "Campeonato de Surf"
  ][index % 4],
  location: [
    "Fortaleza CE",
    "São Paulo SP",
    "Rio de Janeiro RJ",
    "Florianópolis SC"
  ][index % 4],
  date: [
    "18/02/2025",
    "05/03/2025",
    "12/07/2025",
    "30/09/2025"
  ][index % 4],
  venue: [
    "Crasa Motos Yamaha Matriz",
    "Parque Ibirapuera",
    "Centro Cultural Banco do Brasil",
    "Praia da Joaquina"
  ][index % 4],
  imageUrl:
    "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
}));

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = EXPANDED_EVENTS.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[rgba(250,252,254,1)] flex flex-col overflow-hidden items-stretch">
      <Navbar />

      <main className="flex flex-col items-center">
        <div className="w-full bg-[rgba(236,241,244,1)] py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Todos os Eventos</h1>
            
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Buscar por evento, local ou data..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
