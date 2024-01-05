import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import v from "voca";
import { QueryParamsProvider } from "@/utils/providers/query-param-provider";
import { prefetchNFTByContract } from "@/api/NFT/prefetch/prefetch-nft-by-contract";
import { CollectionDetailsSection } from "@/components/organism/details/CollectionDetailsSection/CollectionDetailsSection";

export const generateMetadata = ({
  params,
}: {
  params: { slug: string[] };
}): Metadata => {
  const [collectionName] = params?.slug || [];

  return {
    title: `${v.titleCase(collectionName).replaceAll("-", " ")} | Details Page`,
  };
};

export default async function CollectionsDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [, chain, contractAddress] = params?.slug || [];

  const { dehydrateState: dehydrateNftCollectionById } =
    await prefetchNFTByContract({
      contractAddress,
      chain,
      limit: 20,
    });

  const { dehydrateState: dehydrateCollectionById } =
    await prefetchNFTByContract({ contractAddress, chain });

  return (
    <HydrationBoundary
      state={[dehydrateNftCollectionById, dehydrateCollectionById]}
    >
      <QueryParamsProvider>
        <CollectionDetailsSection
          contractAddress={contractAddress}
          chain={chain}
        />
      </QueryParamsProvider>
    </HydrationBoundary>
  );
}
