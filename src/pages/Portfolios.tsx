
import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Create photographer portfolio data
const PHOTOGRAPHERS = [
  {
    name: "Vinicius Silva",
    handle: "@vini.fotografia",
    bio: "Especialista em fotografia de eventos esportivos e outdoor",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `vini_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    name: "Marina Costa",
    handle: "@marina.costa",
    bio: "Fotógrafa profissional com foco em eventos culturais e sociais",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `marina_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    name: "Pedro Nunes",
    handle: "@nunes.foto",
    bio: "Fotógrafo especializado em fotografia de eventos corporativos",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `pedro_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    name: "Juliana Santos",
    handle: "@ju.santos",
    bio: "Especialista em fotografia de casamentos e eventos sociais",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `juliana_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  }
];

const Portfolios = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPhotographers = PHOTOGRAPHERS.filter(
    (photographer) =>
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[rgba(250,252,254,1)] flex flex-col overflow-hidden items-stretch">
      <Navbar />

      <main className="flex flex-col items-center">
        <div className="w-full bg-[rgba(236,241,244,1)] py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Portfólios de Fotógrafos</h1>
            
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Buscar por nome ou especialidade..."
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-12">
          {filteredPhotographers.map((photographer, index) => (
            <div key={index} className="mb-16">
              <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
                <div className="w-24 h-24 rounded-full bg-[rgba(213,215,244,1)] flex items-center justify-center text-2xl font-bold">
                  {photographer.name.charAt(0)}
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{photographer.name}</h2>
                  <p className="text-[#5762D5] mb-2">{photographer.handle}</p>
                  <p className="text-gray-600">{photographer.bio}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photographer.photos.map((photo, photoIndex) => (
                  <div key={photoIndex} className="aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={photo.url} 
                      alt={`Portfolio de ${photographer.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolios;
