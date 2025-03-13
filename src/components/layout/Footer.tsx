import React from "react";
import { Link } from "react-router-dom";

const footerLinks = {
  "Quem somos": ["Sobre nós", "Manifesto", "Contato", "Termos de uso"],
  Soluções: ["Encontrar fotos", "Para fotógrafos", "Explorar"],
  Ajuda: [
    "Como o Olha a Foto funciona",
    "Central de ajuda",
    "Perguntas frequentes",
  ],
};

export const Footer = () => {
  return (
    <footer className="self-center w-full max-w-[1266px] text-sm text-black font-medium leading-[1.4] mt-[39px] max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="border min-h-0 w-full border-[rgba(236,241,244,1)] border-solid max-md:max-w-full" />
        <div className="self-center flex w-[562px] max-w-full gap-[16px_57px] flex-wrap mt-[29px]">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-2">
              <h3 className="text-base font-bold tracking-[-0.25px]">
                {category}
              </h3>
              {links.map((link) => (
                <Link key={link} to="#" className="text-sm hover:text-gray-700">
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
