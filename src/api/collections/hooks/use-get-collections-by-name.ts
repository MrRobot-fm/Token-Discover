import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getCollectionByName } from "@/api/collections/get-collection-by-name";
import type { GetCollectionsByNameResponseModel } from "@/types/model/api-collection-by-name";

export const useGetCollectionsByName = ({
  collectionName,
  ...queryOptions
}: {
  collectionName: string;
  queryOptions?: UseQueryOptions<GetCollectionsByNameResponseModel>;
}) => {
  const parsedParams: { search: string } = useMemo(() => {
    return {
      search: collectionName,
    };
  }, [collectionName]);

  return useQuery({
    queryKey: ["get-collections-by-name", parsedParams],
    queryFn: () => getCollectionByName(parsedParams),
    ...queryOptions,
  });
};
