import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="min-h-14 w-full text-base font-semibold text-center">
      <div className="bg-[rgba(250,252,254,1)] border-neutral-200 flex min-h-14 w-full items-center gap-[40px_100px] justify-between flex-wrap px-[30px] py-[7px] border-b">
        <div className="self-stretch flex min-w-60 items-center gap-2.5 text-black my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/d786ce494ecfc97d7d526c534aac2743eab40d2c968bfa0fedf56b60cecfc137?placeholderIfAbsent=true"
            alt="Logo"
            className="aspect-[1.43] object-contain w-[60px] self-stretch shrink-0 my-auto"
          />
          <Link
            to="/sell"
            className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-gray-700"
          >
            Vender fotos
          </Link>
          <Link
            to="/hire"
            className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-gray-700"
          >
            Contratar fotógrafo
          </Link>
        </div>

        <div className="self-stretch flex min-w-60 items-center gap-[15px] text-[#5762D5] whitespace-nowrap my-auto">
          <div className="self-stretch flex min-h-9 items-center gap-2 text-[#0E0E2C] justify-center my-auto px-[5px] py-1.5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/a3395c075c86a9e022e23b909420e31009e1fedf545f3c0008dca452c01352fe?placeholderIfAbsent=true"
              alt="Cart"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto">Carrinho</span>
          </div>

          <div className="bg-[rgba(241,243,244,1)] self-stretch flex w-px shrink-0 h-9 gap-2.5 my-auto" />

          <Link
            to="/register"
            className="self-stretch min-h-9 gap-2.5 my-auto px-[5px] py-[9px] hover:text-[#4751C4]"
          >
            Cadastrar
          </Link>

          <Link
            to="/login"
            className="self-stretch min-h-9 gap-2.5 my-auto px-5 py-[9px] rounded-md border-[rgba(87,98,213,1)] border-solid border-2 hover:bg-[rgba(87,98,213,0.1)]"
          >
            Entrar
          </Link>

          <Link
            to="/explore"
            className="self-stretch bg-[rgba(217,24,26,1)] min-h-9 gap-2.5 text-[#F7F7F9] my-auto px-5 py-[9px] rounded-md hover:bg-[rgba(195,22,24,1)]"
          >
            Explorar
          </Link>
        </div>
      </div>
    </nav>
  );
};
