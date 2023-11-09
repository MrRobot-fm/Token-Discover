import { type VariantProps, tv } from "tailwind-variants";

export type TrendingCollectionContentVariants = VariantProps<
  typeof trendingCollectionContent
>;

export const trendingCollectionContent = tv({
  base: "flex w-full items-center justify-center overflow-hidden rounded-[2rem]",
  variants: {
    size: {
      sm: "base:h-[9.5rem] md:h-[10rem]",
      md: "base:h-[31.5rem]  md:h-[33rem]",
    },
    variant: {
      image: "",
      text: "flex items-center justify-center bg-callToAction",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "image",
  },
});
