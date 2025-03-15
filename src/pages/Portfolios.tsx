
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Create photographer portfolio data
const PHOTOGRAPHERS = [
  {
    id: "vini",
    name: "Vinicius Silva",
    handle: "@vini.fotografia",
    bio: "Especialista em fotografia de eventos esportivos e outdoor",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `vini_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "marina",
    name: "Marina Costa",
    handle: "@marina.costa",
    bio: "Fotógrafa profissional com foco em eventos culturais e sociais",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `marina_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "pedro",
    name: "Pedro Nunes",
    handle: "@nunes.foto",
    bio: "Fotógrafo especializado em fotografia de eventos corporativos",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `pedro_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "juliana",
    name: "Juliana Santos",
    handle: "@ju.santos",
    bio: "Especialista em fotografia de casamentos e eventos sociais",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `juliana_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "carlos",
    name: "Carlos Mendes",
    handle: "@carlos.photos",
    bio: "Fotógrafo especializado em fotografia de natureza e paisagens",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `carlos_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "ana",
    name: "Ana Oliveira",
    handle: "@ana.oliveira",
    bio: "Fotógrafa com foco em eventos corporativos e retratos profissionais",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `ana_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "roberto",
    name: "Roberto Lima",
    handle: "@roberto.lima",
    bio: "Fotógrafo especializado em fotografia esportiva e de ação",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `roberto_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "camila",
    name: "Camila Rocha",
    handle: "@camila.rocha",
    bio: "Fotógrafa de eventos culturais e shows",
    photos: Array(4).fill(null).map((_, i) => ({ 
      id: `camila_${i}`,
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
            <div className="flex items-center mb-6">
              <Link to="/">
                <Button variant="ghost" className="flex items-center gap-2 text-black">
                  <ArrowLeft className="h-5 w-5" />
                  Voltar
                </Button>
              </Link>
            </div>
            
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
            {filteredPhotographers.map((photographer) => (
              <Card key={photographer.id} className="relative overflow-hidden rounded-[15px]">
                <CardContent className="p-0">
                  <div className="relative aspect-[0.9] w-full">
                    <img
                      src={photographer.photos[0].url}
                      alt={photographer.handle}
                      className="absolute h-full w-full object-cover inset-0"
                    />
                    <div className="absolute top-2 left-2 bg-white text-sm text-black font-medium leading-[1.4] px-1.5 py-[5px] rounded-lg">
                      Em destaque
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-[rgba(236,241,244,1)] flex items-center justify-between px-2.5 py-1.5 rounded-b-[15px]">
                      <div className="flex items-center gap-[5px] text-sm text-black font-medium whitespace-nowrap leading-[1.4]">
                        <div className="bg-[rgba(217,217,217,1)] w-[25px] h-[25px] rounded-[5px]" />
                        <div>{photographer.handle}</div>
                      </div>
                      <Link to={`/photographer/${photographer.id}`}>
                        <button className="text-base text-[#5762D5] font-semibold px-[5px] py-[9px] hover:text-[#4751C4]">
                          Ver perfil
                        </button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolios;
