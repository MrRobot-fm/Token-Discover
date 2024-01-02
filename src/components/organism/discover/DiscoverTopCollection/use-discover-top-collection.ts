import { useMemo } from "react";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";

export const useDiscoverTopCollection = ({
  data,
}: {
  data: (GetNftByCollectionsIdResponseModel | undefined)[];
}) => {
  const filteredItems = useMemo(() => {
    return (data || [])?.filter((item) => {
      return item?.nfts[0]?.image_url !== null;
    });
  }, [data]);

  return { filteredItems };
};
