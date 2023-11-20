"use client";

import useEmblaCarousel from "embla-carousel-react";
import type { CarouselProps } from "./Carousel.props";
import { CarouselNavigation } from "./CarouselNavigation";
import { carousel } from "./carousel.variants";

export const Carousel = (props: CarouselProps) => {
  const { children, variant } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: true,
  });

  const { carouselContainer, carouselRoot, carouselViewport } = carousel({
    variant,
  });

  return (
    <div className={carouselRoot()}>
      <div className={carouselViewport()} ref={emblaRef}>
        <div className={carouselContainer()}>{children}</div>
      </div>
      <CarouselNavigation {...{ emblaApi }} />
    </div>
  );
};
