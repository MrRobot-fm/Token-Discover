import { useCallback } from "react";
import type { CarouseNavigationProps } from "./Carousel.props";
import { CarouselButton } from "./CarouselButton";
import { carousel } from "./carousel.variants";

export const CarouselNavigation = (props: CarouseNavigationProps) => {
  const { emblaApi, variant } = props;

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const { carouselNavigationLeft, carouselNavigationRight } = carousel({
    variant,
  });
  return (
    <>
      <CarouselButton
        icon="arrowLeft"
        variant="carouselNavigation"
        buttonWrapperStyles={carouselNavigationLeft()}
        onClick={scrollPrev}
      />
      <CarouselButton
        icon="arrowRight"
        variant="carouselNavigation"
        buttonWrapperStyles={carouselNavigationRight()}
        onClick={scrollNext}
      />
    </>
  );
};
