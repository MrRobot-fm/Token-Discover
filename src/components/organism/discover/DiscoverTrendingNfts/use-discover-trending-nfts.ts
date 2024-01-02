import { useMemo } from "react";
import v from "voca";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";
import type { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";

export const useDiscoverTrendingNfts = ({
  data,
}: {
  data: (GetNftByCollectionsIdResponseModel | undefined)[];
}) => {
  const parsedItems: HighlightNFTedCardProps[] = useMemo(() => {
    if (!data) return [];

    return data?.map((nft) => {
      const { nfts = [] } = nft || {};
      const {
        collection,
        name,
        token_id,
        chain,
        contract_address,
        image_url,
        previews,
      } = nfts[0] || {};

      return {
        variant: "nft",
        collectionName: collection?.name,
        nftName: name || `#${token_id}`,
        href: `/nft/${
          v.kebabCase(name) || null
        }/${chain}/${contract_address}/${token_id}/${collection?.collection_id}`,
        avatarImage: {
          src: collection?.image_url || "",
          alt: `${collection?.name}-img` || `#${token_id}-img`,
        },
        cardImage: {
          src: image_url || previews?.image_medium_url || "",
          alt: `${name}-img`,
          priority: true,
        },
      };
    });
  }, [data]);

  const filteredItems = useMemo(() => {
    return parsedItems?.filter(
      (item) => item?.cardImage?.src !== "" && item?.avatarImage?.src !== ""
    );
  }, [parsedItems]);

  return { filteredItems };
};
