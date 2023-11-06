import { VariantProps, tv } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof button>;

export const button = tv({
  slots: {
    buttonWrapper: "flex items-center justify-center gap-[1.2rem] px-[5rem]",
    buttonLabel: "text-white",
  },
  variants: {
    variant: {
      primary: {
        buttonWrapper: "bg-callToAction text-white",
      },
      secondary: {
        buttonWrapper:
          "border-[2px] border-callToAction bg-transparent text-callToAction",
        buttonLabel: " text-callToAction",
      },
    },
    size: {
      sm: {
        buttonWrapper: "paragraph h-[4.6rem] rounded-[2rem]",
        buttonLabel: "paragraph capitalize",
      },
      md: {
        buttonWrapper: "h-[6rem]",
        buttonLabel: "paragraph capitalize",
      },
      lg: {
        buttonWrapper: "h-[7.2rem]",
        buttonLabel: "heading5 capitalize",
      },
    },
  },
  compoundSlots: [
    {
      slots: ["buttonWrapper"],
      size: ["md", "lg"],
      class: "rounded-[3rem]",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "primary",
  },
});
