import { type VariantProps, tv } from "tailwind-variants";

export type TrendingCollectionContentVariants = VariantProps<
  typeof trendingCollectionContent
>;

export const trendingCollectionContent = tv({
  base: "flex w-full items-center justify-center overflow-hidden rounded-[2rem] transition duration-500 group-hover:scale-105",
  variants: {
    size: {
      sm: "aspect-[1/1] ",
      md: "aspect-[4/3]",
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
