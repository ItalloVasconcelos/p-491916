
import React, { useState } from "react";
import { PhotographerLoginModal } from "./PhotographerLoginModal";
import { PhotographerRegisterModal } from "./PhotographerRegisterModal";

interface PhotographerAuthModalsProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialMode?: "login" | "register";
}

export const PhotographerAuthModals: React.FC<PhotographerAuthModalsProps> = ({
  isOpen,
  onOpenChange,
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);

  const handleSwitchToRegister = () => {
    setMode("register");
  };

  const handleSwitchToLogin = () => {
    setMode("login");
  };

  return (
    <>
      {mode === "login" ? (
        <PhotographerLoginModal
          isOpen={isOpen && mode === "login"}
          onOpenChange={onOpenChange}
          onRegisterClick={handleSwitchToRegister}
        />
      ) : (
        <PhotographerRegisterModal
          isOpen={isOpen && mode === "register"}
          onOpenChange={onOpenChange}
          onLoginClick={handleSwitchToLogin}
        />
      )}
    </>
  );
};
