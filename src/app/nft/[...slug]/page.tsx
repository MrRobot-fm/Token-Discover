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

  const parsedCollectionName = v.titleCase(collectionName).replaceAll("-", " ");

  return {
    title: `${
      collectionName !== "null" ? parsedCollectionName : `#${tokenId}`
    }  | Details Page`,
    description: `Details page for ${parsedCollectionName} `,
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
