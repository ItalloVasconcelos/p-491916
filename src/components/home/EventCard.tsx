
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  photographerHandle: string;
  title: string;
  location: string;
  date: string;
  venue: string;
  imageUrl: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  photographerHandle,
  title,
  location,
  date,
  venue,
  imageUrl,
}) => {
  return (
    <Card className="relative overflow-hidden min-w-60 min-h-[309px] w-[290px] rounded-[15px]">
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <CardContent className="relative flex flex-col h-full pt-[7px] pb-2.5 px-2.5 z-10">
        <div className="mt-auto">
          <div className="bg-[rgba(236,241,244,1)] flex items-center gap-1 text-[#0E0E2C] whitespace-nowrap pl-0.5 pr-1.5 py-0.5 rounded-[5px] w-fit">
            <div className="bg-[rgba(92,201,255,1)] self-stretch flex w-6 shrink-0 h-6 my-auto rounded-[5px]" />
            <div className="self-stretch my-auto">{photographerHandle}</div>
          </div>
          <div className="min-w-[214px] w-full text-white mt-[9px]">
            <h3 className="text-base font-bold">{title}</h3>
            <p>{`${location} - ${date}`}</p>
            <div className="flex w-full items-center gap-[3px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/d060e3f87de0fc78eea205abf40a27c64cfba436430de4d0bd9c9540744186ed?placeholderIfAbsent=true"
                alt="Location"
                className="aspect-[1] object-contain w-[18px] self-stretch shrink-0 my-auto"
              />
              <div className="self-stretch flex-1 shrink basis-[0%] my-auto">
                {venue}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
