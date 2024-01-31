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
    <div className="w-80 md:w-96">
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {[...COUNTRIES].map(([country, emoji]) => (
            <CarouselItem key={country} className="basis-1/5 text-5xl">
              {emoji}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
