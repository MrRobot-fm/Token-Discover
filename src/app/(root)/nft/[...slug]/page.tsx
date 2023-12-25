import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import v from "voca";
import { prefetchNFTByTokenId } from "@/api/NFT/prefetch/prefetch-nft-by-token-id";
import { NTFDetailsSection } from "@/components/organism/details/NFTDetailsSection/NTFDetailsSection";
import { getNftDetailsParams } from "./nft-details-page.utils";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  const [nftName, , , tokenId, collectionId] = params?.slug || [];

  const pageParams = await getNftDetailsParams({
    collectionId: collectionId,
  });

  const nameParams = pageParams?.some((el) => el === nftName);
  const tokenIdParams = pageParams?.some((el) => el === tokenId);

  const parsedNftName = v.titleCase(nftName).replaceAll("-", " ");

  if (nameParams && nftName !== "null") {
    return {
      title: `${parsedNftName} | Details Page`,
    };
  }
  if (tokenIdParams && tokenId !== "null") {
    return {
      title: `#${tokenId} | Details Page`,
    };
  }

  return {
    title: "Page not found",
  };
};

export default async function NFTDetailsPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const [nftName, chain, contractAddress, tokenId, collectionId] =
    params?.slug || [];

  const pageParams = await getNftDetailsParams({
    collectionId: collectionId,
  });

  const { dehydrateState } = await prefetchNFTByTokenId({
    chain,
    contractAddress,
    tokenId,
  });

  const wrongParams =
    !pageParams?.includes(contractAddress) ||
    !pageParams?.includes(chain) ||
    !pageParams.includes(tokenId) ||
    !pageParams?.includes(nftName);

  if (wrongParams) {
    return notFound();
  }

  return (
    <HydrationBoundary state={dehydrateState}>
      <NTFDetailsSection {...{ chain, contractAddress, tokenId }} />
    </HydrationBoundary>
  );
}
