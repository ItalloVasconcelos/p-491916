import React from "react";

export const SearchSection = () => {
  return (
    <div className="w-full mt-[95px] max-md:max-w-full max-md:mt-10">
      <div className="flex min-h-[46px] w-full items-stretch gap-[30px] flex-wrap max-md:max-w-full">
        <div className="flex min-w-60 items-stretch gap-[5px] flex-wrap h-full flex-1 shrink basis-[0%] max-md:max-w-full">
          <div className="bg-[rgba(247,247,249,1)] flex min-w-60 min-h-[46px] items-center gap-[40px_100px] justify-between flex-wrap flex-1 shrink basis-[0%] my-auto pl-2.5 pr-[5px] py-[5px] rounded-md max-md:max-w-full">
            <input
              type="text"
              placeholder="Pesquisar e explorar eventos"
              className="text-[#8A8A8A] text-center text-sm font-medium leading-[1.4] self-stretch my-auto bg-transparent outline-none flex-1"
            />
            <div className="self-stretch flex items-center gap-2.5 justify-center my-auto">
              <div className="self-stretch flex items-center gap-2.5 w-9 my-auto p-1.5">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/e05fefcba09b4f9fb5d75a5b3729d268227b13e81169dc1ad013db2bdff30f45?placeholderIfAbsent=true"
                  alt="Search"
                  className="aspect-[1] object-contain w-6 self-stretch my-auto"
                />
              </div>
              <button className="bg-white self-stretch flex min-h-9 items-center gap-2 text-base text-[#0E0E2C] font-semibold whitespace-nowrap text-center justify-center my-auto px-2.5 py-1.5 rounded-md">
                <span className="self-stretch my-auto">Cidade</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/9f8f7daef9ece8bd72809697a5802c5fe2f040eb2638cd851e6e48f5775416ea?placeholderIfAbsent=true"
                  alt="Dropdown"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
                />
              </button>
            </div>
          </div>
          <button className="bg-[rgba(217,24,26,1)] flex items-center gap-2 text-base text-[#F7F7F9] font-semibold whitespace-nowrap text-center justify-center h-full px-2.5 py-[3px] rounded-lg hover:bg-[rgba(195,22,24,1)]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/650a6479b7012af318e75d470923a67cb317ec1b474ae98b8cddd9688e9fc082?placeholderIfAbsent=true"
              alt="Search"
              className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto">Pesquisar</span>
          </button>
        </div>

        <div className="flex items-center gap-2.5 text-base text-[#0E0E2C] font-semibold text-center justify-center my-auto">
          <button className="bg-white self-stretch flex min-h-9 items-center gap-2 justify-center my-auto px-2.5 py-1.5 rounded-md">
            <span className="self-stretch my-auto">Ordenar por</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/9f8f7daef9ece8bd72809697a5802c5fe2f040eb2638cd851e6e48f5775416ea?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
