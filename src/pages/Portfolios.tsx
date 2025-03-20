
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LayoutGrid } from "lucide-react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useAuth } from "@/hooks/useAuth";

// Create photographer portfolio data
const PHOTOGRAPHERS = [
  {
    id: "vini",
    name: "Vinicius Silva",
    handle: "@nunes.foto",
    bio: "Especialista em fotografia de eventos esportivos e outdoor",
    featured: true,
    imageUrl: "public/lovable-uploads/ebd5e722-22d4-4698-b701-dd77d46a4c61.png"
  },
  {
    id: "marina",
    name: "Marina Costa",
    handle: "@nunes.foto",
    bio: "Fotógrafa profissional com foco em eventos culturais e sociais",
    featured: true,
    imageUrl: "public/lovable-uploads/ebd5e722-22d4-4698-b701-dd77d46a4c61.png"
  },
  {
    id: "pedro",
    name: "Pedro Nunes",
    handle: "@nunes.foto",
    bio: "Fotógrafo especializado em fotografia de eventos corporativos",
    featured: true,
    imageUrl: "public/lovable-uploads/ebd5e722-22d4-4698-b701-dd77d46a4c61.png"
  },
  {
    id: "juliana",
    name: "Juliana Santos",
    handle: "@nunes.foto",
    bio: "Especialista em fotografia de casamentos e eventos sociais",
    featured: true,
    imageUrl: "public/lovable-uploads/ebd5e722-22d4-4698-b701-dd77d46a4c61.png"
  },
].concat(Array(16).fill(null).map((_, i) => ({
  id: `photographer-${i + 5}`,
  name: `Fotógrafo ${i + 5}`,
  handle: "@nunes.foto",
  bio: "Fotógrafo especializado em eventos",
  featured: true,
  imageUrl: "public/lovable-uploads/ebd5e722-22d4-4698-b701-dd77d46a4c61.png"
})));

const Portfolios = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage] = useState(1);
  const { isAuthenticated } = useAuth();

  const filteredPhotographers = PHOTOGRAPHERS.filter(
    (photographer) =>
      photographer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.handle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      photographer.bio.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Portfólios</h1>
            <p className="text-xl">Escolha um de nossos especialistas para registrar seu evento!</p>
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

          {/* Photographers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
            {filteredPhotographers.map((photographer) => (
              <div key={photographer.id} className="group">
                <div className="relative rounded-md overflow-hidden aspect-square">
                  <img 
                    src={photographer.imageUrl} 
                    alt={photographer.name} 
                    className="w-full h-full object-cover"
                  />
                  {photographer.featured && (
                    <div className="absolute top-3 left-3 bg-white text-black rounded-md px-2 py-1 text-sm">
                      Em destaque
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between py-2 px-1 bg-gray-100 rounded-b-md">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-300 rounded-md"></div>
                    <span className="text-sm font-medium">{photographer.handle}</span>
                  </div>
                  <Link to={`/photographer/${photographer.id}`}>
                    <span className="text-blue-600 font-semibold text-sm">Ver perfil</span>
                  </Link>
                </div>
              </div>
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

export default Portfolios;
