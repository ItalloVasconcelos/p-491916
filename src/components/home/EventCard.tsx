import React from "react";

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
    <div className="relative min-w-60 min-h-[309px] grow shrink w-[276px] pt-[204px] pb-2.5 px-2.5 max-md:pt-[100px]">
      <img
        src={imageUrl}
        alt={title}
        className="aspect-[1] object-contain w-[309px] absolute z-0 max-w-full h-[309px] rounded-[15px] right-0 bottom-0"
      />
      <div className="z-0 flex w-full flex-col items-stretch">
        <div className="bg-[rgba(236,241,244,1)] flex items-center gap-1 text-[#0E0E2C] whitespace-nowrap pl-0.5 pr-1.5 py-0.5 rounded-[5px]">
          <div className="bg-[rgba(92,201,255,1)] self-stretch flex w-6 shrink-0 h-6 my-auto rounded-[5px]" />
          <div className="self-stretch my-auto">{photographerHandle}</div>
        </div>
        <div className="min-w-[214px] w-full text-white mt-[9px]">
          <h3 className="min-w-[214px] text-base font-bold">{title}</h3>
          <p>{`${location} - ${date}`}</p>
          <div className="flex w-full items-center gap-[3px] justify-center">
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
    </div>
  );
};
