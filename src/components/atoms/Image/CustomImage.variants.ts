import { VariantProps, tv } from "tailwind-variants";

export type CustomImageVariants = VariantProps<typeof customImage>;

export const customImage = tv({
  base: "relative overflow-hidden",
  variants: {
    size: {
      fluid: "h-full w-full",
    },
  },
  defaultVariants: {
    size: "fluid",
  },
});
