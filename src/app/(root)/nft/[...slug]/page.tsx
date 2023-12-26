import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import v from "voca";
import { prefetchNFTByTokenId } from "@/api/NFT/prefetch/prefetch-nft-by-token-id";
import { NTFDetailsSection } from "@/components/organism/details/NFTDetailsSection/NTFDetailsSection";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  const [collectionName, , , tokenId] = params?.slug || [];

  return {
    title: `${
      collectionName !== "null"
        ? v.titleCase(collectionName).replaceAll("-", " ")
        : `#${tokenId}`
    }  | Details Page`,
  };
};

export default async function NFTDetailsPage({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const [, chain, contractAddress, tokenId] = params?.slug || [];

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
