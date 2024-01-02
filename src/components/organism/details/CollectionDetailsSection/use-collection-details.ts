import { useMemo } from "react";
import v from "voca";
import { GetNFTsByCollectionsAddressResponseModel } from "@/types/model/api-nfts-by-collection-address";
import type { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";

export const useCollectionDetails = ({
  data,
  collectionImage,
}: {
  data: GetNFTsByCollectionsAddressResponseModel["nfts"] | undefined;
  collectionImage: string;
}) => {
  const parsedItems: HighlightNFTedCardProps[] = useMemo(() => {
    if (!data) return [];

    return data?.map((nft) => {
      const {
        image,
        name,
        token_id,
        blockchain,
        collection_name,
        contract_address,
      } = nft || {};

      return {
        variant: "nft",
        collectionName: collection_name,
        nftName: name || `#${token_id}`,
        href: `/nft/${v.kebabCase(name) || null}/${
          blockchain === "ETH" && "ethereum"
        }/${contract_address}/${token_id}`,
        avatarImage: {
          src: collectionImage,
          alt: ` ${collection_name}-img`,
        },
        cardImage: {
          src: image,
          alt: `${name}-img`,
        },
      };
    });
  }, [collectionImage, data]);

  const filteredItems = useMemo(() => {
    return parsedItems?.filter(
      (item) => item?.cardImage?.src !== "" && item?.avatarImage?.src !== ""
    );
  }, [parsedItems]);

  return { filteredItems };
};
