import { VariantProps, tv } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof button>;

export const button = tv({
  slots: {
    buttonWrapper: "flex items-center justify-center gap-[1.2rem] px-[5rem]",
    buttonLabel: "text-white",
    buttonIcon: "h-[2.1rem] w-[2.1rem] text-callToAction",
  },
  variants: {
    variant: {
      primary: {
        buttonWrapper: "bg-callToAction text-white",
        buttonIcon: "text-white",
      },
      secondary: {
        buttonWrapper: "border-[2px] border-callToAction bg-transparent",
        buttonIcon: "text-callToAction",
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
        buttonIcon: "mb-1",
      },
      lg: {
        buttonWrapper: "h-[7.2rem]",
        buttonLabel: "heading5 capitalize",
        buttonIcon: "h-[2.5rem] w-[2.5rem]",
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
