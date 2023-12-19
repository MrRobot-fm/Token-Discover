/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

export const useFetchNextPage = ({
  nextCursor,
  data = {},
  setNextPage,
  keyValue,
}: {
  nextCursor: string;
  data: Record<string, any> | undefined;
  setNextPage: Dispatch<SetStateAction<string>>;
  keyValue: "nfts" | "collections";
}) => {
  const [itemsLoaded, setItemsLoaded] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    const newData = data[keyValue] || [];

    if (!itemsLoaded?.length) {
      setItemsLoaded(newData);
    }
    if (itemsLoaded?.length) {
      setItemsLoaded((prev) => {
        return [...prev, ...newData];
      });
    }
  }, [data[keyValue]]);

  const collectionIds = useMemo(() => {
    return itemsLoaded?.map((collection) => collection?.collection_id);
  }, [itemsLoaded]);

  const handleFetchNextPage = () => {
    if (nextCursor !== null) return setNextPage(nextCursor);
  };

  return {
    handleFetchNextPage,
    collectionIds,
    itemsLoaded,
  };
};
