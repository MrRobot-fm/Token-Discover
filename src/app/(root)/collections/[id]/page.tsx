import { HydrationBoundary } from "@tanstack/react-query";
import { prefetchNFTCollectionById } from "@/api/NFT/prefetch/prefetch-nft-collection-by-id";
import { prefetchCollectionById } from "@/api/collections/prefetch/prefetch-get-collection-by-id";
import { CollectionDetailsSection } from "@/components/organism/details/CollectionDetailsSection/CollectionDetailsSection";

export default async function CollectionsDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const { dehydrateState: dehydrateNftCollectionById } =
    await prefetchNFTCollectionById({
      collectionId: params?.id,
      limit: 20,
    });

  const { dehydrateState: dehydrateCollectionById } =
    await prefetchCollectionById({ collectionId: params?.id });

  return (
    <HydrationBoundary
      state={[dehydrateNftCollectionById, dehydrateCollectionById]}
    >
      <CollectionDetailsSection id={params?.id} />
    </HydrationBoundary>
  );
}
