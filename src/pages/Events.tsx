
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, LayoutGrid } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useAuth } from "@/hooks/useAuth";

const EXPANDED_EVENTS = Array(16).fill(null).map((_, index) => ({
  id: index,
  photographerHandle: `@${['vini', 'joao', 'marina', 'pedro'][index % 4]}.fotografia`,
  title: "6° NIGHT BIKE CRASA MOTOS",
  location: "Fortaleza CE",
  date: "18/02/2025",
  venue: "Crasa Motos Yamaha Matriz",
  imageUrl: "public/lovable-uploads/c17ed4d9-23cf-4058-8363-577c0c706db5.png",
}));

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage] = useState(1);
  const { isAuthenticated } = useAuth();

  const filteredEvents = EXPANDED_EVENTS.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
            <span>&gt;</span>
            <span className="text-gray-700">Explorar</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Explorar</h1>
            <p className="text-xl">Encontre aqui o seu evento</p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-grow relative">
              <Input
                type="text"
                placeholder="Pesquisar evento"
                className="pl-10 h-12"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="flex gap-2">
              <Button variant="ghost" className="border border-gray-300 px-2 h-12 w-12">
                <LayoutGrid className="h-5 w-5" />
              </Button>
              
              <div className="w-40">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Cidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fortaleza">Fortaleza</SelectItem>
                    <SelectItem value="sao-paulo">São Paulo</SelectItem>
                    <SelectItem value="rio">Rio de Janeiro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 h-12 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Pesquisar
              </Button>

              <div className="w-40">
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Mais recentes</SelectItem>
                    <SelectItem value="oldest">Mais antigos</SelectItem>
                    <SelectItem value="az">A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {filteredEvents.map((event) => (
              <Link to={`/event/${event.id}`} key={event.id} className="group">
                <div className="relative rounded-md overflow-hidden">
                  <img 
                    src={event.imageUrl} 
                    alt={event.title} 
                    className="w-full aspect-square object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-400 text-white rounded-md px-2 py-1 text-sm">
                    {event.photographerHandle}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <h3 className="text-white font-bold">{event.title}</h3>
                    <p className="text-white text-sm">{`${event.location} - ${event.date}`}</p>
                    <div className="flex items-center gap-1 text-white text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className="text-blue-600">
                  &lt; Anterior
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className={currentPage === 1 ? "bg-blue-100 text-blue-600" : ""}>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className={currentPage === 2 ? "bg-blue-100 text-blue-600" : ""}>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className={currentPage === 3 ? "bg-blue-100 text-blue-600" : ""}>
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className={currentPage === 4 ? "bg-blue-100 text-blue-600" : ""}>
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="text-blue-600">
                  Seguinte &gt;
                </PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </main>

      {/* Footer with sections */}
      <div className="border-t border-gray-200 pt-8 pb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Quem somos</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Sobre nós</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Manifesto</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contato</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Termos de uso</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Soluções</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Encontrar fotos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Para fotógrafos</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Explorar</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Ajuda</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Como o Olha a Foto funciona</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Central de ajuda</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Perguntas frequentes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
