import { useMemo } from "react";
import { useForm } from "react-hook-form";
import type { GetNftByCollectionsIdResponseModel } from "@/types/model/api-nft-by-collection-id";

export const useDiscoverTopCollection = ({
  data,
}: {
  data: (GetNftByCollectionsIdResponseModel | undefined)[];
}) => {
  const { register, watch } = useForm<{ collectionSearchValue: string }>({
    defaultValues: { collectionSearchValue: "" },
  });

  const { collectionSearchValue } = watch();

  const filteredItems = useMemo(() => {
    return (data || [])?.filter((item) => {
      return (
        item?.nfts[0]?.image_url !== null &&
        item?.nfts[0]?.collection?.name
          ?.toLowerCase()
          ?.includes(collectionSearchValue?.toLowerCase())
      );
    });
  }, [data, collectionSearchValue]);

  return { filteredItems, register };
};
