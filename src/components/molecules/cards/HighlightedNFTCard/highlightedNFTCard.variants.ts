import { VariantProps, tv } from "tailwind-variants";

export type highlightedNftCardVariants = VariantProps<
  typeof highlightedNftCard
>;

export const highlightedNftCard = tv({
  slots: {
    linkWrapper: "group",
    cardWrapper:
      "h-fit overflow-hidden rounded-[2rem] bg-background-grey shadow-alpha3",
    imageWrapper: "overflow-hidden",
    footerWrapper: "flex w-full flex-col justify-between gap-[1rem] p-[2rem]",
    authorWrapper: "flex items-center gap-[1.2rem]",
    detailsWrapper: "mt-[1rem] flex w-full justify-between",
  },
  variants: {
    variant: {
      hero: {
        linkWrapper: "base:w-full lg:w-fit",
        cardWrapper: "base:w-full lg:min-w-[45rem] lg:max-w-[48rem]",
        imageWrapper: "base:h-[23.6rem] md:h-[44rem] lg:h-[38rem]",
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
