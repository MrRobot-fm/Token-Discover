import { HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { prefetchNFTByTokenId } from "@/api/NFT/prefetch/prefetch-nft-by-token-id";
import { NTFDetailsSection } from "@/components/organism/details/NFTDetailsSection/NTFDetailsSection";
import { getNftDetailsParams } from "./nft-details-page.utils";

export default async function NFTDetailsPage({
  searchParams,
}: {
  searchParams: {
    chain: string;
    contractAddress: string;
    tokenId: string;
    collectionId: string;
  };
}) {
  const { chain, contractAddress, tokenId, collectionId } = searchParams || {};

  const pageParams = await getNftDetailsParams({
    collectionId: collectionId,
  });

  const { dehydrateState } = await prefetchNFTByTokenId({
    chain,
    contractAddress,
    tokenId,
  });

  const emptySearchParam = !chain || !contractAddress || !tokenId;

  const wrongSearchParam =
    !pageParams?.includes(contractAddress) ||
    !pageParams?.includes(chain) ||
    !pageParams?.some((el) => el === tokenId || el === null);

  if (emptySearchParam || wrongSearchParam) {
    return notFound();
  }

  return (
    <HydrationBoundary state={dehydrateState}>
      <NTFDetailsSection {...{ chain, contractAddress, tokenId }} />
    </HydrationBoundary>
  );
}
