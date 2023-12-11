import { HydrationBoundary } from "@tanstack/react-query";
import React from "react";
import { prefetchNFTByTokenId } from "@/api/NFT/prefetch/prefetch-nft-by-token-id";
import { NTFDetailsSection } from "@/components/organism/details/NFTDetailsSection/NTFDetailsSection";

export default async function NFTDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [chain, contractAddress, tokenId] = params.slug;

  const { dehydrateState } = await prefetchNFTByTokenId({
    chain,
    contractAddress,
    tokenId,
  });

  return (
    <HydrationBoundary state={dehydrateState}>
      <NTFDetailsSection {...{ chain, contractAddress, tokenId }} />
    </HydrationBoundary>
  );
}
