import { HydrationBoundary } from "@tanstack/react-query";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import v from "voca";
import { prefetchNFTCollectionById } from "@/api/NFT/prefetch/prefetch-nft-collection-by-id";
import { prefetchCollectionById } from "@/api/collections/prefetch/prefetch-get-collection-by-id";
import { CollectionDetailsSection } from "@/components/organism/details/CollectionDetailsSection/CollectionDetailsSection";
import { getCollectionDetailsParams } from "./collections-details-page.utils";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  const [collectionName, collectionId] = params?.slug || [];

  const pageParams = await getCollectionDetailsParams();

  const nameParams = pageParams?.some((el) => el === collectionName);
  const collectionIdParams = pageParams?.some((el) => el === collectionId);

  if (nameParams && collectionIdParams && collectionName !== "null")
    return {
      title: `${v
        .titleCase(collectionName)
        .replaceAll("-", " ")} | Details Page`,
    };

  return {
    title: "Page not found",
  };
};

export default async function CollectionsDetailsPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [collectionName, collectionId] = params?.slug || [];

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
