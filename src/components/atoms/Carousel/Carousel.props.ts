import type { EmblaCarouselType } from "embla-carousel-react";
import type { HTMLProps, ReactNode } from "react";
import type { ButtonProps } from "@/components/atoms/Button/Button.props";
import type { CarouselVariants } from "./carousel.variants";

export interface CarouselProps extends CarouselVariants {
  children: ReactNode;
}

export type CarouselButtonProps = ButtonProps;

export interface CarouseNavigationProps extends CarouselVariants {
  emblaApi: EmblaCarouselType | undefined;
}

export interface CarouselItemProps extends CarouselVariants {
  children: ReactNode;
  configStyles?: HTMLProps<HTMLDivElement>["className"];
}
