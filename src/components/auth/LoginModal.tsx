
import React, { useState } from "react";
import { AlertTriangle, Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterModal } from "./RegisterModal";

interface LoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onRegisterClick: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onOpenChange,
  onRegisterClick,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail && !validateEmail(newEmail)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || emailError) {
      setLoginError(true);
      return;
    }
    
    // Normally would validate with Keycloak here
    setLoginError(true); // Simulating an error for demonstration
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Entrar
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  emailError ? "border-[#Ba2022] focus:border-[#Ba2022] focus:ring-[#Ba2022]" : 
                  focusedField === "email" ? "border-[#acafe9] focus:border-[#acafe9] focus:ring-[#acafe9]" : ""
                }`}
                placeholder="seu@email.com"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              {emailError && (
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <AlertCircle className="h-5 w-5 text-[#Ba2022]" />
                </div>
              )}
            </div>
            {emailError && (
              <p className="text-sm text-[#Ba2022] mt-1">E-mail inválido</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  loginError ? "border-[#Ba2022]" : 
                  focusedField === "password" ? "border-[#acafe9]" : ""
                }`}
                placeholder="Digite sua senha"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          <a
            href="#"
            className="block text-right text-sm text-black hover:underline"
          >
            Esqueci minha senha
          </a>

          {loginError && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-[#Ba2022] rounded-md">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">Login inválido, verifique suas credenciais</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[rgba(217,24,26,1)] hover:bg-[rgba(195,22,24,1)]"
          >
            Entrar
          </Button>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="mx-4 text-sm text-gray-500">ou</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full flex items-center justify-center gap-2"
          >
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/41262861051d5e03d8ffc4587a1f339b67cc05b9c8e4faca30504e46ce5cd175" 
              alt="Google" 
              className="h-5 w-5" 
            />
            Continuar com Google
          </Button>
        </form>

        <div className="text-center space-y-2 pt-4">
          <p className="text-sm">
            Ainda não tem uma conta?{" "}
            <button
              onClick={onRegisterClick}
              className="text-[#5762D5] hover:underline font-medium"
            >
              Cadastrar
            </button>
          </p>
          <p className="text-sm">
            É fotógrafo?{" "}
            <a href="#" className="text-[#5762D5] hover:underline font-medium">
              Acesse o login para fotógrafos
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
