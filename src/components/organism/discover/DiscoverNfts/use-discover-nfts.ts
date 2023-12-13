import { ChangeEvent, useMemo, useState } from "react";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";
import type { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";

export const useDiscoverNfts = ({
  data,
}: {
  data: (GetNftByCollectionsIdResponseModel | undefined)[];
}) => {
  const [value, setValue] = useState<string>("");

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
        href: `/nft/${chain}/${contract_address}/${token_id}`,
        avatarImage: {
          src: collection?.image_url || "",
          alt: collection?.name || "",
        },
        cardImage: {
          src: image_url || previews?.image_medium_url || "",
          alt: name || "nft-img",
        },
      };
    });
  }, [data]);

  const filteredItems = useMemo(() => {
    return parsedItems?.filter(
      (item) =>
        item?.cardImage?.src !== "" &&
        item?.avatarImage?.src !== "" &&
        item?.nftName?.toLowerCase()?.includes(value.toLowerCase())
    );
  }, [parsedItems, value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { filteredItems, handleInputChange, value };
};
