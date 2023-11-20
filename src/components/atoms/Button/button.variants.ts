import { VariantProps, tv } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof button>;

export const button = tv({
  slots: {
    buttonWrapper: "flex items-center justify-center gap-[1.2rem] px-[5rem]",
    buttonLabel: "text-white",
  },
  variants: {
    variant: {
      filled: {
        buttonWrapper:
          "group border-[2px] border-callToAction bg-callToAction text-white transition duration-700  hover:bg-transparent hover:text-callToAction",
        buttonLabel: "transition duration-700 group-hover:text-callToAction",
      },
      outline: {
        buttonWrapper:
          "group border-[2px] border-callToAction bg-transparent text-callToAction transition duration-700 hover:bg-callToAction hover:text-white",
        buttonLabel:
          "text-callToAction transition duration-700 group-hover:text-white",
      },
      link: {
        buttonWrapper:
          "h-fit border-none bg-transparent p-0 text-inherit transition duration-500 hover:text-white",
        buttonLabel: " text-current",
      },
      carouselNavigation: {
        buttonWrapper:
          "w-[6rem] gap-0 rounded-full bg-label-grey p-0 text-white base:hidden lg:flex",
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
    {
      slots: ["buttonWrapper"],
      size: ["sm", "md", "lg"],
      variant: "link",
      class: "h-fit",
    },
  ],
  defaultVariants: {
    size: "md",
    variant: "filled",
  },
});
