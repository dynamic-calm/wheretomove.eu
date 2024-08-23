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
      className="mx-auto w-80 pb-10"
    >
      <CarouselContent className="cursor-pointer">
        {[...COUNTRIES].map(([country, emoji]) => (
          <CarouselItem key={country} className="basis-2/12 text-4xl">
            {emoji}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
