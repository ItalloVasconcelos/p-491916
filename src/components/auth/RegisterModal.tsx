
import React, { useState } from "react";
import { AlertTriangle, Eye, EyeOff, Mail, Lock, User, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface RegisterModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginClick: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onOpenChange,
  onLoginClick,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
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

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  const validatePasswords = (password: string, confirmPassword: string) => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword || emailError || passwordError) {
      setRegisterError(true);
      return;
    }
    
    // Normally would register with Keycloak here
    setRegisterError(true); // Simulating an error for demonstration
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Cadastrar
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Nome Completo
            </label>
            <div className="relative">
              <Input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                onFocus={() => setFocusedField("fullName")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  focusedField === "fullName" ? "border-[#acafe9]" : ""
                }`}
                placeholder="Digite seu nome completo"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="register-email"
              className="block text-sm font-medium text-gray-700"
            >
              E-mail
            </label>
            <div className="relative">
              <Input
                id="register-email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  emailError ? "border-[#Ba2022]" : 
                  focusedField === "email" ? "border-[#acafe9]" : ""
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
              htmlFor="register-password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <Input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className={`pl-10 ${
                  passwordError ? "border-[#Ba2022]" : 
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

          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirmar Senha
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
                  focusedField === "confirmPassword" ? "border-[#acafe9]" : ""
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
            </div>
            {passwordError && (
              <p className="text-sm text-[#Ba2022] mt-1">As senhas não coincidem</p>
            )}
          </div>

          {registerError && (
            <div className="flex items-center gap-2 p-3 bg-red-50 text-[#Ba2022] rounded-md">
              <AlertTriangle className="h-5 w-5 flex-shrink-0" />
              <p className="text-sm">Erro ao criar conta, verifique seus dados</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-[rgba(217,24,26,1)] hover:bg-[rgba(195,22,24,1)]"
          >
            Criar Conta
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
            Já tem uma conta?{" "}
            <button
              onClick={onLoginClick}
              className="text-[#5762D5] hover:underline font-medium"
            >
              Entrar
            </button>
          </p>
          <p className="text-sm">
            É fotógrafo?{" "}
            <a href="#" className="text-[#5762D5] hover:underline font-medium">
              Acesse cadastro para fotógrafos
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
