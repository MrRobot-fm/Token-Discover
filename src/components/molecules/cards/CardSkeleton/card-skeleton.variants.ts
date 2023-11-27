import { VariantProps, tv } from "tailwind-variants";

export type CardSkeletonVariants = VariantProps<typeof cardSkeleton>;

export const cardSkeleton = tv({
  slots: {
    skeletonRoot:
      "w-full animate-pulse rounded-[2rem] bg-background-grey py-4 shadow-md ",
    skeletonHeader: "flex space-x-4 p-4 base:px-8 md:py-[3.5rem]",
    skeletonCircle:
      "flex-shrink-0 rounded-full bg-label-grey base:h-[8rem] base:w-[8rem] md:h-[9rem] md:w-[9rem]",
    skeletonHeaderBarWrapper: "flex-1 space-y-6 py-2",
    skeletonBody: "p-[2rem] base:space-y-8 md:space-y-12",
    skeletonBar:
      "w-full bg-label-grey base:h-[2rem] base:rounded-[1rem] md:h-[2.7rem] md:rounded-[1.5rem]",
  },
  variants: {
    variant: {
      topCollection: {
        skeletonRoot:
          "base:min-h-[30rem] base:min-w-full md:min-h-[57rem] md:min-w-[48rem] lg:min-h-[48.5rem] lg:min-w-[40rem] xl:min-h-[54rem] xl:min-w-[45rem]",
      },
      hero: {
        skeletonRoot:
          "base:min-h-[32.32rem] md:min-h-[52rem] lg:min-w-[48rem] xl:w-[48rem]",
      },
      nfts: {
        skeletonRoot:
          " base:min-h-[34.62rem] base:w-full md:min-h-[47.72rem] md:min-w-[48rem] lg:min-h-[41.7rem] lg:min-w-[40rem] xl:min-h-[45.47rem] xl:min-w-[45rem]",
      },
      topSales: {
        skeletonHeader: "md:py-[3rem]",
        skeletonCircle: "base:h-[7rem] base:w-[7rem] ",
        skeletonBar: "base:h-[2rem]",
        skeletonBody: "base:hidden md:flex md:flex-col",
      },
    },
  },
  defaultVariants: {
    variant: "hero",
  },
});
