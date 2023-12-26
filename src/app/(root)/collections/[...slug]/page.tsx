import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import v from "voca";
import { prefetchNFTCollectionById } from "@/api/NFT/prefetch/prefetch-nft-collection-by-id";
import { prefetchCollectionById } from "@/api/collections/prefetch/prefetch-get-collection-by-id";
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
  const [, collectionId] = params?.slug || [];

  const { dehydrateState: dehydrateNftCollectionById } =
    await prefetchNFTCollectionById({
      collectionId: collectionId,
      limit: 20,
    });

  const { dehydrateState: dehydrateCollectionById } =
    await prefetchCollectionById({ collectionId: collectionId });

  return (
    <HydrationBoundary
      state={[dehydrateNftCollectionById, dehydrateCollectionById]}
    >
      <CollectionDetailsSection id={collectionId} />
    </HydrationBoundary>
  );
}
