
import React, { useState } from "react";
import { AlertTriangle, Eye, EyeOff, Mail, Lock, User, AlertCircle, CreditCard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";

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
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { register } = useAuth();

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !cpf || !password || !confirmPassword || emailError || passwordError) {
      setRegisterError(true);
      return;
    }
    
    const success = await register(fullName, email, cpf, password);
    if (success) {
      onOpenChange(false);
    } else {
      setRegisterError(true);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Cadastrar
          </DialogTitle>
        </DialogHeader>
        
        {registerError && (
          <div className="flex items-center gap-2 p-3 bg-red-50 text-[#Ba2022] rounded-md mt-2 mb-4">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">Erro ao criar conta, verifique seus dados</p>
          </div>
        )}

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
              htmlFor="cpf"
              className="block text-sm font-medium text-gray-700"
            >
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
                className={`pl-10 ${
                  focusedField === "cpf" ? "border-[#acafe9]" : ""
                }`}
                placeholder="Digite seu CPF"
              />
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
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
              <div className="flex items-center gap-1 absolute right-0">
                <p className="text-xs text-[#Ba2022]">As senhas não coincidem</p>
                <AlertCircle className="h-4 w-4 text-[#Ba2022]" />
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-[#D9181a] hover:bg-[rgba(195,22,24,1)] rounded-xl"
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
              className="text-black hover:underline font-medium underline"
            >
              Entrar
            </button>
          </p>
          <p className="text-sm">
            É fotógrafo?{" "}
            <a href="#" className="text-black hover:underline font-medium underline">
              Acesse cadastro para fotógrafos
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
