
import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";

export const SearchSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 mt-[95px] max-md:mt-10">
      <div className="flex items-center gap-5 flex-wrap justify-center max-md:max-w-full">
        <div className="flex items-center gap-2 flex-1 min-w-60 max-md:max-w-full">
          <div className="bg-[rgba(247,247,249,1)] flex flex-1 items-center rounded-md overflow-hidden">
            <Input
              type="text"
              placeholder="Pesquisar e explorar eventos"
              className="bg-transparent border-none text-center text-sm font-medium leading-[1.4] flex-1 pl-4"
            />
            <div className="flex items-center">
              <div className="p-1.5">
                <Search className="h-6 w-6 text-gray-500" />
              </div>
              <Select>
                <SelectTrigger className="bg-white h-9 min-w-24 border-none">
                  <SelectValue placeholder="Cidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fortaleza">Fortaleza</SelectItem>
                  <SelectItem value="sao-paulo">São Paulo</SelectItem>
                  <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                  <SelectItem value="brasilia">Brasília</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button className="bg-[rgba(217,24,26,1)] h-[46px] flex items-center gap-2 hover:bg-[rgba(195,22,24,1)]">
            <Search className="h-[18px] w-[18px]" />
            <span>Pesquisar</span>
          </Button>
        </div>

        <div className="flex items-center">
          <Select>
            <SelectTrigger className="bg-white min-h-9 gap-2 font-semibold">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="popular">Mais populares</SelectItem>
              <SelectItem value="price-asc">Preço: menor para maior</SelectItem>
              <SelectItem value="price-desc">Preço: maior para menor</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
