import { VariantProps, tv } from "tailwind-variants";

export type ButtonVariants = VariantProps<typeof button>;

export const button = tv({
  slots: {
    buttonWrapper:
      "flex w-full items-center justify-center gap-[1.2rem] px-[5rem] shadow-alpha3",
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
          "h-fit w-fit border-none bg-transparent bg-clip-text p-0 text-inherit shadow-none transition duration-500 hover:text-white data-[selected=true]:scale-110 data-[selected=true]:bg-purpleRed data-[selected=true]:text-transparent",
        buttonLabel: "text-current",
      },
      carouselNavigation: {
        buttonWrapper:
          "w-[6rem] gap-0 rounded-full bg-label-grey p-0 text-white base:hidden lg:flex",
      },
      segmentControl: {
        buttonWrapper:
          "rounded-[2rem] p-[1rem] shadow-none transition-all duration-300 data-[selected=true]:bg-callToAction data-[selected=true]:shadow-alpha3",
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
      fluid: {
        buttonWrapper: "h-fit base:w-[11rem]   md:w-[16.8rem]",
        buttonLabel:
          "base:span md:paragraph capitalize base:font-bold md:font-semibold",
      },
      xl: {
        buttonLabel: "heading4 capitalize",
      },
      xxl: "",
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
