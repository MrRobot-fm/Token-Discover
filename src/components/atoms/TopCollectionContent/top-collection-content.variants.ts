import { type VariantProps, tv } from "tailwind-variants";

export type TopCollectionContentVariants = VariantProps<
  typeof topCollectionContent
>;

export const topCollectionContent = tv({
  base: "flex w-full items-center justify-center overflow-hidden rounded-[2rem] shadow-alpha3",
  variants: {
    size: {
      sm: "aspect-[1/1]",
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
