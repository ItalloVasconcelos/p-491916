
import React, { useState } from "react";
import { AlertTriangle, Eye, EyeOff, Mail, Lock, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

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
  const { login } = useAuth();

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
    } else {
      setLoginError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Entrar
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
                  emailError ? "border-[#Ba2022]" : 
                  focusedField === "email" ? "border-[#acafe9]" : ""
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
                placeholder="password"
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
            className="w-full bg-[#D9181a] hover:bg-[rgba(195,22,24,1)] rounded-xl"
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
              className="text-black hover:underline font-medium underline"
            >
              Cadastrar
            </button>
          </p>
          <p className="text-sm">
            É fotógrafo?{" "}
            <a href="#" className="text-black hover:underline font-medium underline">
              Acesse o login para fotógrafos
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
