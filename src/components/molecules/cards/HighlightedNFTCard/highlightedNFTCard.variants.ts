import { VariantProps, tv } from "tailwind-variants";

export type highlightedNftCardVariants = VariantProps<
  typeof highlightedNftCard
>;

export const highlightedNftCard = tv({
  slots: {
    linkWrapper: "group",
    cardWrapper: "h-fit overflow-hidden rounded-[2rem] bg-background-grey ",
    imageWrapper: "overflow-hidden ",
    footerWrapper: "flex flex-col justify-between gap-[1rem] p-[2rem]",
    authorWrapper: "flex items-center gap-[1.2rem]",
    detailsWrapper: "mt-[1rem] flex w-full justify-between",
  },
  variants: {
    variant: {
      hero: {
        linkWrapper: "base:w-full lg:w-fit",
        cardWrapper: "base:w-full lg:min-w-[48rem] lg:max-w-[51rem]",
        imageWrapper: "base:h-[20.6rem] md:h-[40.1rem]",
      },
      nft: {
        linkWrapper: "w-full",
        cardWrapper: "transition duration-500 group-hover:scale-105",
        imageWrapper: "base:aspect-[4/3]",
      },
    },
  },
  defaultVariants: {
    variant: "hero",
  },
});
