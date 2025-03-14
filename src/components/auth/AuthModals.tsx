
import React, { useState } from "react";
import { LoginModal } from "./LoginModal";
import { RegisterModal } from "./RegisterModal";

interface AuthModalsProps {
  initialMode?: "login" | "register";
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModals: React.FC<AuthModalsProps> = ({
  initialMode = "login",
  isOpen,
  onOpenChange,
}) => {
  const [currentMode, setCurrentMode] = useState<"login" | "register">(initialMode);

  const handleToggleMode = () => {
    setCurrentMode(currentMode === "login" ? "register" : "login");
  };

  return (
    <>
      <LoginModal
        isOpen={isOpen && currentMode === "login"}
        onOpenChange={onOpenChange}
        onRegisterClick={handleToggleMode}
      />
      <RegisterModal
        isOpen={isOpen && currentMode === "register"}
        onOpenChange={onOpenChange}
        onLoginClick={handleToggleMode}
      />
    </>
  );
};
