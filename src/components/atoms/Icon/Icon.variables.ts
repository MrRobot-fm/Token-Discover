import { VariantProps, tv } from "tailwind-variants";

export type IconVariants = VariantProps<typeof icon>;

export const icon = tv({
  base: "text-inherit",
  variants: {
    size: {
      sm: "",
      md: "h-[2.1rem] w-[2.1rem]",
      lg: "h-[2.5rem] w-[2.5rem]",
      xl: "h-[4rem] w-[4rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
