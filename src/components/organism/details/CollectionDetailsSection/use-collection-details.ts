import { useMemo } from "react";
import { useForm } from "react-hook-form";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";
import type { HighlightNFTedCardProps } from "@/components/molecules/cards/HighlightedNFTCard/HighlightedNFTCard.props";

export const useCollectionDetails = ({
  data,
}: {
  data: GetNftByCollectionsIdResponseModel["nfts"] | undefined;
}) => {
  const { register, watch } = useForm({
    defaultValues: { nftSearchValue: "" },
  });

  const { nftSearchValue } = watch();

  const parsedItems: HighlightNFTedCardProps[] = useMemo(() => {
    if (!data) return [];

    return data?.map((nft) => {
      const {
        collection,
        image_url,
        previews,
        name,
        token_id,
        chain,
        contract_address,
      } = nft || {};

      return {
        variant: "nft",
        collectionName: collection?.name,
        nftName: name || `#${token_id}`,
        href: `/nft/${chain}/${contract_address}/${token_id}`,
        avatarImage: {
          src: collection?.image_url,
          alt: ` ${collection?.name}-img`,
        },
        cardImage: {
          src: image_url || previews?.image_medium_url,
          alt: `${name}-img`,
        },
      };
    });
  }, [data]);

  const filteredItems = useMemo(() => {
    return parsedItems?.filter(
      (item) =>
        item?.cardImage?.src !== "" &&
        item?.avatarImage?.src !== "" &&
        item?.nftName?.toLowerCase()?.includes(nftSearchValue.toLowerCase())
    );
  }, [parsedItems, nftSearchValue]);

  return { filteredItems, register };
};
