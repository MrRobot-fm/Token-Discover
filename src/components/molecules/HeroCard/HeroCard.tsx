"use client";

import { useGetNftByTokenId } from "@/api/NFT/hooks/use-get-nft-by-token-id";
import { Skeleton } from "@/components/molecules/Skeleton/Skeleton";
import { HighlightedNFTCard } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard";

export const HeroCard = () => {
  const { data: nftData, isLoading } = useGetNftByTokenId({
    chain: "ethereum",
    contractAddress: "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D",
    tokenId: "4160",
  });

  return isLoading ? (
    <Skeleton />
  ) : (
    <HighlightedNFTCard
      nftName={`#${nftData?.token_id}` || ""}
      collectionName={nftData?.collection?.name || ""}
      cardImage={{
        src: nftData?.image_url || "",
        alt: nftData?.token_id || "",
        priority: true,
      }}
      avatarImage={{
        src: nftData?.collection?.image_url || "",
        alt: nftData?.collection?.name || "",
      }}
    />
  );
};
