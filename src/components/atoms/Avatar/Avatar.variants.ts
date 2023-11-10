import { VariantProps, tv } from "tailwind-variants";

export type AvatarVariants = VariantProps<typeof avatar>;

export const avatar = tv(
  {
    base: "overflow-hidden rounded-full",
    variants: {
      size: {
        sm: "h-[2.4rem] w-[2.4rem]",
        md: "h-[6rem] w-[6rem]",
        lg: "h-[12rem] w-[12rem]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
  {
    responsiveVariants: true,
  }
);
