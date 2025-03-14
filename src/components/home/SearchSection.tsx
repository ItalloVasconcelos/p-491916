
import React from "react";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchSection = () => {
  return (
    <div className="container max-w-7xl mx-auto px-4 mt-[95px] max-md:mt-10">
      <div className="flex items-center gap-[30px] flex-wrap">
        <div className="flex flex-1 items-center gap-2">
          <div className="bg-[rgba(247,247,249,1)] flex flex-1 h-[46px] items-center rounded-md pl-4 pr-2">
            <input
              type="text"
              placeholder="Pesquisar e explorar eventos"
              className="bg-transparent outline-none border-none flex-1 text-[#8A8A8A] text-sm font-medium"
            />
            <Search className="h-5 w-5 text-gray-400 mr-1" />
            
            <Select>
              <SelectTrigger className="bg-white border-none shadow-none w-auto">
                <div className="flex items-center gap-2">
                  <span className="text-[#0E0E2C] font-semibold">Cidade</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fortaleza">Fortaleza</SelectItem>
                <SelectItem value="sao-paulo">São Paulo</SelectItem>
                <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                <SelectItem value="recife">Recife</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            className="h-[46px] bg-[rgba(217,24,26,1)] hover:bg-[rgba(195,22,24,1)] flex items-center gap-2 py-3"
          >
            <Search className="h-4 w-4" />
            <span>Pesquisar</span>
          </Button>
        </div>

        <div>
          <Select>
            <SelectTrigger className="bg-white border-none h-[46px]">
              <div className="flex items-center gap-2">
                <span className="text-[#0E0E2C] font-semibold">Ordenar por</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Mais recentes</SelectItem>
              <SelectItem value="upcoming">Próximos eventos</SelectItem>
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
