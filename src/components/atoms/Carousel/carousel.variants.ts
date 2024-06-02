import { VariantProps, tv } from "tailwind-variants";

export type CarouselVariants = VariantProps<typeof carousel>;

export const carousel = tv({
  slots: {
    carouselRoot: "w-full",
    carouselViewport: "relative",
    carouselContainer: "flex cursor-pointer touch-pan-y",
    carouselSlide: "relative",
    carouselNavigationLeft: "",
    carouselNavigationRight: "",
  },
  variants: {
    variant: {
      default: {
        carouselRoot: "group/carousel relative col-span-full",
        carouselViewport: "",
        carouselContainer:
          "flex-row md:gap-[4rem] lg:gap-[3rem] xl:gap-[2.5rem]",
        carouselSlide:
          "base:w-full md:min-w-[48rem] lg:min-w-[40rem] xl:min-w-[45rem]",
        carouselNavigationLeft:
          "absolute left-[-2.5%] top-[40%] opacity-0 transition duration-500 group-hover/carousel:opacity-80",
        carouselNavigationRight:
          "absolute right-[-2.5%] top-[40%] opacity-0 transition duration-500 group-hover/carousel:opacity-80",
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
