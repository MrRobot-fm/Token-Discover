import { VariantProps, tv } from "tailwind-variants";

export type AvatarVariants = VariantProps<typeof avatar>;

export const avatar = tv(
  {
    base: "shrink-0 overflow-hidden rounded-full",
    variants: {
      size: {
        xs: "h-[2.4rem] w-[2.4rem]",
        sm: "h-[3.2rem] w-[3.2rem]",
        md: "h-[6rem] w-[6rem]",
        lg: "h-[12rem] w-[12rem]",
        xl: "base:h-[13rem] base:w-[13rem] md:h-[15rem] md:w-[15rem]",
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
