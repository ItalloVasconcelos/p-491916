
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Search } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { useAuth } from "@/hooks/useAuth";

const EVENT_PHOTOS = Array(16).fill(null).map((_, i) => ({
  id: `photo-${i}`,
  url: "public/lovable-uploads/c17ed4d9-23cf-4058-8363-577c0c706db5.png",
}));

const EventDetail = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const [currentPage] = useState(1);
  
  // This would normally be fetched from API based on the event ID
  const eventDetails = {
    id: id || "1",
    title: "6º Night Bike Crasa Motos",
    location: "Fortaleza CE",
    date: "18/02/2025",
    venue: "Crasa Motos Yamaha Matriz",
    photographerHandle: "@vini.fotografia",
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <span>&gt;</span>
          <Link to="/events" className="text-blue-600 hover:underline">Explorar</Link>
          <span>&gt;</span>
          <span className="text-gray-700">Evento</span>
        </div>

        {/* Event Title */}
        <h1 className="text-4xl font-bold mb-2">{eventDetails.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <p className="text-lg">{`${eventDetails.location} - ${eventDetails.date}`}</p>
        </div>
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="h-5 w-5" />
          <p>{eventDetails.venue}</p>
        </div>

        {/* Recognition Box */}
        {!isAuthenticated && (
          <div className="bg-gray-100 rounded-md p-8 mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Tire uma selfie ou enviei uma foto sua</h2>
              <p className="mb-4">Utilize o nosso reconhecimento facial para desbloquear as suas fotos</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Desbloquear
              </Button>
            </div>
            <div className="w-32 h-32 flex items-center justify-center border-4 border-blue-500 rounded-md">
              <div className="w-24 h-24 rounded-full border-2 border-blue-500 flex items-center justify-center">
                <div className="text-5xl text-blue-500">:)</div>
              </div>
            </div>
          </div>
        )}

        {/* Photos Section */}
        <h2 className="text-2xl font-bold mb-6">Todas as fotos</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {EVENT_PHOTOS.map((photo) => (
            <div key={photo.id} className="aspect-square overflow-hidden rounded-md relative group">
              <img 
                src={photo.url} 
                alt={`Event photo ${photo.id}`} 
                className="w-full h-full object-cover"
              />
              {!isAuthenticated && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button variant="outline" className="bg-white hover:bg-gray-100">
                    Ver detalhes
                  </Button>
                </div>
              )}
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
      
      {/* Footer with sections */}
      <div className="border-t border-gray-200 pt-8 pb-12 bg-white">
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

export default EventDetail;
