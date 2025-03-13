import React from "react";
import { EventCard } from "./EventCard";

const SAMPLE_EVENTS = Array(12).fill({
  photographerHandle: "@vini.fotografia",
  title: "6° NIGHT BIKE CRASA MOTOS",
  location: "Fortaleza CE",
  date: "18/02/2025",
  venue: "Crasa Motos Yamaha Matriz",
  imageUrl:
    "https://cdn.builder.io/api/v1/image/assets/059fbcc2d8a7476eb4c7b1b08bffc061/055db543e086a0fe64b4d3e79c113053d74c2cb2ca5be3b81ae5117629695966?placeholderIfAbsent=true",
});

export const EventGrid = () => {
  return (
    <div className="flex h-[947px] w-full gap-2.5 text-sm font-medium leading-[1.4] justify-center flex-wrap mt-[29px] max-md:max-w-full">
      {SAMPLE_EVENTS.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
      <div className="bg-white flex min-h-[39px] gap-2.5 py-2.5 rounded-lg" />
    </div>
  );
};
