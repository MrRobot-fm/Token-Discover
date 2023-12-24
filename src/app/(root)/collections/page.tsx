import { HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { prefetchNFTCollectionById } from "@/api/NFT/prefetch/prefetch-nft-collection-by-id";
import { prefetchCollectionById } from "@/api/collections/prefetch/prefetch-get-collection-by-id";
import { CollectionDetailsSection } from "@/components/organism/details/CollectionDetailsSection/CollectionDetailsSection";
import { getTopCollectionsId } from "./collections-details-page.utils";

export default async function CollectionsDetailsPage({
  searchParams,
}: {
  searchParams: { collectionId: string };
}) {
  const { collectionId } = searchParams || {};

  const topCollectionsId = await getTopCollectionsId();

  const { dehydrateState: dehydrateNftCollectionById } =
    await prefetchNFTCollectionById({
      collectionId: collectionId,
      limit: 20,
    });

  const { dehydrateState: dehydrateCollectionById } =
    await prefetchCollectionById({ collectionId: collectionId });

  if (!collectionId || !topCollectionsId?.includes(collectionId)) {
    return notFound();
  }

  return (
    <HydrationBoundary
      state={[dehydrateNftCollectionById, dehydrateCollectionById]}
    >
      <CollectionDetailsSection id={collectionId} />
    </HydrationBoundary>
  );
}
