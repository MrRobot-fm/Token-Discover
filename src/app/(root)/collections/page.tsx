import { HydrationBoundary } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import v from "voca";
import { prefetchNFTCollectionById } from "@/api/NFT/prefetch/prefetch-nft-collection-by-id";
import { prefetchCollectionById } from "@/api/collections/prefetch/prefetch-get-collection-by-id";
import { CollectionDetailsSection } from "@/components/organism/details/CollectionDetailsSection/CollectionDetailsSection";
import { getCollectionDetailsParams } from "./collections-details-page.utils";

export const generateMetadata = ({
  searchParams,
}: {
  searchParams: { collectionName: string };
}) => {
  const { collectionName } = searchParams || {};

  return {
    title: `${v.titleCase(collectionName).replaceAll("-", " ")} | Details Page`,
  };
};

export default async function CollectionsDetailsPage({
  searchParams,
}: {
  searchParams: { collectionName: string; collectionId: string };
}) {
  const { collectionName, collectionId } = searchParams || {};

  const pageParams = await getCollectionDetailsParams();

  const { dehydrateState: dehydrateNftCollectionById } =
    await prefetchNFTCollectionById({
      collectionId: collectionId,
      limit: 20,
    });

  const { dehydrateState: dehydrateCollectionById } =
    await prefetchCollectionById({ collectionId: collectionId });

  if (
    !collectionId ||
    !pageParams?.includes(collectionId) ||
    !pageParams?.includes(collectionName)
  ) {
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
