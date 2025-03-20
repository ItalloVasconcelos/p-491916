
import React, { useState } from "react";
import { AlertCircle, Eye, EyeOff, Mail, Lock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

interface PhotographerLoginModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onRegisterClick: () => void;
}

export const PhotographerLoginModal: React.FC<PhotographerLoginModalProps> = ({
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
  const { login } = useAuth();
  const { toast } = useToast();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || emailError) {
      setLoginError(true);
      return;
    }
    
    const success = await login(email, password);
    if (success) {
      onOpenChange(false);
      toast({
        title: "Login bem-sucedido",
        description: "Bem-vindo ao painel de fotógrafo!",
      });
    } else {
      setLoginError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Área do Fotógrafo
          </DialogTitle>
        </DialogHeader>
        
        {loginError && (
          <div className="flex items-center gap-2 p-3 bg-red-50 text-[#Ba2022] rounded-md mt-2 mb-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">Login inválido, verifique suas credenciais</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="photographer-email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <div className="relative">
              <Input
                id="photographer-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  emailError ? "border-[#Ba2022]" : 
                  focusedField === "email" ? "border-[#FF6B00]" : ""
                }`}
                placeholder="email"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              {emailError && (
                <div className="flex items-center gap-1 absolute -top-6 right-0">
                  <p className="text-xs text-[#Ba2022]">E-mail inválido</p>
                  <AlertCircle className="h-4 w-4 text-[#Ba2022]" />
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="photographer-password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <Input
                id="photographer-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  loginError ? "border-[#Ba2022]" : 
                  focusedField === "password" ? "border-[#FF6B00]" : ""
                }`}
                placeholder="senha"
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
            className="block text-left text-sm text-black hover:underline underline"
          >
            Esqueci minha senha
          </a>

          <Button
            type="submit"
            className="w-full bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-xl"
          >
            Entrar
          </Button>

          <div className="text-center space-y-2 pt-4">
            <p className="text-sm">
              Ainda não tem uma conta?{" "}
              <button
                onClick={onRegisterClick}
                className="text-[#FF6B00] hover:underline font-medium"
              >
                Cadastrar como fotógrafo
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
