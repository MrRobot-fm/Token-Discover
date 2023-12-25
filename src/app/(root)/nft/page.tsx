import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import v from "voca";
import { prefetchNFTByTokenId } from "@/api/NFT/prefetch/prefetch-nft-by-token-id";
import { NTFDetailsSection } from "@/components/organism/details/NFTDetailsSection/NTFDetailsSection";
import { getNftDetailsParams } from "./nft-details-page.utils";

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: { nftName: string; tokenId: string; collectionId: string };
}): Promise<Metadata> => {
  const { nftName, tokenId, collectionId } = searchParams || {};

  const pageParams = await getNftDetailsParams({
    collectionId: collectionId,
  });

  const nameParams = pageParams?.some((el) => el === nftName);
  const tokenIdParams = pageParams?.some((el) => el === tokenId);

  const parsedNftName = v.titleCase(nftName).replaceAll("-", " ");

  if (nameParams) {
    return {
      title: `${parsedNftName} | Details Page`,
    };
  }
  if (tokenIdParams) {
    return {
      title: `#${tokenId} | Details Page`,
    };
  }

  return {
    title: "Page not found",
  };
};

export default async function NFTDetailsPage({
  searchParams,
}: {
  searchParams: {
    nftName: string;
    chain: string;
    contractAddress: string;
    tokenId: string;
    collectionId: string;
  };
}) {
  const { nftName, chain, contractAddress, tokenId, collectionId } =
    searchParams || {};

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
    !pageParams?.some((el) => el === tokenId || el === nftName);

  if (emptySearchParam || wrongSearchParam) {
    return notFound();
  }

  return (
    <HydrationBoundary state={dehydrateState}>
      <NTFDetailsSection {...{ chain, contractAddress, tokenId }} />
    </HydrationBoundary>
  );
}
