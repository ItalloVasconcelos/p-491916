
import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Camera, Upload, Image, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const SellPhotos = () => {
  return (
    <div className="min-h-screen bg-[rgba(250,252,254,1)] flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[rgba(236,241,244,1)] py-16">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Venda suas fotos e ganhe dinheiro</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transforme seu talento em renda. Venda suas fotos de eventos, esportes, cultura
              e muito mais na nossa plataforma.
            </p>
            <Button className="bg-[rgba(217,24,26,1)] hover:bg-[rgba(195,22,24,1)] text-white px-8 py-6 text-lg h-auto">
              Começar a vender
            </Button>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Como funciona</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <Camera className="h-12 w-12 text-[rgba(217,24,26,1)] mb-2" />
                  <CardTitle>1. Fotografe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Capture momentos incríveis em eventos, esportes, shows e muito mais.</p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <Upload className="h-12 w-12 text-[rgba(217,24,26,1)] mb-2" />
                  <CardTitle>2. Faça upload</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Envie suas fotos para nossa plataforma e organize-as por eventos.</p>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-[rgba(217,24,26,1)] mb-2" />
                  <CardTitle>3. Receba</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ganhe dinheiro toda vez que alguém comprar suas fotos.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-[rgba(236,241,244,1)]">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios para fotógrafos</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-[rgba(217,24,26,1)] text-white rounded-full p-3 h-fit">
                  <Image className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Aumente sua visibilidade</h3>
                  <p>Exponha seu trabalho para milhares de pessoas interessadas em fotos de eventos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[rgba(217,24,26,1)] text-white rounded-full p-3 h-fit">
                  <DollarSign className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Lucre com seu talento</h3>
                  <p>Estabeleça seus preços e receba pagamentos de forma segura e direta.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[rgba(217,24,26,1)] text-white rounded-full p-3 h-fit">
                  <Camera className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Foque no que você ama</h3>
                  <p>Nós cuidamos da venda, distribuição e pagamentos para que você foque na fotografia.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[rgba(217,24,26,1)] text-white rounded-full p-3 h-fit">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Construa sua comunidade</h3>
                  <p>Conecte-se com clientes e outros fotógrafos para expandir sua rede profissional.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Junte-se a centenas de fotógrafos que já estão lucrando com suas fotos na nossa plataforma.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[rgba(217,24,26,1)] hover:bg-[rgba(195,22,24,1)] text-white px-6">
                Criar conta
              </Button>
              <Button variant="outline" className="border-[#5762D5] text-[#5762D5]">
                Saiba mais
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SellPhotos;
