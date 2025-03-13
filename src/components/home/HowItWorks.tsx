
import React from "react";

const steps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/5e5671683e56fa5c3c31a70ce9107e0900bf80c242b67556a3b821c73552e43f?placeholderIfAbsent=true",
    title: "Selecione o evento",
    description: "Escolha um evento que você tenha participado",
    number: "1",
    iconBg: "bg-[rgba(213,215,244,1)]",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/dda8802e7d5093f47f3057fff7e281e50747bf03c0d7c41d4532e20ce7ef901e?placeholderIfAbsent=true",
    title: "Tire uma selfie ou enviei uma foto sua",
    description:
      "Utilize nosso reconhecimento facial para encontrar suas fotos",
    number: "2",
    iconBg: "bg-[rgba(213,215,244,1)]",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/3b57548d94be6222d9bca6009f17be7629f94d02ed48a4f7f41c47ffd3c578aa?placeholderIfAbsent=true",
    title: "Adicione as fotos ao carrinho",
    description:
      "Selecione e adicione ao carrinho suas fotos favoritas para concluir a compra",
    number: "3",
    iconBg: "bg-[rgba(213,215,244,1)]",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/04548de7f3385ebf1bae59915cb408de404c4dddeaacdcdf8e43ac0508795988?placeholderIfAbsent=true",
    title: "Baixe suas fotos",
    description: "Receba as fotos em alta qualidade",
    number: "4",
    iconBg: "bg-[rgba(213,215,244,1)]",
  },
];

export const HowItWorks = () => {
  return (
    <section className="container max-w-7xl mx-auto mt-12 px-4 max-md:mt-10">
      <h2 className="text-black text-[40px] font-bold tracking-[-0.8px] text-left mb-7">
        Como funciona
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-[rgba(236,241,244,1)] flex flex-col items-stretch justify-between h-[414px] px-3.5 py-[30px] rounded-2xl"
          >
            <div
              className={`${step.iconBg} self-center flex items-center gap-[11px] w-[82px] h-[82px] p-[11px] rounded-[14px]`}
            >
              <div className="self-stretch flex w-[60px] items-center gap-[11px] my-auto">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="aspect-[1] object-contain w-[60px] self-stretch my-auto"
                />
              </div>
            </div>

            <div className="flex w-full flex-col text-center mt-[58px] max-md:mt-10">
              <h3 className="text-black text-2xl font-bold tracking-[-0.48px]">
                {step.title}
              </h3>
              <p className="text-black text-[17px] font-medium leading-6 tracking-[-0.27px] mt-[5px]">
                {step.description}
              </p>
            </div>

            <div className="text-[#E56365] text-center text-[64px] font-bold tracking-[-1.28px] mt-[58px] max-md:text-[40px] max-md:mt-10">
              {step.number}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
