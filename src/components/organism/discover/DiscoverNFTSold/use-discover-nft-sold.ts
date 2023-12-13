import { ChangeEvent, useMemo, useState } from "react";
import type { GetTopSalesByCollectionResponseModel } from "@/types/model/api-top-sales-by-collection";
import type { TopNftSoldCardProps } from "@/components/molecules/cards/TopNftSoldCard/TopNftSoldCard.props";

export const useDiscoverNftSold = ({
  data,
}: {
  data: (GetTopSalesByCollectionResponseModel | undefined)[];
}) => {
  const [value, setValue] = useState<string>("");

  const parsedItems: TopNftSoldCardProps[] = useMemo(() => {
    if (!data) return [];

    return data?.map((item) => {
      const { top_sales = [] } = item || {};

      const { nft_details } = top_sales[0] || {};

      const {
        name,
        token_id,
        chain,
        contract_address,
        image_url,
        collection,
        last_sale,
      } = nft_details || {};

      return {
        nftName: name || `#${token_id}`,
        href: `/nft/${chain}/${contract_address}/${token_id}`,
        image: {
          src: image_url,
          alt: name,
        },
        collection: {
          image: {
            src: collection?.image_url,
            alt: collection?.name,
          },
          name: collection?.name,
        },
        avatarStyle: { size: { base: "md", md: "lg" } },
        criptoCurrency: last_sale?.payment_token?.symbol,
        price: last_sale?.unit_price || 0,
      };
    });
  }, [data]);

  const filteredItems = useMemo(() => {
    return parsedItems?.filter(
      (item) =>
        item?.image.src !== "" &&
        item?.collection?.image.src !== "" &&
        item?.nftName !== null &&
        item?.nftName.toLowerCase().includes(value.toLowerCase())
    );
  }, [parsedItems, value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { filteredItems, handleInputChange, value };
};
