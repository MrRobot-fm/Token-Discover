"use client";

import { useGetNftCollectionById } from "@/api/NFT/hooks/use-get-nft-by-collection-id";
import { CardSkeleton } from "../CardSkeleton/CardSkeleton";
import type { TopCollectionCardProps } from "./TopCollectionCard.props";
import { TopCollectionCardContent } from "./TopCollectionCardContent";
import { styles } from "./top-collection-card.styles";

export const TopCollectionCard = (props: TopCollectionCardProps) => {
  const { collectionId } = props || {};

  const { data: nftByCollection, isLoading } = useGetNftCollectionById({
    collectionId,
  });

  return (
    <div className={styles.cardWrapper}>
      {isLoading ? (
        <CardSkeleton variant="section" />
      ) : (
        <TopCollectionCardContent {...{ nftByCollection }} />
      )}
    </div>
  );
};
