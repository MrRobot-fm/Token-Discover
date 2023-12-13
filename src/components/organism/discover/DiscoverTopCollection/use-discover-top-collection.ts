import { ChangeEvent, useMemo, useState } from "react";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";

export const useDiscoverTopCollection = ({
  data,
}: {
  data: (GetNftByCollectionsIdResponseModel | undefined)[];
}) => {
  const [value, setValue] = useState<string>("");

  const filteredItems = useMemo(() => {
    return (data || [])?.filter((item) => {
      return (
        item?.nfts[0]?.image_url !== null &&
        item?.nfts[0]?.collection?.name
          .toLowerCase()
          .includes(value.toLowerCase())
      );
    });
  }, [data, value]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { filteredItems, handleInputChange, value };
};
