
import React from "react";
import { EventCard } from "./EventCard";

const SAMPLE_EVENTS = Array(8).fill({
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
    <div className="w-full flex flex-col items-center mt-[29px] max-md:max-w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {SAMPLE_EVENTS.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};
