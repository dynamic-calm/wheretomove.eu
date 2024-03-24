"use client";
import Autoplay from "embla-carousel-autoplay";
import { COUNTRIES } from "@/config";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function FlagCarousel() {
  return (
    <Carousel
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="mx-auto w-screen max-w-sm py-24 md:max-w-xl lg:max-w-6xl"
    >
      <CarouselContent className=" cursor-pointer">
        {[...COUNTRIES].map(([country, emoji]) => (
          <CarouselItem
            key={country}
            className="basis-1/6 text-4xl md:basis-1/5 md:text-6xl lg:basis-1/6 lg:text-7xl "
          >
            {emoji}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
