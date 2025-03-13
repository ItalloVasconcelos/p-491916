
import React from "react";

export const ContactCTA = () => {
  return (
    <section className="container max-w-7xl mx-auto px-4 mt-[39px]">
      <div className="bg-[rgba(236,241,244,1)] rounded-[15px] overflow-hidden">
        <div className="flex gap-5 items-center max-md:flex-col">
          <div className="w-full lg:w-[57%] p-8">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-black text-[40px] font-bold tracking-[-0.8px]">
                Precisa de um fotógrafo?
              </h2>
              <p className="text-black text-2xl font-medium mt-[15px]">
                Você necessita de um fotógrafo para melhorar as vendas, quer
                registrar um momento especial ou quer nos contratar para cobrir
                seu evento? Na Olha a Foto você encontra um serviço de extrema
                qualidade para registrar cada emoção
              </p>
              <button className="bg-[rgba(217,24,26,1)] min-h-[46px] gap-2 text-base text-[#F7F7F9] font-semibold text-center mt-[23px] px-6 py-3.5 rounded-lg hover:bg-[rgba(195,22,24,1)]">
                Entrar em contato
              </button>
            </div>
          </div>

          <div className="w-full lg:w-[43%] p-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/a2ea58c54ab672b2a861f8d2ee506a4e4eb1d2741d7d4fa3d70b26a05ddd2fed?placeholderIfAbsent=true"
              alt="Contact"
              className="aspect-[1.42] object-contain w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
