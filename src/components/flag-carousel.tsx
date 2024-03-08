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
      className="mx-auto w-screen max-w-6xl py-10"
    >
      <CarouselContent>
        {[...COUNTRIES].map(([country, emoji]) => (
          <CarouselItem key={country} className="basis-1/6 text-7xl">
            {emoji}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
