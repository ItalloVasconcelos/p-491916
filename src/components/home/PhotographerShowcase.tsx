
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const photographers = Array(4).fill({
  image:
    "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/3cbcfb64594f255c99cca26be28fa123af12c510ddba64001c24d1146ba634b7?placeholderIfAbsent=true",
  handle: "@nunes.foto",
});

export const PhotographerShowcase = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 mt-[39px]">
      <div className="flex flex-col text-black items-start mb-8">
        <h2 className="text-[40px] font-bold tracking-[-0.8px]">
          Encontrar um fotógrafo
        </h2>
        <p className="text-2xl font-medium mt-[15px]">
          Escolha um de nossos especialistas para registrar seu evento!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {photographers.map((photographer, index) => (
          <Card key={index} className="relative overflow-hidden rounded-[15px]">
            <CardContent className="p-0">
              <div className="relative aspect-[0.9] w-full">
                <img
                  src={photographer.image}
                  alt={photographer.handle}
                  className="absolute h-full w-full object-cover inset-0"
                />
                <div className="absolute top-2 left-2 bg-white text-sm text-black font-medium leading-[1.4] px-1.5 py-[5px] rounded-lg">
                  Em destaque
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-[rgba(236,241,244,1)] flex items-center justify-between px-2.5 py-1.5 rounded-b-[15px]">
                  <div className="flex items-center gap-[5px] text-sm text-black font-medium whitespace-nowrap leading-[1.4]">
                    <div className="bg-[rgba(217,217,217,1)] w-[25px] h-[25px] rounded-[5px]" />
                    <div>{photographer.handle}</div>
                  </div>
                  <button className="text-base text-[#5762D5] font-semibold px-[5px] py-[9px] hover:text-[#4751C4]">
                    Ver perfil
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
