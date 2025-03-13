import React from "react";

export const ContactCTA = () => {
  return (
    <section className="bg-[rgba(236,241,244,1)] self-center w-[1266px] max-w-full mt-[39px] px-[38px] py-3.5 rounded-[15px] max-md:px-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[57%] max-md:w-full max-md:ml-0">
          <div className="flex w-full flex-col self-stretch items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex w-full flex-col items-stretch text-black justify-center max-md:max-w-full">
              <h2 className="text-center text-[40px] font-bold tracking-[-0.8px] max-md:max-w-full">
                Precisa de um fotógrafo?
              </h2>
              <p className="text-2xl font-medium mt-[15px] max-md:max-w-full">
                Você necessita de um fotógrafo para melhorar as vendas, quer
                registrar um momento especial ou quer nos contratar para cobrir
                seu evento? Na Olha a Foto você encontra um serviço de extrema
                qualidade para registrar cada emoção
              </p>
            </div>
            <button className="bg-[rgba(217,24,26,1)] min-h-[46px] gap-2 text-base text-[#F7F7F9] font-semibold text-center mt-[23px] px-2.5 py-3.5 rounded-lg hover:bg-[rgba(195,22,24,1)]">
              Entrar em contato
            </button>
          </div>
        </div>

        <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/a2ea58c54ab672b2a861f8d2ee506a4e4eb1d2741d7d4fa3d70b26a05ddd2fed?placeholderIfAbsent=true"
            alt="Contact"
            className="aspect-[1.42] object-contain w-full grow rounded-3xl max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};
