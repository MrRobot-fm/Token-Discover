import { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";
import { NftCardFooter } from "@/components/atoms/NftCardFooter/NftCardFooter";
import { TopCollectionContent } from "@/components/atoms/TopCollectionContent/TopCollectionContent";

export const TopCollectionCardContent = ({
  nftByCollection,
}: {
  nftByCollection: GetNftByCollectionsIdResponseModel | undefined;
}) => {
  return (
    <>
      <TopCollectionContent
        image={{
          src: nftByCollection?.nfts[0]?.image_url || "",
          alt: nftByCollection?.nfts[0]?.name || "nft-img",
        }}
        size="md"
      />
      <div className="flex w-full justify-between base:gap-[1.5rem] md:gap-[2.5rem] lg:gap-[1.5rem] ">
        {nftByCollection?.nfts?.slice(1, 4).map((item, index) => (
          <TopCollectionContent
            key={index}
            image={{
              src: item?.previews?.image_small_url,
              alt: item?.collection?.name,
            }}
            size="sm"
          />
        ))}
      </div>

      <NftCardFooter
        avatarImage={{
          src: nftByCollection?.nfts[0]?.collection?.image_url || "",
          alt: nftByCollection?.nfts[0]?.collection?.name || "collection-img",
        }}
        collectionName={nftByCollection?.nfts[0]?.collection?.name || ""}
        footerWrapperStyles="p-0"
      />
    </>
  );
};
