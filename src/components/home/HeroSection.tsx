import React from "react";

export const HeroSection = () => {
  return (
    <section className="flex mt-[116px] max-md:mt-10">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/b1371686ce256bc15a6511c36a958ff3b664c145acf008a4f2d0211cf7c16106?placeholderIfAbsent=true"
        alt="Decorative"
        className="aspect-[0.32] object-contain w-[189px] shrink-0 max-w-full rounded-[0px_0px_0px_0px]"
      />

      <div className="flex mr-[-114px] flex-col items-stretch mt-[131px] max-md:max-w-full max-md:mt-10">
        <div className="self-center flex w-[827px] max-w-full flex-col items-stretch">
          <div className="self-center flex flex-col items-center text-center max-md:max-w-full">
            <h1 className="text-[rgba(63,63,85,1)] text-[80px] font-bold tracking-[-1.5px] max-md:max-w-full max-md:text-[40px]">
              Capture a emoção,
              <br />
              <span className="text-[rgba(229,99,101,1)]">
                reviva suas memórias
              </span>
            </h1>
            <p className="text-black text-3xl font-medium mt-5 max-md:max-w-full">
              Encontre, escolha e eternize cada lembrança.
            </p>
          </div>

          <div className="bg-[rgba(236,241,244,1)] flex w-full items-center gap-4 text-black justify-center flex-wrap mt-10 px-3.5 py-[15px] rounded-[19px] max-md:max-w-full">
            <div className="bg-[rgba(250,252,254,1)] self-stretch flex flex-col items-center grow shrink w-[190px] my-auto p-[19px] rounded-[9px]">
              <div className="text-2xl font-bold tracking-[-0.48px]">
                +345 Eventos
              </div>
              <div className="text-right text-sm font-medium leading-[1.4]">
                Registrados e eternizados
              </div>
            </div>

            <div className="bg-[rgba(250,252,254,1)] self-stretch flex min-w-60 flex-col items-center my-auto p-[19px] rounded-[9px]">
              <div className="text-2xl font-bold tracking-[-0.48px]">
                +56 Fotógrafos
              </div>
              <div className="text-right text-sm font-medium leading-[1.4]">
                Especializados em capturar emoções
              </div>
            </div>

            <div className="bg-[rgba(250,252,254,1)] self-stretch flex flex-col items-center justify-center grow shrink w-[190px] my-auto pl-1.5 pr-[7px] py-[19px] rounded-[9px]">
              <div className="text-2xl font-bold tracking-[-0.48px]">
                +18.000 Memórias
              </div>
              <div className="text-right text-sm font-medium leading-[1.4]">
                Preservadas pelas nossas lentes
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/18d1899bac241bd8dc7eb48e59942919149d0dc68f14cfb01611142a78494416?placeholderIfAbsent=true"
        alt="Decorative"
        className="aspect-[0.34] object-contain w-[201px] shrink-0 max-w-full rounded-[22px]"
      />
    </section>
  );
};
