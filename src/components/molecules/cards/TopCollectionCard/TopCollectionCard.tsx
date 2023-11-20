"use client";

import { useGetNftCollectionById } from "@/api/NFT/hooks/use-get-nft-by-collection-id";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
import type { TopCollectionCardProps } from "./TopCollectionCard.props";
import { TopCollectionCardContent } from "./TopCollectionCardContent";

export const TopCollectionCard = (props: TopCollectionCardProps) => {
  const { collectionId } = props || {};

  const { data: nftByCollection, isLoading } = useGetNftCollectionById({
    collectionId,
  });

  return (
    <div className="flex w-full flex-col base:gap-[1.5rem] md:gap-[2rem] lg:gap-[1.5rem]">
      {isLoading ? (
        <CardSkeleton variant="section" />
      ) : (
        <TopCollectionCardContent {...{ nftByCollection }} />
      )}
    </div>
  );
};
