
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, Calendar, MapPin } from "lucide-react";
import { EventCard } from "@/components/home/EventCard";

// Sample photographer data
const PHOTOGRAPHERS = [
  {
    id: "vini",
    name: "Vinicius Silva",
    handle: "@vini.fotografia",
    bio: "Especialista em fotografia de eventos esportivos e outdoor. Com mais de 10 anos de experiência, tenho trabalhado com diversos tipos de eventos esportivos, desde corridas locais até competições internacionais.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `vini_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "marina",
    name: "Marina Costa",
    handle: "@marina.costa",
    bio: "Fotógrafa profissional com foco em eventos culturais e sociais. Especializada em capturar momentos únicos e emoções autênticas em eventos de todos os tipos.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `marina_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "pedro",
    name: "Pedro Nunes",
    handle: "@nunes.foto",
    bio: "Fotógrafo especializado em fotografia de eventos corporativos. Trabalho com empresas de todos os portes para documentar seus eventos mais importantes.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `pedro_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "juliana",
    name: "Juliana Santos",
    handle: "@ju.santos",
    bio: "Especialista em fotografia de casamentos e eventos sociais. Meu estilo combina fotojornalismo com retratos elegantes para contar a história do seu dia especial.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `juliana_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "carlos",
    name: "Carlos Mendes",
    handle: "@carlos.photos",
    bio: "Fotógrafo especializado em fotografia de natureza e paisagens, mas também trabalho com eventos ao ar livre e esportivos.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `carlos_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "ana",
    name: "Ana Oliveira",
    handle: "@ana.oliveira",
    bio: "Fotógrafa com foco em eventos corporativos e retratos profissionais. Ajudo a construir a imagem da sua empresa através de fotografias de alta qualidade.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `ana_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "roberto",
    name: "Roberto Lima",
    handle: "@roberto.lima",
    bio: "Fotógrafo especializado em fotografia esportiva e de ação. Capturo momentos de alta energia e grande impacto visual.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `roberto_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  },
  {
    id: "camila",
    name: "Camila Rocha",
    handle: "@camila.rocha",
    bio: "Fotógrafa de eventos culturais e shows. Especializada em capturar a energia e emoção de performances ao vivo.",
    photos: Array(8).fill(null).map((_, i) => ({ 
      id: `camila_${i}`,
      url: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true"
    }))
  }
];

// Sample events per photographer
const PHOTOGRAPHER_EVENTS = {
  vini: [
    {
      photographerHandle: "@vini.fotografia",
      title: "Maratona de Fortaleza",
      location: "Fortaleza CE",
      date: "18/02/2025",
      venue: "Beira Mar",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    },
    {
      photographerHandle: "@vini.fotografia",
      title: "Campeonato de Ciclismo",
      location: "Fortaleza CE",
      date: "25/03/2025",
      venue: "Parque do Cocó",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    }
  ],
  marina: [
    {
      photographerHandle: "@marina.costa",
      title: "Festival de Música Eletrônica",
      location: "São Paulo SP",
      date: "05/03/2025",
      venue: "Parque Ibirapuera",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    },
    {
      photographerHandle: "@marina.costa",
      title: "Exposição de Arte Moderna",
      location: "São Paulo SP",
      date: "12/04/2025",
      venue: "MASP",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    }
  ],
  // Default events for other photographers
  default: [
    {
      photographerHandle: "@fotografo",
      title: "Evento Cultural",
      location: "Rio de Janeiro RJ",
      date: "10/05/2025",
      venue: "Centro Cultural",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    },
    {
      photographerHandle: "@fotografo",
      title: "Festival de Verão",
      location: "Salvador BA",
      date: "15/01/2025",
      venue: "Praia do Forte",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
    }
  ]
};

const PhotographerProfile = () => {
  const { id } = useParams<{ id: string }>();
  
  const photographer = PHOTOGRAPHERS.find(p => p.id === id) || PHOTOGRAPHERS[0];
  
  // Get events for this photographer, or use default events
  const photographerEvents = PHOTOGRAPHER_EVENTS[id as keyof typeof PHOTOGRAPHER_EVENTS] || PHOTOGRAPHER_EVENTS.default;
  
  return (
    <div className="bg-[rgba(250,252,254,1)] flex flex-col overflow-hidden items-stretch">
      <Navbar />

      <main className="flex flex-col items-center">
        <div className="w-full bg-[rgba(236,241,244,1)] py-16">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link to="/portfolios">
                <Button variant="ghost" className="flex items-center gap-2 text-black">
                  <ArrowLeft className="h-5 w-5" />
                  Voltar para Portfólios
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-32 h-32 rounded-full bg-[rgba(213,215,244,1)] flex items-center justify-center text-4xl font-bold">
                {photographer.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{photographer.name}</h1>
                <p className="text-[#5762D5] text-xl mb-3">{photographer.handle}</p>
                <p className="text-gray-700 max-w-2xl">{photographer.bio}</p>
                
                <div className="flex gap-4 mt-6">
                  <Button className="bg-[rgba(217,24,26,1)] text-white hover:bg-[rgba(195,22,24,1)]">
                    Contratar
                  </Button>
                  <Button variant="outline" className="border-[#5762D5] text-[#5762D5]">
                    Entrar em contato
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-12">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[rgba(217,24,26,1)]" />
              Eventos com fotos deste fotógrafo
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {photographerEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Camera className="h-6 w-6 text-[rgba(217,24,26,1)]" />
              Galeria de fotos
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {photographer.photos.map((photo, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={photo.url} 
                    alt={`Portfolio de ${photographer.name}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PhotographerProfile;
