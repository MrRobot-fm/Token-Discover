import { VariantProps, tv } from "tailwind-variants";

export type highlightedNftCardVariants = VariantProps<
  typeof highlightedNftCard
>;

export const highlightedNftCard = tv({
  slots: {
    cardWrapper:
      "h-fit overflow-hidden rounded-[2rem] bg-background-grey base:w-full lg:max-w-[51rem]",
    imageWrapper: "overflow-hidden base:h-[20.6rem] md:h-[40.1rem]",
    footerWrapper: "flex flex-col justify-between gap-[1rem] p-[2rem]",
    authorWrapper: "flex items-center gap-[1.2rem]",
  },
});
