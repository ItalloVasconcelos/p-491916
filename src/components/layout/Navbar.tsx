
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthModals } from "@/components/auth/AuthModals";
import { Button } from "@/components/ui/button";
import { ShoppingCart, UserCog, Image } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const Navbar = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">("login");
  const { isAuthenticated, login, logout } = useAuth();

  const handleLoginClick = () => {
    setAuthModalMode("login");
    setAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthModalMode("register");
    setAuthModalOpen(true);
  };

  return (
    <nav className="min-h-14 w-full text-base font-semibold text-center">
      <div className="bg-[rgba(250,252,254,1)] border-neutral-200 flex min-h-14 w-full items-center gap-[40px_100px] justify-between flex-wrap px-[30px] py-[7px] border-b">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 text-black my-auto">
          <Link to="/">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/d786ce494ecfc97d7d526c534aac2743eab40d2c968bfa0fedf56b60cecfc137?placeholderIfAbsent=true"
              alt="Logo"
              className="aspect-[1.43] object-contain w-[60px] self-stretch shrink-0 my-auto"
            />
          </Link>
          <Link
            to="/sell"
            className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-gray-700"
          >
            Vender fotos
          </Link>
          <Link
            to="/portfolios"
            className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-gray-700"
          >
            Contratar fotógrafo
          </Link>
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-[15px] text-[#5762D5] whitespace-nowrap my-auto">
          <Button
            variant="ghost"
            className="self-stretch min-h-9 flex items-center gap-2 text-[#0E0E2C] justify-center my-auto px-[5px] py-1.5"
          >
            <ShoppingCart className="h-6 w-6" />
            <span className="self-stretch my-auto">Carrinho</span>
          </Button>

          <div className="bg-[rgba(241,243,244,1)] self-stretch flex w-px shrink-0 h-9 gap-2.5 my-auto" />

          {isAuthenticated ? (
            <>
              <Link
                to="/my-photos"
                className="self-stretch min-h-9 flex items-center gap-1.5 my-auto px-[5px] py-[9px] hover:text-[#4751C4]"
              >
                <Image className="h-5 w-5" />
                Minhas Fotos
              </Link>
              <Button
                onClick={() => logout()}
                variant="ghost"
                className="self-stretch min-h-9 flex items-center gap-1.5 my-auto px-[5px] py-[9px] hover:text-[#4751C4]"
              >
                <UserCog className="h-5 w-5" />
                Minha Conta
              </Button>
            </>
          ) : (
            <>
              <button
                onClick={handleRegisterClick}
                className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-[#4751C4]"
              >
                Cadastrar
              </button>

              <button
                onClick={handleLoginClick}
                className="self-stretch min-h-9 gap-2.5 my-auto px-5 py-[9px] rounded-md border-[rgba(87,98,213,1)] border-solid border-2 hover:bg-[rgba(87,98,213,0.1)]"
              >
                Entrar
              </button>
            </>
          )}

          <Link
            to="/explore"
            className="self-stretch bg-[rgba(217,24,26,1)] min-h-9 gap-2.5 text-[#F7F7F9] my-auto px-5 py-[9px] rounded-md hover:bg-[rgba(195,22,24,1)]"
          >
            Explorar
          </Link>
        </div>
      </div>

      <AuthModals 
        isOpen={authModalOpen} 
        onOpenChange={setAuthModalOpen} 
        initialMode={authModalMode} 
      />
    </nav>
  );
};
