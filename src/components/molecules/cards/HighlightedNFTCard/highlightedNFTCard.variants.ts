import { VariantProps, tv } from "tailwind-variants";

export type highlightedNftCardVariants = VariantProps<
  typeof highlightedNftCard
>;

export const highlightedNftCard = tv({
  slots: {
    cardWrapper:
      "h-fit overflow-hidden rounded-[2rem] bg-background-grey base:w-[31.5rem] md:w-[33.3rem] lg:w-[51rem]",
    imageWrapper:
      "overflow-hidden base:h-[20.6rem] md:h-[22.1rem] lg:h-[40.1rem]",
    footerWrapper: "flex flex-col justify-between gap-[1rem] p-[2rem]",
    authorWrapper: "flex items-center gap-[1.2rem]",
  },
});
