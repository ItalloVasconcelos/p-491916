
import React, { useState, useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PhotographerAuthModals } from "@/components/auth/PhotographerAuthModals";
import { 
  Camera, 
  Upload, 
  DollarSign, 
  Image, 
  Users, 
  Globe, 
  Sparkles,
  BarChart3,
  ShoppingCart,
  Laptop,
  ChevronRight,
  ArrowDown
} from "lucide-react";

const SellPhotos = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">("login");
  const creatingRef = useRef<HTMLDivElement>(null);

  const handleLoginClick = () => {
    setAuthModalMode("login");
    setAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthModalMode("register");
    setAuthModalOpen(true);
  };

  const scrollToCreating = () => {
    if (creatingRef.current) {
      creatingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar sellPageMode />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-black text-white py-24">
          <div className="absolute inset-0 bg-black bg-opacity-70">
            <div className="absolute inset-0 overflow-hidden">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/a2ea58c54ab672b2a861f8d2ee506a4e4eb1d2741d7d4fa3d70b26a05ddd2fed?placeholderIfAbsent=true"
                alt="Photographers"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
          </div>
          
          <div className="container max-w-5xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-[#FF6B00] px-3 py-1">Plataforma líder</span> mundial<br />
              de fotos para eventos
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Venda suas fotos de eventos e aumente seu faturamento
            </p>
            <Button 
              onClick={scrollToCreating}
              className="bg-[#FF6B00] hover:bg-[#E56200] text-white px-8 py-6 text-lg h-auto rounded-full"
            >
              Comece a vender
            </Button>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <p className="text-[#FF6B00] font-bold text-xl mb-1">+ 54 mil</p>
                <p className="text-sm text-gray-600">fotógrafos</p>
              </div>
              <div className="p-4">
                <p className="text-[#FF6B00] font-bold text-xl mb-1">+ 1.1 bi</p>
                <p className="text-sm text-gray-600">fotos</p>
              </div>
              <div className="p-4">
                <p className="text-[#FF6B00] font-bold text-xl mb-1">+ 23</p>
                <p className="text-sm text-gray-600">países</p>
              </div>
              <div className="p-4">
                <p className="text-[#FF6B00] font-bold text-xl mb-1">+ 4 mil</p>
                <p className="text-sm text-gray-600">eventos por dia</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Revenue Section */}
        <section className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="/lovable-uploads/b8a73851-126b-4942-9723-b2bf050749e5.png" 
                  alt="Mobile app" 
                  className="w-full h-auto object-contain" 
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Mais receita para seu <span className="text-[#FF6B00]">negócio</span>
                </h2>
                <p className="text-gray-700 mb-8">
                  A plataforma ideal para fotógrafos que desejam aumentar suas vendas com fotos de eventos. 
                  Simples de usar, eficiente e com altas taxas de conversão.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#FF6B00] text-white rounded-full p-3">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Aumente seu faturamento</h3>
                    <p className="text-sm text-gray-600">Ganhe mais com suas fotos de eventos</p>
                  </div>
                </div>
                <Button 
                  onClick={handleRegisterClick}
                  className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full"
                >
                  Criar conta <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Maximize Profits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/a2ea58c54ab672b2a861f8d2ee506a4e4eb1d2741d7d4fa3d70b26a05ddd2fed?placeholderIfAbsent=true" 
                  alt="Dashboard" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg" 
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Maximize <span className="text-[#FF6B00]">seus lucros</span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Com nossas ferramentas avançadas de análise e gestão, você pode acompanhar suas vendas, 
                  identificar tendências e maximizar seus resultados.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#FF6B00] text-white rounded-full p-3">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Análise detalhada</h3>
                    <p className="text-sm text-gray-600">Acompanhe métricas importantes para seu negócio</p>
                  </div>
                </div>
                <Button 
                  onClick={handleRegisterClick}
                  className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full"
                >
                  Saiba mais <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Creating Section */}
        <section ref={creatingRef} className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/d786ce494ecfc97d7d526c534aac2743eab40d2c968bfa0fedf56b60cecfc137?placeholderIfAbsent=true" 
                  alt="Mobile app features" 
                  className="w-full h-auto object-contain rounded-xl shadow-lg" 
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">
                  Com <span className="text-[#FF6B00]">lá</span> seus clientes<br />
                  encontram suas fotos<br />
                  em <span className="text-[#FF6B00]">dois cliques</span>
                </h2>
                <p className="text-gray-700 mb-8">
                  Nosso sistema de reconhecimento facial torna extremamente fácil para os 
                  clientes encontrarem suas fotos em eventos.
                </p>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#FF6B00] text-white rounded-full p-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Reconhecimento facial</h3>
                    <p className="text-sm text-gray-600">Experiência simplificada para seus clientes</p>
                  </div>
                </div>
                <Button 
                  onClick={handleRegisterClick}
                  className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full"
                >
                  Experimente agora <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              O que você <span className="text-[#FF6B00]">encontra</span> na Olha a Foto
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        Seu site <span className="text-[#FF6B00]">personalizável</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Tenha um site profissional com sua marca para vender suas fotos.
                      </p>
                      <Button 
                        onClick={handleRegisterClick}
                        className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full text-sm"
                      >
                        Criar conta <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                      <Globe className="h-12 w-12 text-[#FF6B00]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        Nosso painel com <span className="text-[#FF6B00]">todas as funções</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Gerencie suas fotos, vendas e clientes em um só lugar.
                      </p>
                      <Button 
                        onClick={handleRegisterClick}
                        className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full text-sm"
                      >
                        Saiba mais <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                      <Laptop className="h-12 w-12 text-[#FF6B00]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        Fluxo de <span className="text-[#FF6B00]">compras</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Sistema de compras otimizado para maximizar suas conversões.
                      </p>
                      <Button 
                        onClick={handleRegisterClick}
                        className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full text-sm"
                      >
                        Ver demonstração <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                      <ShoppingCart className="h-12 w-12 text-[#FF6B00]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="p-6 flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        Reconhecimento <span className="text-[#FF6B00]">facial</span>
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Seus clientes encontram suas fotos facilmente com IA.
                      </p>
                      <Button 
                        onClick={handleRegisterClick}
                        className="bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-full text-sm"
                      >
                        Experimente <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="w-full md:w-1/3 bg-gray-100 flex items-center justify-center p-4">
                      <Sparkles className="h-12 w-12 text-[#FF6B00]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">
              Sem mensalidade, <span className="text-[#FF6B00]">pague conforme a sua</span><br />
              necessidade em cada evento/galeria
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Escolha o melhor plano para cada evento. Você não precisa se comprometer 
              com mensalidades fixas.
            </p>
            
            <div className="bg-white rounded-xl shadow-lg p-6 overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-2">Funcionalidade</th>
                    <th className="text-center py-4 px-2">Básico</th>
                    <th className="text-center py-4 px-2">Starter</th>
                    <th className="text-center py-4 px-2">Pro</th>
                    <th className="text-center py-4 px-2">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Reconhecimento facial</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Quantidade de fotos</td>
                    <td className="text-center py-4 px-2">100</td>
                    <td className="text-center py-4 px-2">500</td>
                    <td className="text-center py-4 px-2">1000</td>
                    <td className="text-center py-4 px-2">Ilimitado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-2 font-medium">Marca d'água</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">✓</td>
                    <td className="text-center py-4 px-2">Personalizável</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td className="py-4 px-2 font-bold">Preço</td>
                    <td className="text-center py-4 px-2 font-bold">Grátis</td>
                    <td className="text-center py-4 px-2 font-bold">R$29</td>
                    <td className="text-center py-4 px-2 font-bold">R$59</td>
                    <td className="text-center py-4 px-2 font-bold">R$99</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <Button 
                onClick={handleRegisterClick}
                className="bg-[#FF6B00] hover:bg-[#E56200] text-white px-8 py-6 text-lg h-auto rounded-full"
              >
                Comece agora mesmo
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de fotógrafos que já estão aumentando sua receita com a Olha a Foto.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                onClick={handleRegisterClick}
                className="bg-[#FF6B00] hover:bg-[#E56200] text-white px-8 py-3 rounded-full text-lg"
              >
                Criar conta
              </Button>
              <Button 
                onClick={handleLoginClick}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full text-lg"
              >
                Entrar
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <PhotographerAuthModals 
        isOpen={authModalOpen} 
        onOpenChange={setAuthModalOpen}
        initialMode={authModalMode}
      />
    </div>
  );
};

export default SellPhotos;
