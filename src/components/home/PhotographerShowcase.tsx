import React from "react";

const photographers = Array(4).fill({
  image:
    "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/3cbcfb64594f255c99cca26be28fa123af12c510ddba64001c24d1146ba634b7?placeholderIfAbsent=true",
  handle: "@nunes.foto",
});

export const PhotographerShowcase = () => {
  return (
    <section className="w-full text-center mt-[39px] max-md:max-w-full">
      <div className="flex w-[902px] max-w-full flex-col text-black justify-center">
        <h2 className="text-[40px] font-bold tracking-[-0.8px] max-md:max-w-full">
          Encontrar um fotógrafo
        </h2>
        <p className="text-2xl font-medium mt-[15px] max-md:max-w-full">
          Escolha um de nossos especialistas para registrar seu evento!
        </p>
      </div>

      <div className="flex w-full items-center gap-2.5 flex-wrap mt-[38px] max-md:max-w-full">
        {photographers.map((photographer, index) => (
          <div
            key={index}
            className="self-stretch min-w-60 grow shrink w-[247px] my-auto"
          >
            <div className="flex flex-col relative aspect-[0.896] w-full items-stretch pt-[7px] rounded-[15px]">
              <img
                src={photographer.image}
                alt={photographer.handle}
                className="absolute h-full w-full object-cover inset-0"
              />
              <div className="relative w-[108px] bg-white gap-2.5 text-sm text-black font-medium leading-[1.4] px-1.5 py-[5px] rounded-lg">
                Em destaque
              </div>
              <div className="relative bg-[rgba(236,241,244,1)] flex min-h-12 w-full items-center gap-[40px_87px] justify-between mt-[254px] px-2.5 py-1.5 rounded-[0px_0px_15px_15px] max-md:mt-10">
                <div className="self-stretch flex items-center gap-[5px] text-sm text-black font-medium whitespace-nowrap leading-[1.4] my-auto">
                  <div className="bg-[rgba(217,217,217,1)] self-stretch flex w-[25px] shrink-0 h-[25px] my-auto rounded-[5px]" />
                  <div className="self-stretch my-auto">
                    {photographer.handle}
                  </div>
                </div>
                <button className="self-stretch min-h-9 gap-2.5 text-base text-[#5762D5] font-semibold my-auto px-[5px] py-[9px] hover:text-[#4751C4]">
                  Ver perfil
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
