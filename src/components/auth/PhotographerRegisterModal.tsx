
import React, { useState } from "react";
import { AlertCircle, Eye, EyeOff, Mail, User, Lock, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface PhotographerRegisterModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginClick: () => void;
}

export const PhotographerRegisterModal: React.FC<PhotographerRegisterModalProps> = ({
  isOpen,
  onOpenChange,
  onLoginClick,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    checkPasswordMatch(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    checkPasswordMatch(password, newConfirmPassword);
  };

  const checkPasswordMatch = (pass1: string, pass2: string) => {
    if (pass2 && pass1 !== pass2) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !cpf || !password || !confirmPassword || !acceptedTerms || emailError || passwordError) {
      toast({
        title: "Erro no cadastro",
        description: "Por favor, preencha todos os campos corretamente.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically call an API to register the photographer
    // For now, we'll just show a success message
    toast({
      title: "Cadastro realizado com sucesso!",
      description: "Em breve você receberá um email para confirmar seu cadastro.",
    });
    
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Cadastre-se como Fotógrafo
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome completo
            </label>
            <div className="relative">
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${focusedField === "name" ? "border-[#FF6B00]" : ""}`}
                placeholder="Seu nome completo"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                  focusedField === "email" ? "border-[#FF6B00]" : ""
                }`}
                placeholder="seu@email.com"
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
            <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
              CPF
            </label>
            <div className="relative">
              <Input
                id="cpf"
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                onFocus={() => setFocusedField("cpf")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${focusedField === "cpf" ? "border-[#FF6B00]" : ""}`}
                placeholder="000.000.000-00"
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  passwordError ? "border-[#Ba2022]" : 
                  focusedField === "password" ? "border-[#FF6B00]" : ""
                }`}
                placeholder="Sua senha"
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

          <div className="space-y-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
              Confirmar senha
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onFocus={() => setFocusedField("confirmPassword")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  passwordError ? "border-[#Ba2022]" : 
                  focusedField === "confirmPassword" ? "border-[#FF6B00]" : ""
                }`}
                placeholder="Confirme sua senha"
              />
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
              {passwordError && (
                <div className="flex items-center gap-1 absolute -top-6 right-0">
                  <p className="text-xs text-[#Ba2022]">Senhas não conferem</p>
                  <AlertCircle className="h-4 w-4 text-[#Ba2022]" />
                </div>
              )}
            </div>
          </div>

          <div className="flex items-start gap-2 mt-4">
            <Checkbox 
              id="terms" 
              checked={acceptedTerms}
              onCheckedChange={(checked) => setAcceptedTerms(checked as boolean)}
              className="mt-1"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              Eu concordo com os <a href="#" className="text-[#FF6B00] underline">Termos de Uso</a> e{" "}
              <a href="#" className="text-[#FF6B00] underline">Política de Privacidade</a>
            </label>
          </div>

          <Button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full bg-[#FF6B00] hover:bg-[#E56200] text-white rounded-xl disabled:opacity-50"
          >
            Criar conta
          </Button>

          <div className="text-center space-y-2 pt-4">
            <p className="text-sm">
              Já tem uma conta?{" "}
              <button
                onClick={onLoginClick}
                className="text-[#FF6B00] hover:underline font-medium"
              >
                Entrar
              </button>
            </p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
